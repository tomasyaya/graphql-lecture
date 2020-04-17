import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getPets, getPet, addPet } from "./graphql";

console.log(getPets);
function App() {
  const { loading, error, data } = useQuery(getPet, {
    variables: {
      input: {
        name: "Tony",
      },
    },
  });
  const res = useQuery(getPets);
  const [add, result] = useMutation(addPet, {
    update(cache) {
      const res = cache.readQuery({ query: getPets });
    },
  });
  useEffect(() => {
    add({
      variables: {
        input: {
          id: Math.floor(Math.random() * 1000),
          name: "tomas",
          breed: "tomas",
          age: 12,
        },
      },
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
