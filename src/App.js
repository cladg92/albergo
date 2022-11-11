import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Gallery />
      <Contact />
      <Map />
    </div>
  );
}

export default App;
