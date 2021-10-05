import useAxios from "axios-hooks";

import { dark, light } from "./themes";
import {
  Container,
  MainContent,
  Loading,
  FlexBox,
  Watermark,
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

  const { theme, changeTheme } = useTheme();

  const onSearch = (text: string) => {
    refetch({
      params: {
        q: text,
        to: 12,
      },
    });
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Container>
        <Header
          onThemeToggle={(theme) => changeTheme(theme)}
          selectedTheme={theme}
          placeholder="search"
          onSearch={onSearch}
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
        {data && (
          <MainContent>
            {data.hits.map((entry) => (
              <Card
                name={entry.recipe.label}
                image={entry.recipe.image}
                calories={Math.round(entry.recipe.calories / entry.recipe.yield)}
                ingredients={entry.recipe.ingredients.length}
                url={entry.recipe.url}
              />
            ))}
          </MainContent>
        )}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
