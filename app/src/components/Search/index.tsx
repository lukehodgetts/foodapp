import { useState } from "react";
import { Textbox } from "./index.styles";

interface Props {
  placeholder: string;
  onEnterPress?: (text:string) => void;
}

const Search: React.FC<Props> = ({ placeholder, onEnterPress }) => {
  const [inputText, setinputText] = useState("");

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterPress && inputText !== "") {
      onEnterPress(inputText);
    }
  };

  return (
    <Textbox
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      value={inputText}
      onChange={(e) => setinputText(e.target.value)}
    />
  );
};

export default Search;
