import "./styles.css";
import { Slider } from "./slider.js";

export default function App() {
  return (
    <div className="App">
      <Slider
        className="app"
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "10/8",
          margin: "auto"
        }}
      />
    </div>
  );
}
