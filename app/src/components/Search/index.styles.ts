import styled from "styled-components";

export const Textbox = styled.input`
  background-color: ${({ theme }) => theme.colours.searchInput};
  color: ${({ theme }) => theme.colours.searchText};
  height: 50%;
  width: 100%;
  text-indent: 10px;
  border: 0px none;
  border-radius: 5px;
  outline: none;
  font-size: 24px;
`;
