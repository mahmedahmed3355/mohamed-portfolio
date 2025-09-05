import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:engmohamedelshrbeny@gmail.com">engmohamedelshrbeny@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/mohamed12ahmed">github.com/mohamed12ahmed</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/mohamed-ahmed-700019a5">linkedin.com/in/mohamed-ahmed-700019a5</a></p>
      </section>
      <Footer />
    </>
  );
}

