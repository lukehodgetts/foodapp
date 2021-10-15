import { useHistory } from "react-router-dom";

import { Container } from "../../app.styles";
import { MainContent } from "./index.styles";
import { Theme } from "../../hooks/useTheme";
import Header from "../../components/Header";

interface Props {
  selectedTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const AddRecipe: React.FC<Props> = ({ selectedTheme, changeTheme }) => {
  let history = useHistory();

  return (
    <Container>
      <Header
        hidden={true}
        selectedTheme={selectedTheme}
        onThemeToggle={changeTheme}
        onTitleClick={() => history.push("/")}
        additionalTitle={history.location.pathname}
      />
      <MainContent></MainContent>
    </Container>
  );
};

export default AddRecipe;
