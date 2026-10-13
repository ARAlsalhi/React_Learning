import logo from "./logo.svg";
import "./App.css";
import MyBotton from "./MyBotton.js";
import MyInput from "./MyInput.js";
import MyForm from "./MyForm.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyBotton />

        <MyInput />
        <div style={{ paddingTop: "20px" }}>
          <MyForm />
        </div>
      </header>
    </div>
  );
}

export default App;
