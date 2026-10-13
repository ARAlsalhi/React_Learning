import { useState } from "react";

export default function MyInput() {
  const [myInputValue, setInputValue] = useState("");

  function handelUserInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <lable>Your Name: </lable>
      <input value={myInputValue} onChange={handelUserInput} />
      <hr />
    </div>
  );
}
