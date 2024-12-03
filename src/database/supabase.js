import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eujmrmutmpwyylfqhkge.supabase.co';
const supabasAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1am1ybXV0bXB3eXlsZnFoa2dlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjgwMzcxNywiZXhwIjoyMDQ4Mzc5NzE3fQ.tiCUx8sNYgtac7qmWr52xaNkXa-YQVhHb0YRAWQ3Urk';

export const supabase = createClient(supabaseUrl,supabasAnonKey);