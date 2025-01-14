import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';

import './assets/vendor/isotope-layout/isotope.pkgd.min.js';
import './assets/vendor/imagesloaded/imagesloaded.pkgd.min.js';
import './assets/vendor/glightbox/js/glightbox.min.js';
import './assets/vendor/waypoints/noframework.waypoints.js';
import './assets/vendor/purecounter/purecounter_vanilla.js';

const App = () => {

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
