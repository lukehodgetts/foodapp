import {
  Body,
  Title,
  Image,
  Label,
  Details,
  Link,
  LinkContainer,
} from "./index.styles";

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
        <Label>{calories} calories per serving</Label>
        <Label>number of ingredients: {ingredients}</Label>
        <LinkContainer>
          <Link href={url} target="_blank">
            view recipe
          </Link>
        </LinkContainer>
      </Details>
    </Body>
  );
};

export default Card;
