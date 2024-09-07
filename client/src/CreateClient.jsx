import { createClient } from '@supabase/supabase-js';

const client = createClient(import.meta.env.VITE_PROJECT_KEY, import.meta.env.VITE_ANON_KEY);

const supabase = () => client;

export default supabase;