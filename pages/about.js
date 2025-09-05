import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h2>About Me</h2>
        <p>🔭 Skilled Machine Learning Engineer specializing in Python, PyTorch, and Computer Vision. Experienced with LLMs, RAG, Agents, SFT, RLHF.</p>
        <p>🌐 Tools: Docker, Kubernetes, LangChain, LangGraph, GCP, PostgresSQL.</p>
      </section>
      <Footer />
    </>
  );
}

