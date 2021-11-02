import { Inputbox, InputContainer } from "./index.styles";

interface Props {
  onChange: (text: string) => void;
  value: string;
  type: string;
}

const Textbox: React.FC<Props> = ({ onChange, value, type }) => {
  return (
    <InputContainer>
      <Inputbox
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
    </InputContainer>
  );
};

export default Textbox;
