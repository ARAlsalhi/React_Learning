import "./FirstComponent.css";
export default function FirstComponent() {
  const x = 5;
  const person = {
    name: "Light-Flame",
    age: 28,
  };
  const elmStyle = {
    backgroundColor: "blue",
    fontSize: "50px",
    boxShadow: "0px 10px 20px black",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
  };

  const h2Style = {
    backgroundColor: "green",
    fontSize: "30px",
  };

  return (
    <div>
      <h1 className={"DD"} style={elmStyle}>
        {x + 5}Dhoom
      </h1>
      <h2 className={"DD"} style={h2Style}>
        {x - 3}Do your best
      </h2>
      <h2>
        {sayHi()} {person.name} is {person.age} years old.
      </h2>

      <h3 className={"AB"}>Test Test Test</h3>

      <h1 className={person.name === "Light-Flame" ? "AB" : "DD"}>
        check Name
      </h1>

      <button onClick={handleClick}>Press Here to move</button>
    </div>
  );
}

function sayHi() {
  return "Hello GG ";
}

function handleClick() {
  alert("Button clicked!");
}
