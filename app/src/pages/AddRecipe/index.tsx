import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Theme } from "../../hooks/useTheme";
import useAxios from "axios-hooks";

import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../app.styles";
import {
  RecipeContainer,
  Title,
  TitleContainer,
  IngredientButton,
  ButtonContainer,
  SaveButton,
  SaveButtonContainer,
} from "./index.styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Textbox from "../../components/Textbox";

interface Props {
  selectedTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const defaultState = {
  name: "",
  calories: "",
  servings: "",
  ingredients: [""],
  image: "",
};

const AddRecipe: React.FC<Props> = ({ selectedTheme, changeTheme }) => {
  let history = useHistory();
  const [form, setForm] = useState(defaultState);

  const [_, executePost] = useAxios(
    {
      url: "http://localhost:8080/recipes",
      method: "POST",
    },
    { manual: true }
  );

  const saveRecipe = () => {
    executePost({ data: form });
    setForm(defaultState);
  };

  const addNewIngredient = () => {
    setForm({ ...form, ingredients: [...form.ingredients, ""] });
  };

  const removeIngredient = (indexToDelete: number) => {
    setForm({
      ...form,
      ingredients: form.ingredients.filter(
        (_, index) => index !== indexToDelete
      ),
    });
  };

  return (
    <Container>
      <Header
        hidden={true}
        selectedTheme={selectedTheme}
        onThemeToggle={changeTheme}
        onTitleClick={() => history.push("/")}
        additionalTitle={history.location.pathname}
      />
      <RecipeContainer>
        <TitleContainer>
          <Title>recipe name</Title>
        </TitleContainer>
        <Textbox
          value={form.name}
          onChange={(text) => setForm({ ...form, name: text })}
        />
        <div />
        <TitleContainer>
          <Title>calories</Title>
        </TitleContainer>
        <Textbox
          value={form.calories}
          onChange={(text) => setForm({ ...form, calories: text })}
        />
        <div />
        <TitleContainer>
          <Title>num of servings</Title>
        </TitleContainer>
        <Textbox
          value={form.servings}
          onChange={(text) => setForm({ ...form, servings: text })}
        />
        <div />
        {form.ingredients.map((ingredient, i) => {
          const isLast = i === form.ingredients.length - 1;
          return (
            <>
              <TitleContainer>
                <Title>ingredient {i + 1}</Title>
              </TitleContainer>
              <Textbox
                value={ingredient}
                onChange={(text) => {
                  form.ingredients[i] = text;
                  setForm({ ...form });
                }}
              />
              <ButtonContainer>
                <IngredientButton
                  onClick={
                    isLast ? addNewIngredient : () => removeIngredient(i)
                  }
                  icon={!isLast ? faMinusCircle : faPlusCircle}
                  color={!isLast ? "red" : "green"}
                  size="2x"
                  isLastIngredient={isLast}
                />
              </ButtonContainer>
            </>
          );
        })}
        <TitleContainer>
          <Title>image</Title>
        </TitleContainer>
        <Textbox
          value={form.image}
          onChange={(text) => setForm({ ...form, image: text })}
        />
        <div />
        <div />
        <SaveButtonContainer>
          <SaveButton onClick={() => saveRecipe()}>save recipe</SaveButton>
        </SaveButtonContainer>
      </RecipeContainer>
      <Footer hasData={false} />
    </Container>
  );
};

export default AddRecipe;
