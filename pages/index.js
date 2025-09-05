import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

export default function Home() {
  return (
    <>
      <Navbar />
      <Parallax bgImage="/images/bg1.jpg" strength={300}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-section"
        >
          <h1>Hi, I'm Mohamed El Shrbeny</h1>
          <p>Computer Vision & LLM Developer</p>
        </motion.section>
      </Parallax>
      <Footer />
    </>
  );
}

