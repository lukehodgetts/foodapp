import { Switch } from "@material-ui/core";

import { Container, ThemeSwitch, Title, SearchContainer } from "./index.styles";
import Search from "../Search";

interface Props {
  onThemeToggle: (theme: "light" | "dark") => void;
  selectedTheme: "light" | "dark";
  placeholder: string;
  onSearch: (text:string)=>void;
}

const Header: React.FC<Props> = ({ onThemeToggle, selectedTheme, placeholder, onSearch}) => {
  return (
    <Container>
      <Title>foodapp</Title>
      <SearchContainer>
        <Search placeholder={placeholder} onEnterPress={onSearch}/>
      </SearchContainer>
      <ThemeSwitch>
        <Switch
          onChange={(e, checked) => onThemeToggle(checked ? "light" : "dark")}
          checked={selectedTheme === "light"}
        />
      </ThemeSwitch>
    </Container>
  );
};

export default Header;
