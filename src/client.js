import { createClient } from '@supabase/supabase-js'

const URL = 'https://xafvesxivnwjipgxirhe.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZnZlc3hpdm53amlwZ3hpcmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1OTE0MzgsImV4cCI6MTk5NjE2NzQzOH0.yJ_gcAaWI7KtInCuYXSnLfzkSmFn-kBPZUOIBxvanTw';

export const supabase = createClient(URL, API_KEY);
