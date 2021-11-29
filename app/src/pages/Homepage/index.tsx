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
import GridCard from "../../components/GridCard";
import TileCard from "../../components/TileCard";
import Footer from "../../components/Footer";
import { Theme } from "../../hooks/useTheme";
import { View } from "../../types/view";

interface GetRecipeResults {
  hits: [
    {
      recipe: {
        label: string;
        image: string;
        calories: number;
        ingredientLines: string[];
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
      url: "http://localhost:8080/recipes",
      params: {
        search: "",
        to: 12,
        from: 0,
      },
    },
    { manual: true }
  );

  const [searchText, setSearchText] = useState("");
  const [resultsPage, setResultsPage] = useState(1);
  const [view, setView] = useState<View>("grid");

  const viewType = {
    grid: 12,
    tile: 24,
    list: 12,
  };

  useEffect(() => {
    if (searchText !== "") {
      refetch({
        params: {
          search: searchText,
          to: viewType[view] * resultsPage,
          from: viewType[view] * (resultsPage - 1),
        },
      });
    }
  }, [resultsPage, view]);

  let history = useHistory();

  const onSearch = () => {
    setResultsPage(1);
    refetch({
      params: {
        search: searchText,
        to: viewType[view],
        from: 0,
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
        onViewButtonPress={setView}
        view={view}
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
          <MainContent view={view}>
            {view === "grid"
              ? data.hits.map((entry) => (
                  <GridCard
                    name={entry.recipe.label}
                    image={entry.recipe.image}
                    calories={Math.round(
                      entry.recipe.calories / entry.recipe.yield
                    )}
                    ingredients={entry.recipe.ingredientLines.length}
                    serves={entry.recipe.yield}
                    url={entry.recipe.url}
                  />
                ))
              : data.hits.map((entry) => (
                  <TileCard
                    name={entry.recipe.label}
                    image={entry.recipe.image}
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
