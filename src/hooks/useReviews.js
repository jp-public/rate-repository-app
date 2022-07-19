import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { data } = useQuery(GET_REVIEWS, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network'
  });

  return {
    reviews: data?.repository.reviews
  };
};

export default useReviews;