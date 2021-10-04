import styled from "styled-components";

export const Body = styled.div`
  border: 2px solid ${({ theme }) => theme.colours.bodyText};
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
`;

export const Details = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "stat stat";
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colours.bodyText};
  grid-area: title;
`;

export const Image = styled.img`
  width: 100%;
  border-bottom: 2px solid #00000f;
`;

export const Label = styled.label`
  grid-area: stat;
`;
