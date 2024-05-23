import ScrollAnimation from "react-animate-on-scroll";
import ScrollDownSVG from "../../assets/ScrollDown.svg";
import React, { useEffect } from "react";
import "./ScrollDown.css";

export default function ScrollDown() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDownElement = document.querySelector(".scroll-down");
      if (window.pageYOffset > 0 && scrollDownElement) {
        scrollDownElement.classList.add("hide");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scroll-down">
      <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
        <img src={ScrollDownSVG} alt="Scroll down" />
      </ScrollAnimation>
    </div>
  );
}
