import useAxios from "axios-hooks";
import { useState } from "react";

import { dark, light } from "./themes";
import { Container, MainContent } from "./app.styles";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

interface GetRecipeResults {
  hits: [
    {
      recipe: {
        label: string;
        image: string;
        calories: number;
        ingredients: {}[];
        url: string;
      };
    }
  ];
}

function App() {
  const [{ data, loading, error }, refetch] = useAxios<GetRecipeResults>(
    {
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: {
        q: "chocolate",
        to: 18,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      },
    },
    { manual: true }
  );

  const { theme, changeTheme } = useTheme();

  const onSearch = (text: string) => {
    refetch({
      params: {
        q: text,
        to: 18,
      },
    });
  };

  if (loading) return <h1>...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Container>
        <Header
          onThemeToggle={(theme) => changeTheme(theme)}
          selectedTheme={theme}
          placeholder="deez nuts"
          onSearch={onSearch}
        />
        <MainContent>
          {data &&
            data.hits.map((entry) => (
              <Card name={entry.recipe.label} image={entry.recipe.image} />
            ))}
        </MainContent>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
