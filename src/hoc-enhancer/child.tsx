import React from "react";
import withLoadingFunction from "./loading.fs.hoc";

const MyChild = () => {
  return <p>Child</p>;
};

export default withLoadingFunction(MyChild);
