import ButtonComponent from "./Component/ButtonComponent";
import "./App.css";
import ImageComponent from "./Component/ImageComponent";
import img from "./Assets/undraw-mobile-ux.svg";

function App() {
  return (
    // this is JSX
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <ImageComponent src={img} alt="mobile image" />
        <h4>Get things done with TODo</h4>
        <p className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet.
        </p>
        <ButtonComponent label="Get Started" />
      </header>
    </div>
  );
}

export default App;
