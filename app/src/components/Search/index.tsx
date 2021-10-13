import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { SearchContainer, Textbox, AddButton } from "./index.styles";

interface Props {
  placeholder: string;
  onEnterPress?: () => void;
  inputText: string;
  onChange: (text: string) => void;
}

const Search: React.FC<Props> = ({
  placeholder,
  onEnterPress,
  inputText,
  onChange,
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
      />
      <AddButton icon={faEdit} />
    </SearchContainer>
  );
};

export default Search;
