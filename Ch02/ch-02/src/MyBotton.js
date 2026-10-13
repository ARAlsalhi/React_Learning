import { useState } from "react";

export default function MyBotton() {
  /*هنا بننشأ الهوك خق اليوز ستايت عشان يغر القيم عن الظغط */

  const [name, setName] = useState("Fahad");

  function buttonClicked() {
    if (name === "Fahad") {
      setName("Saleh");
    } else {
      setName("Fahad");
    }
  }

  return (
    <div>
      <h1>Test</h1>
      <button onClick={buttonClicked}>Press Here</button>
      <h3>{name}</h3>
    </div>
  );
}
