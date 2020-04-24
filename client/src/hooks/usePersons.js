import { useQuery } from "@apollo/client";
import { getPersons } from "../graphql";

export const usePersons = () => {
  const { error, loading, data } = useQuery(getPersons);
  return {
    error,
    loading,
    data,
  };
};
