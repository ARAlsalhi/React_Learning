import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent";
import Art from "./Art";
import List from "./List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>GG This is my website :X</code> and save to reload it is
          fast :D.
        </p>
        <h1>My name Light-Flame the best ENG.dev</h1>
        <FirstComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Art fname="Fahad" lname="Alsalhi" age="50">
          <h1>Test</h1> {/* it call children any thing here*/}
        </Art>

        <Art fname="Faris" lname="Aldosrai" age="40"></Art>

        <Art fname="Omer" lname="Alsalhi" age="30 ">
          <div
            style={{
              background: "lightgreen",
              color: "black",
              borderRadius: "25px",
            }}
          >
            <h1>GGHHGGHH</h1>
          </div>
        </Art>

        <Art fname="Omer" lname="Alsalhi" age="30 ">
          <div style={{ background: "lightBlue", borderRadius: "25px" }}>
            <h1> This is the third part</h1>
            <p
              style={{
                padding: "10px",
                margin: "10px",
                background: "orange",
                borderRadius: "30px",
              }}
            >
              this paragraph well have deff color
            </p>
          </div>
        </Art>

        <hr></hr>

        <List />
      </header>
    </div>
  );
}

export default App;
