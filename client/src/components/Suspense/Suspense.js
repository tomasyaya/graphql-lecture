import React from "react";

import Loader from "../Loader";

const Suspense = ({ error, loading, children }) => {
  if (error) return "Sorry, there has been an error";

  if (loading) return <Loader />;

  return children;
};

export default Suspense;
