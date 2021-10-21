import styled from "styled-components";

export const Inputbox = styled.input`
  background-color: ${({ theme }) => theme.colours.input};
  color: ${({ theme }) => theme.colours.inputText};
  width: 90%;
  text-indent: 10px;
  border: 0px none;
  outline: none;
  font-size: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colours.inputBorder};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
