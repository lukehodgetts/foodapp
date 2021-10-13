import { Switch } from "@material-ui/core";

import { Container, ThemeSwitch, Title } from "./index.styles";
import Search from "../Search";

interface Props {
  onThemeToggle: (theme: "light" | "dark") => void;
  selectedTheme: "light" | "dark";
  placeholder: string;
  onSearch: () => void;
  searchText: string;
  onSearchChange: (text: string) => void;
  onTitleClick?: () => void;
}

const Header: React.FC<Props> = ({
  onThemeToggle,
  selectedTheme,
  placeholder,
  onSearch,
  searchText,
  onSearchChange,
  onTitleClick,
}) => {
  return (
    <Container>
      <Title>
        <h1 onClick={onTitleClick}>foodapp</h1>
      </Title>
      <Search
        placeholder={placeholder}
        onEnterPress={onSearch}
        inputText={searchText}
        onChange={onSearchChange}
      />
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
