import { createClient } from '@supabase/supabase-js';

// Correctly access the environment variables with the VITE_ prefix
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_KEY;

// Ensure that the variables are not undefined before creating the client
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be defined');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
