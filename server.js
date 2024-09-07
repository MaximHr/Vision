
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const {Resend} = require('resend');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const cors = require('cors');
const {createClient} = require('@supabase/supabase-js');
const supabase = createClient(process.env.PROJECT_KEY, process.env.ANON_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
});
const resend = new Resend(process.env.RESEND_SECRET);
const endpointSecret = process.env.ENDPOINT_SECRET;
const domain = 'http://localhost:5173/';
// const allowedDomains = [
//   'https://domain.com',
//   'https://www.domain.com'
// ];

app.use(cors(
  // {
  //   origin: allowedDomains
  // }
));
app.use(express.urlencoded({extended: true}));
app.post('/webhooks',
  express.raw({ type: 'application/json' }),
  async(request, response) => {
    let event = request.body;
    if (endpointSecret) {
      const signature = request.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
    if(event.type === 'checkout.session.completed') {
      const client_email = event.data.object.customer_details.email;
      const client_name = event.data.object.customer_details.name;
      const amount = event.data.object.amount_total / 100;
      const info = event.data.object.metadata; //info.title, .date, .subtitle, .id
      console.log('send email');
    }
    response.send();
  }
);

app.use(express.json());

app.post('/purchase', async (req, res) => {
  try {
    const {id} = req.body;
    const {error, data} = await supabase.from('events').select('uuid, image_url, price, title, date, subtitle').eq('uuid', id);
    let details = data[0];
    if(error == null) {
      console.log(details);
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'BGN',
              product_data: {
                name: details.title,
                images:[details.image_url]
              },
              unit_amount: details.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        metadata: {
          id: id,
          title: details.title,
          date: details.date,
          subtitle: details.subtitle
        },
        success_url: `${domain}success`,
        cancel_url: `${domain}events/${id}`,
      });
      res.status(200).json(session.url);
    } else {
      throw Error(error.message);
    }
  }catch(err) {
    res.status(502).json({error: err.message})
  }
});


app.listen(PORT, () => console.log('Running on port 3000'));