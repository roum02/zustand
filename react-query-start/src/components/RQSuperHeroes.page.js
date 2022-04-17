import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  console.log(isLoading, data);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
export default RQSuperHeroes;
