import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import About from "../About/About";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import ScrollDown from "../ScrollDown/ScrollDown";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <ScrollDown />
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </Container>
  );
}
