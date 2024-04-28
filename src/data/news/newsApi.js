import supabase from '../supabase';

export async function getNews() {
  const { data: news, error } = await supabase.from('news').select('*');

  if (error) throw new Error(error.message);

  return news;
}
