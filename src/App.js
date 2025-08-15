import Navbar from "./Layout/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Project/Projects";
import Footer from "./Layout/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div className="bio-footer">
        <p>
          From responsive frontends to powerful backends and APIs, I handle the
          full development cycle and work well with teams to deliver clean,
          effective code.
        </p>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact" className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
