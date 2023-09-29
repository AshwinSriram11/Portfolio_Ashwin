import { motion } from "framer-motion";
import "./index.css";
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <TechStack />
    </>
  );
}

export default App;
