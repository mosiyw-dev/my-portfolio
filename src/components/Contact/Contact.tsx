import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contato">
      <header>
        <h2>Keep in touch with me</h2>
        <p>
          If you see potential in me or would like to have a chat, don't
          hesitate to send me a message. I'm always available to new
          opportunities{" "}
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:mosiyw20@gmail.com">mosiyw20@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+989116067106">(98) 911-606-7106</a>
        </div>
      </div>
    </Container>
  );
}
