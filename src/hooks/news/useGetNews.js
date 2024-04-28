import { useQuery } from '@tanstack/react-query';
import { getNews } from '../../data/news/newsApi';

function useGetNews() {
  const { isPending, data: getAllNews } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  return { isPending, getAllNews };
}

export default useGetNews;
