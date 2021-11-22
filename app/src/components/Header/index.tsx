import { Switch } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { faThLarge, faTh, faList } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  SubGrid,
  ViewSwitch,
  ThemeSwitch,
  Title,
  TitleContainer,
  LargeView,
  TileView,
  ListView,
} from "./index.styles";
import Search from "../Search";

type BaseProps = {
  onThemeToggle: (theme: "light" | "dark") => void;
  selectedTheme: "light" | "dark";
  onTitleClick?: () => void;
  additionalTitle?: string;
};

type HiddenProps = BaseProps & {
  hidden: true;
};

type VisibleProps = BaseProps & {
  hidden: false;
  onSearch?: () => void;
  searchText: string;
  onSearchChange: (text: string) => void;
  onAddButtonPress: () => void;
};

type Props = HiddenProps | VisibleProps;

const Header: React.FC<Props> = (props) => {
  let history = useHistory();
  const pathArray = history.location.pathname
    .slice(1)
    .split("/")
    .filter((page) => !!page);
  return (
    <Container>
      <TitleContainer>
        <Title onClick={props.onTitleClick}>foodapp</Title>
        {pathArray.map((page, i) => {
          const onClick = () =>
            i === pathArray.length - 1
              ? history.go(0)
              : history.push(`/${page}`);
          return <Title onClick={onClick}>/{page}</Title>;
        })}
      </TitleContainer>
      {!props.hidden && (
        <Search
          placeholder="search"
          onEnterPress={props.onSearch}
          inputText={props.searchText}
          onChange={props.onSearchChange}
          onAddButtonPress={props.onAddButtonPress}
        />
      )}
      <SubGrid>
        <ViewSwitch>
          <LargeView icon={faThLarge} />
          <TileView icon={faTh}/>
          <ListView icon={faList}/>
        </ViewSwitch>
        <ThemeSwitch>
          <Switch
            onChange={(e, checked) =>
              props.onThemeToggle(checked ? "light" : "dark")
            }
            checked={props.selectedTheme === "light"}
          />
        </ThemeSwitch>
      </SubGrid>
    </Container>
  );
};

export default Header;
