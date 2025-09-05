import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "CV Classification",
    description: "Image classification using PyTorch.",
    image: "/images/project1.png",
    link: "#"
  },
  {
    title: "Object Detection",
    description: "Detect multiple objects in images.",
    image: "/images/project2.png",
    link: "#"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

