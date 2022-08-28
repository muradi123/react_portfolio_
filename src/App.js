import React from "react";
import "animate.css";
import WOW from "wowjs";
import Header from "./Components/Header";
import About from "./Components/About";
import Work from "./Components/Work";
import BackTop from "./Components/BackTop";
import Recent from "./Components/Recent";
import Gallery from "./Components/Gallery";
import Loader from "./Components/Loader";
import ProgressBar from "react-scroll-progress-bar";
import Slider from "./Components/Slider";
import Contact from "./Components/Contact";
import Footer from "../src/Components/Footer";
import Menu from "./Components/Menu";
const App = () => {
  const target = React.createRef();
  const wow = new WOW.WOW();
  wow.init();

  return (
    <div>
      <ProgressBar height="10px" bgcolor="#71EFA3" duration="5s" />
      <Loader />
      <Menu />
      <Header />
      <About />
      <BackTop />
      <Work />
      <Recent />
      <Gallery />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
