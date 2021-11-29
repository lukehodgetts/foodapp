import { Body, Title, Image, Label, Details } from "./index.styles";

interface Props {
  name: string;
  image: string;
  url: string;
  calories: number;
  ingredients: number;
  serves: number;
}

const GridCard: React.FC<Props> = ({
  name,
  image,
  url,
  calories,
  ingredients,
  serves,
}) => {
  return (
    <Body onClick={() => window.open(url)}>
      <Image src={image} />
      <Details>
        <Title>{name}</Title>
        <Label>serves {serves}</Label>
        <Label>{calories} calories per serving</Label>
        <Label>number of ingredients: {ingredients}</Label>
      </Details>
    </Body>
  );
};

export default GridCard;
