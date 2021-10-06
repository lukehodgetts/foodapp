import { useState, useEffect } from "react";
import useAxios from "axios-hooks";

import { dark, light } from "./themes";
import {
  Container,
  MainContent,
  Loading,
  FlexBox,
  Watermark,
  NextButton,
  PrevButton,
} from "./app.styles";
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
        yield: number;
      };
    }
  ];
}

function App() {
  const [{ data, loading, error }, refetch] = useAxios<GetRecipeResults>(
    {
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: {
        q: "",
        to: 12,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      },
    },
    { manual: true }
  );

  const [searchText, setSearchText] = useState("");
  const [resultsPage, setResultsPage] = useState(1);

  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    if (searchText !== "") {
      refetch({
        params: {
          q: searchText,
          to: 12 * resultsPage,
          from: 12 * (resultsPage - 1),
        },
      });
      console.log(resultsPage);
    }
  }, [resultsPage]);

  const onSearch = () => {
    setResultsPage(1);
    refetch({
      params: {
        q: searchText,
        to: 12,
      },
    });
  };

  const onNextPage = () => {
    setResultsPage(resultsPage + 1);
  };

  const onPrevPage = () => {
    setResultsPage(resultsPage - 1);
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Container>
        <Header
          onThemeToggle={(theme) => changeTheme(theme)}
          selectedTheme={theme}
          placeholder="search"
          onSearch={onSearch}
          onSearchChange={(text) => setSearchText(text)}
          searchText={searchText}
        />
        {error && <h1>error</h1>}
        {loading && (
          <FlexBox>
            <Loading />
          </FlexBox>
        )}
        {!data && !loading && (
          <FlexBox>
            <Watermark>use search bar above</Watermark>
          </FlexBox>
        )}
        {data && !loading && (
          <>
            <PrevButton onClick={onPrevPage}>back</PrevButton>
            <MainContent>
              {data.hits.map((entry) => (
                <Card
                  name={entry.recipe.label}
                  image={entry.recipe.image}
                  calories={Math.round(
                    entry.recipe.calories / entry.recipe.yield
                  )}
                  ingredients={entry.recipe.ingredients.length}
                  noOfServings={entry.recipe.yield}
                  url={entry.recipe.url}
                />
              ))}
            </MainContent>
            <NextButton onClick={onNextPage}>next</NextButton>
          </>
        )}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
