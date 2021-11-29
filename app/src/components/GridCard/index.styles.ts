import styled from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colours.card};
  border: 2px solid ${({ theme }) => theme.colours.cardBorder};
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  transition: all 0.2s;

  :hover {
    box-shadow: ${({ theme }) => theme.colours.cardHoverShadow};
    background-color: ${({ theme }) => theme.colours.cardHoverColour};
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "stat"
    "stat"
    "url";
  padding: 0px 5px 5px 5px ;
  height: 100%;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colours.bodyText};
  grid-area: title;
  margin: 5px 0px 10px 0px;
  border-bottom: 2px solid ${({ theme }) => theme.colours.bodyText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Image = styled.img`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colours.bodyText};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colours.bodyText};

  :hover {
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div`
  grid-area: url;
  display: flex;
  margin: auto 0px 0px 0px;
`;

export const Link = styled.a`
  :link {
    color: ${({ theme }) => theme.colours.bodyText};
  }
  :visited {
    color: ${({ theme }) => theme.colours.bodyText};
  }
`;
