import About from "./Main/About";
import ContactMe from "./Main/ContactMe";
import Experience from "./Main/Experience";
import WorkProjects from "./Main/WorkProjects";
import Projects from "./Main/Projects";
import Skills from "./Main/Skills";
import Education from "./Main/Education";

function Main() {
  return (
    <>
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <WorkProjects />
        <Education />
        <ContactMe />
      </main>
    </>
  );
}

export default Main;
