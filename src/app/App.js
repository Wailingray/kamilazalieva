import "./App.css";
import { Intro } from "../components/intro/Intro";
import { About } from "../components/about/About";
import { Gallery } from "../components/gallery/Gallery";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Gallery />
    </div>
  );
};

export default App;
