import supabase from '../supabase';

export async function setVotes(vote) {
  const { data, error } = await supabase
    .from('votes')
    .insert([{ votes_result: vote }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getVotes() {
  const { data: votes, error } = await supabase
    .from('votes')
    .select('votes_result');

  if (error) throw new Error(error.message);

  return votes;
}
