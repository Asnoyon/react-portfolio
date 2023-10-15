import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectFour,
  projectFive,
  projectSix,
  projectThree,
  projectSeven,
  projectNine,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 text-justify">
        <ProjectsCard
          title="E-commerce"
          des="This is E-commerce app. Created HTML,CSS and REACT js. Here I learned lot of things like context API, Tailwind css and React router dom "
          src={projectSix}
          githubLink="https://github.com/Asnoyon/e-commerce"
          websiteLink="https://e-commerce-tau-murex-42.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce"
          des="A dynamic web application built using React.js for efficient employee management.With an intuitive user interface, it ensures seamless navigation and enhances productivity in managing your workforce."
          src={projectNine}
          githubLink="https://employee-management-five-psi.vercel.app/"
          websiteLink="https://github.com/Asnoyon/employee-management"
        />
        <ProjectsCard
          title="Quote Generator"
          des="This is my Quote Genrator app.Created react jsx and css.Here I learned how fetch data with api"
          src={projectThree}
          githubLink="https://github.com/Asnoyon/react-quote-gen"
          websiteLink="https://react-quote-gen.vercel.app/"
        />
        <ProjectsCard
          title="ToDo"
          des="This is my first project with react js.In this app you can add, delete, edit and clear all items. Here i learned hooks, passing props"
          src={projectFive}
          githubLink="https://github.com/Asnoyon/react-todo"
          websiteLink="https://react-todo-delta-lemon.vercel.app/"
        />
        <ProjectsCard
          title="Noyon"
          des="This is my first portfolio with bootstrap.Created using HTML,CSS and BOOTSTRAP.Here I learned Bootstrap card"
          src={projectFour}
          githubLink="https://github.com/Asnoyon/Envelope"
          websiteLink="https://envelope-one.vercel.app/"
        />
        <ProjectsCard
          title="Islam Jahid & Co."
          des="The HTML and Css website should faithfully reproduce the design from Figma, ensuring that every element, from layout to typography, matches the original design with pixel-perfect precision."
          src={projectTwo}
          githubLink="https://github.com/Asnoyon/figma_html"
          websiteLink="https://figma-html-six.vercel.app/"
        />
        <ProjectsCard
          title="Wooden"
          des="The website's front-end design features a sleek and intuitive navigation system. The menu bar at the top of the page provides easy access to different furniture categories, ensuring a seamless browsing experience for visitors"
          src={projectSeven}
          githubLink="https://github.com/Asnoyon/practice/tree/master/wooden"
          websiteLink="https://wooden-navy.vercel.app/"
        />
        <ProjectsCard
          title="Sign Up page"
          des="Complete responsive registration page with beautiful design.Created using HTML,CSS. Here I learned how to use linear gradient"
          src={projectOne}
          githubLink="https://github.com/Asnoyon/signup"
          websiteLink="https://signup-omega-nine.vercel.app/"
        />
      </div>
    </section>
  );
};
export default Projects;
