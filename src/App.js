import Navbar from "./Layout/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
