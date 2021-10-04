import { Body, Title, Image, Label, Details } from "./index.styles";

interface Props {
  name: string;
  image: string;
  url?: string;
  calories?: number;
  ingredients?: number;
}

const Card: React.FC<Props> = ({ name, image, url, calories, ingredients }) => {
  return (
    <Body>
      <Image src={image} />
      <Details>
        <Title>{name}</Title>
        <Label>{calories}</Label>
        <Label>{ingredients}</Label>
      </Details>
    </Body>
  );
};

export default Card;
