import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import Donut from "./charts/Donut";
import Line from "./charts/Line";
import Bar from "./charts/Bar";
import Sparkline from "./charts/Sparkline";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="section">
          <Donut />
        </div>
        <div className="section">
          <Bar />
        </div>
        <div className="section">
          <Line />
        </div>
        <div className="section">
          <Sparkline />
        </div>
      </div>
    </div>
  );
}

export default App;
