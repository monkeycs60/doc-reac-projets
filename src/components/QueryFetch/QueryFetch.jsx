import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const QueryFetch = () => {
  const { data, error, status } = useQuery("todos", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data)
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <div key={todo.id}>
          <li>
            {todo.id} = {todo.title}
          </li>
          <br />
        </div>
      ))}
    </ul>
  );
};

export default QueryFetch;
