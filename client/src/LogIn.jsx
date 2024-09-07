import { Card, Box, TextField, Flex, Text, Button } from "@radix-ui/themes";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import supabase from "./CreateClient";

//vizion15@abv.bg klara105

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signInHandler = async(e) => {
    try {
      e.preventDefault();
      if(email.trim() == '' || pass.trim() == ''){
        throw new Error('Please fill out the forms !');
      } else {
        setLoading(true);
        //sign in user
        const { data, error } = await supabase().auth.signInWithPassword({
          email: email,
          password: pass,
        });
        if(data?.user?.id != '' && error == null) {
          navigate('/admin/home');
        } else {
          setLoading(false);
          throw new Error('Invalid Credentials.');
        }
      }
    }catch(err) {
      toast.error(err.message);
    }
  }

  return (
    <Flex className="login" style={{width: '100vw'}} justify='center' py='9'>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <Box width='350px' mb='4'>
          <Card size='5' variant="surface"> 
            <form onSubmit={(e) => signInHandler(e)}>
              <Flex direction='column' gap='6'>
                <Text weight='bold' size='7' style={{alignSelf: 'center'}}>Добре дошли</Text>
                <Flex direction='column' gap='3'>
                  <Text>Имейл</Text>
                  <TextField.Root 
                    type='text' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField.Root>
                </Flex>     
                <Flex direction='column' gap='3'>
                  <Flex justify='between' align='center'>
                    <Text>парола</Text>
                  </Flex>
                  <TextField.Root 
                    type="password"
                    value={pass}
                    minLength='6'
                    autoComplete="on"
                    onChange={(e) => setPass(e.target.value)}
                  ></TextField.Root>
                </Flex>
                <Button 
                className={!loading ? "btn btn-nav" : "btn btn-nav-outline"}
                  size='3'
                  disabled={loading}
                  type="submit" 
                  // variant={loading ? 'outline' : ''}
                >{!loading ? "Влез" : "Зарежда..."} </Button>
              </Flex>
              </form>
          </Card>
        </Box>
    </Flex>
  )
};

export default LogIn;


{/* <Flex direction='column' gap='3'>
<Text>Name</Text>
<TextField.Root placeholder='John Doe'></TextField.Root>
</Flex>
<Flex direction='column' gap='3'>
<Text>Phone number</Text>
<TextField.Root placeholder='John Doe'></TextField.Root>
</Flex> */}