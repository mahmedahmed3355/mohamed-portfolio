import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="project-card"
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank">View Project</a>
    </motion.div>
  );
}

