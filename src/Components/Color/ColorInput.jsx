import { useState } from "react";

export default function ColorInput() {
  const [hexColor, setHexColor] = useState("#FFFFFF");
  const [contrastTextColor, setContrastTextColor] = useState("#000000");
  function handleHexColor(event) {
    setHexColor(event.target.value);
  }

  function handleContrastTextColor(event) {
    setContrastTextColor(event.target.value);
  }
  return (
    <>
      <p>Hex</p>
      <label htmlFor="hex"></label>
      <input
        id="hex"
        name="hex"
        type="text"
        placeholder="#FFFFFF"
        value={hexColor}
      ></input>
      <input type="color" onChange={handleHexColor}></input>

      <p>Contrast Text</p>
      <label htmlFor="contrastText"></label>
      <input
        id="contrastText"
        name="contrastText"
        type="text"
        placeholder="#000000"
        value={contrastTextColor}
      ></input>
      <input type="color" onChange={handleContrastTextColor}></input>
    </>
  );
}
