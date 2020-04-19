import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getPets } from "../graphql";

export const usePets = () => {
  const [page, setPage] = useState(2);
  const { loading, error, data, fetchMore } = useQuery(getPets, {
    variables: { page: 1 },
  });

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        page,
      },
      updateQuery: (
        { getPets: prevPets },
        { fetchMoreResult: { getPets: newPets } }
      ) => {
        const removeDuplicates = [...prevPets, ...newPets].reduce(
          (acc, next) => {
            if (!acc[next.id]) {
              acc[next.id] = true;
              acc.items = [...acc.items, next];
            }
            return acc;
          },
          { items: [] }
        );
        return {
          getPets: [...removeDuplicates.items],
        };
      },
    });
    setPage((page) => page++);
  };

  return {
    loading,
    error,
    data,
    handleFetchMore,
  };
};
