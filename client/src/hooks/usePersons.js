import { useQuery } from "@apollo/client";
import { getPersons } from "../graphql";

export const usePersons = () => {
  const { error, loading, data } = useQuery(getPersons);
  console.log(data);
  return {
    error,
    loading,
    data,
  };
};
