import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "axios-hooks";

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../app.styles";
import {
  MainContent,
  Loading,
  FlexBox,
  Watermark,
  NextButton,
  PrevButton,
} from "./index.styles";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Theme } from "../../hooks/useTheme";

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

interface Props {
  selectedTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const Homepage: React.FC<Props> = ({ selectedTheme, changeTheme }) => {
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

  let history = useHistory();

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

  const onTitleClick = () => {
    window.location.reload();
  };

  return (
    <Container>
      <Header
        onThemeToggle={(theme) => changeTheme(theme)}
        selectedTheme={selectedTheme}
        onSearch={onSearch}
        onSearchChange={(text) => setSearchText(text)}
        searchText={searchText}
        onTitleClick={onTitleClick}
        onAddButtonPress={() => history.push("/addrecipe")}
        hidden={false}
      />
      {error && <h1>error</h1>}
      {loading && (
        <FlexBox gridArea="main">
          <Loading />
        </FlexBox>
      )}
      {!data && !loading && (
        <FlexBox gridArea="main">
          <Watermark>use search bar above</Watermark>
        </FlexBox>
      )}
      <>
        <FlexBox gridArea="prev">
          {resultsPage !== 1 && (
            <PrevButton
              icon={faArrowAltCircleLeft}
              onClick={onPrevPage}
              size="4x"
            ></PrevButton>
          )}
        </FlexBox>
        {data && !loading && (
          <MainContent>
            {data.hits.map((entry) => (
              <Card
                name={entry.recipe.label}
                image={entry.recipe.image}
                calories={Math.round(
                  entry.recipe.calories / entry.recipe.yield
                )}
                ingredients={entry.recipe.ingredients.length}
                serves={entry.recipe.yield}
                url={entry.recipe.url}
              />
            ))}
          </MainContent>
        )}
        {data && (
          <FlexBox gridArea="next">
            <NextButton
              icon={faArrowAltCircleRight}
              onClick={onNextPage}
              size="4x"
            ></NextButton>
          </FlexBox>
        )}
      </>
      <Footer pageNumber={resultsPage} hasData={!!data} />
    </Container>
  );
};

export default Homepage;
