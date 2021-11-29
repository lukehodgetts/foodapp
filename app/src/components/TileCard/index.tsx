import { useState } from "react";
import { Body, Image, Title } from "./index.styles";

interface Props {
  image: string;
  name: string;
  url: string;
}

const TileCard: React.FC<Props> = ({ image, name, url }) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Body>
      <Image
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        src={image}
        onClick={() => {
          window.open(url);
        }}
      />
      <Title hover={hoverState}>{name}</Title>
    </Body>
  );
};

export default TileCard;
