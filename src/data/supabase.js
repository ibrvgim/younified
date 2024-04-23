import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xretfktcfplixqrahaoo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZXRma3RjZnBsaXhxcmFoYW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NjkzNDAsImV4cCI6MjAyOTQ0NTM0MH0.RsyvL5WFPOI6fUJ1-QkJ1JuCAzw4q8CJg1Jbaggo2ys';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
