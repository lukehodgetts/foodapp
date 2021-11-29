import {
  faEdit,
  faThLarge,
  faTh,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import {
  SearchContainer,
  Textbox,
  ViewButton,
  AddRecipeButton,
  ButtonContainer,
} from "./index.styles";
import { View } from "../../types/view";

interface Props {
  placeholder: string;
  onEnterPress?: () => void;
  inputText: string;
  onChange: (text: string) => void;
  onAddButtonPress: () => void;
  onViewButtonPress: (view: View) => void;
  view: View;
}

const Search: React.FC<Props> = ({
  placeholder,
  onEnterPress,
  inputText,
  onChange,
  onAddButtonPress,
  onViewButtonPress,
  view,
}) => {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterPress && inputText !== "") {
      onEnterPress();
    }
  };

  return (
    <SearchContainer>
      <Textbox
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        value={inputText}
        onChange={(e) => onChange(e.target.value)}
        maxLength={30}
      />
      <ButtonContainer>
        <ViewButton
          icon={faThLarge}
          onClick={() => onViewButtonPress("grid")}
          isSelected={view === "grid"}
        />
        <ViewButton icon={faTh} onClick={() => onViewButtonPress("tile")} isSelected={view === "tile"}/>
        <ViewButton icon={faList} onClick={() => onViewButtonPress("list")} isSelected={view === "list"}/>
        <AddRecipeButton icon={faEdit} onClick={onAddButtonPress} />
      </ButtonContainer>
    </SearchContainer>
  );
};

export default Search;
