import { Container, Detail } from "./index.styles";

interface Props {
  name: string;
  url: string;
}

const ListItem: React.FC<Props> = ({ name, url }) => {
  return (
    <Container>
      <Detail>{name}</Detail>
    </Container>
  );
};

export default ListItem;
