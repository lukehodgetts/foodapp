import styled from "styled-components";

interface HoverProps {
  hover: boolean;
}

export const Body = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  margin: 0px 10px;
  overflow: hidden;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 130%;
  transform: translateX(-15%);
`;

export const Title = styled.h2<HoverProps>`
  position: absolute;
  margin: 0px;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-overflow: clip;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  opacity: ${({ hover }) => (hover ? "100%" : "0%")};

  transition: all 0.1s;
  :hover {
    opacity: 100%;
    cursor: pointer;
  }
`;
