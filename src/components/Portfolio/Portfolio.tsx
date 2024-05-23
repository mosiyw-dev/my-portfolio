import { useEffect, useState } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

interface Project {
  html_url: string;
  homepage: string;
  name: string;
  description: string;
  fork: boolean;
  // add other properties as needed
}

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mosiyw/repos") // replace {username} with your GitHub username
      .then((response) => response.json())
      .then((data) => {
        const nonForkedAndDescribedProjects = data.filter(
          (project: Project) => !project.fork && project.description
        );
        setProjects(nonForkedAndDescribedProjects);
      });
  }, []);

  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.html_url} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href={project.homepage} target="_blank" rel="noreferrer">
                    <img src={externalLinkIcon} alt="Visitar site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {/* You can add technologies here */}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
