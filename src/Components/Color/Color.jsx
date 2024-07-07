import styled from "styled-components";
import { css } from "styled-components";

export default function Color({ color }) {
  return (
    <ColorCard
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <ColorCardHeadLine $variant>{color.hex}</ColorCardHeadLine>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
    </ColorCard>
  );
}

const ColorCard = styled.div`
  margin: 0px 10px;
  padding: 5px;
`;

const ColorCardHeadLine = styled.h3`
  ${({ $variant }) =>
    $variant &&
    css`
      display: inline;
      padding: 2px 6px;
      background: black;
      color: white;
    `}
`;
