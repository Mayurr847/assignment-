import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "CRUD using fake API and material UI", image: "Project 1.png" },
    { title: "Project 2", description: "List in React", image: "Project 2.png" },
    { title: "Project 3", description: "CRUD opration uing json server,axios,router", image: "Project 3.png" },
    { title: "Project 4", description: "Move an element on mouse move using useState OR useEffect Hook", image: "Project 4.jpg " },
    { title: "Project 5", description: "Create model for Login and Registration show in below image", image: "Project 5.png" },
    { title: "Project 6", description: "Validation using JavaScript", image: "Project 6.png" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image" />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
