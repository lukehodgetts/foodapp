import { Inputbox, InputContainer } from "./index.styles";

interface Props {
  onChange: (text: string) => void;
  value: string;
}

const Textbox: React.FC<Props> = ({ onChange, value }) => {
  return (
    <InputContainer>
      <Inputbox value={value} onChange={(e) => onChange(e.target.value)} />
    </InputContainer>
  );
};

export default Textbox;
