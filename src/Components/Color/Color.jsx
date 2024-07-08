import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

export default function Color({ color, onDeleteColor }) {
  const [confirmation, setConfirmation] = useState(false);

  function handleDeleteClick() {
    setConfirmation(true);
  }

  function handleCancelClick() {
    setConfirmation(false);
  }

  return (
    <ColorCard
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <ColorCardHeadLine $variant>{color.hex}</ColorCardHeadLine>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {confirmation ? (
        <>
          <ColorCardHighlight>Really Delete?</ColorCardHighlight>
          <button onClick={handleCancelClick}>CANCEL</button>
          <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
        </>
      ) : (
        <button onClick={() => handleDeleteClick()}>DELETE</button>
      )}
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

const ColorCardHighlight = styled.p`
  display: inline;
  padding: 2px 6px;
  background: black;
  color: white;
`;
