import "./App.css";
import { Intro } from "../components/intro/Intro";
import { About } from "../components/about/About";
import { Gallery } from "../components/gallery/Gallery";
import { Videos } from "../components/videos/Videos";
import { Contact } from "../components/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Gallery />
      <Videos />
      <Contact />
    </div>
  );
};

export default App;
