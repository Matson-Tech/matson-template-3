
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzhbmjygrzjardgruunp.supabase.co';
const supabaseAnonKey = 'your-anon-key'; // This would normally come from environment variables

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
