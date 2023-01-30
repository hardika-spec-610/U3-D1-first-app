import ButtonComponent from "./Component/ButtonComponent";
import "./App.css";
import ImageComponent from "./Component/ImageComponent";
import img from "./Assets/undraw-mobile-ux.svg";

function App() {
  return (
    // this is JSX
    <div className="App">
      <header className="App-header">
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
