import { createClient } from "@supabase/supabase-js";

// .env 파일에 SUPABASE_KEY=발급받은_키 를 추가하세요.
const supabaseUrl = "https://gxecskpoklqvncueekog.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
