import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>M</span>
        <span>osiyw</span>
      </a>
      <div>
        <p>
          This site was made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/amir-mousavi-510b25196/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/mosiyw" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/mosiyw_pv/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
