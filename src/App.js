import Navbar from "./Layout/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
