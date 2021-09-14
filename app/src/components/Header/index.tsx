import { Switch } from "@material-ui/core";

import { Container, ThemeSwitch } from "./index.styles";

interface Props {
  onThemeToggle: (theme: "light" | "dark") => void;
  selectedTheme: "light" | "dark";
}

const Header: React.FC<Props> = ({ onThemeToggle, selectedTheme }) => {
  return (
    <Container>
      <ThemeSwitch>
        <Switch
          onChange={(e, checked) => onThemeToggle(checked ? "light" : "dark")}
          checked={(selectedTheme === "light")}
        />
      </ThemeSwitch>
    </Container>
  );
};

export default Header;
