import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Avatar from "../../assets/Avatar.svg";
import { NavHashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <div className="avatar-box">
            <img src={Avatar} alt="Avatar" />
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi 👋, I'm </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>
            <Typewriter
              options={{
                strings: "Mosiyw",
                autoStart: true,
                loop: false,
              }}
            />
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            I'm a sofrware engineering student with a focus on web development
            with JavaScript.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contato" className="button">
              CONTACT
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
