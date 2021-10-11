import {
  Container,
  Signature,
  PageNumberContainer,
  PageNumber,
} from "./index.styles";

interface Props {
  pageNumber: number;
  hasData: boolean;
}

const Footer: React.FC<Props> = ({ pageNumber, hasData }) => {
  return (
    <Container>
      {hasData && (
        <PageNumberContainer>
          <PageNumber>page {pageNumber}</PageNumber>
        </PageNumberContainer>
      )}
      <Signature>made by buk</Signature>
    </Container>
  );
};

export default Footer;
