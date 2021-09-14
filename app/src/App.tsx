import useAxios from "axios-hooks";

import { dark, light } from "./themes";
import { Container, MainContent, Footer } from "./app.styles";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import { useState } from "react";

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

  const [theme, setTheme] = useState<"light"|"dark">("light")

  if (loading) return <h1>...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <ThemeProvider theme={(theme === "light") ? light : dark}>
      <Container>
        <Header onThemeToggle={(theme)=>setTheme(theme)} selectedTheme={theme}/>
        <MainContent>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
          <h1>placeholder</h1>
        </MainContent>
        <Footer gridArea="footer">Footer</Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
