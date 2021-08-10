import React from "react";
import useAxios from "axios-hooks";

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: {
        q: "chicken",
        to: 20,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      },
    },
    { manual: true }
  );

  console.log(data);

  
  if (loading) return <h1>...</h1>;
  if (error) return <h1>error</h1>;

  return <div>123</div>;
}

export default App;
