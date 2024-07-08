import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";
import { useState } from "react";
import { GlobalStyle } from "../styles";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleSubmit(dataWithId) {
    setColors((prevColors) => [dataWithId, ...prevColors]);
  }

  function handleDeleteColor(idToRemove) {
    setColors(
      colors.filter((color) => {
        return color.id !== idToRemove;
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleSubmit} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
    </>
  );
}

export default App;
