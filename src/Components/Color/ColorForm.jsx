import ColorInput from "./ColorInput";
import { uid } from "uid";

export default function ColorForm({ onSubmit }) {
  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataWithId = { id: uid(), ...data };
    onSubmit(dataWithId);
  }

  return (
    <form onSubmit={handleForm}>
      <p>Role</p>
      <label htmlFor="role"></label>
      <input id="role" name="role" type="text" placeholder="some color"></input>

      <ColorInput />

      <p></p>
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
