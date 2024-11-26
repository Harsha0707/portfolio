import HorizontalRule from "./HorizontalRule";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail, CiMobile3 } from "react-icons/ci";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function handlePopup() {
    setIsOpen(true);
  }

  function handlePopupClose() {
    setIsOpen(!true);
  }

  return (
    <>
      <div id="about" class="about-container container">
        <div class="about-grid">
          <div class="about-content-block block">
            <div class="about-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="about-content-heading-block">
              <h2 class="about-content-heading">
                Hi, I'm <span>Harsha Suresh</span>
              </h2>
            </div>
            <div class="about-content-sub-heading">
              As a Web Developer, I specialize in building scalable,
              high-performance applications with the MERN stack and Shopify
              Themes, transforming complex challenges into sleek, user-friendly
              solutions. My passion for innovative tech and clean code drives
              seamless, impactful digital experiences. Curently working at{" "}
              <a
                href="https://www.akunatech.com/"
                target="_blank"
                rel="noreferrer"
              >
                Akuna technologies
              </a>{" "}
              as a Frontend developer.
            </div>
            <div class="about-content-text-block">
              <div class="about-content-text">
                Download my curriculum vitae:
              </div>
              <a
                href="../../resume/Harsha-Suresh-Resume.pdf"
                class="btn about-btn"
                download
              >
                Download CV
              </a>
              <span
                onClick={handlePopup}
                class="btn about-btn about-contact-btn"
              >
                Contact me
              </span>
            </div>
          </div>
          <div class="about-image-block block">
            <img src="../../images/profile-pic.png" alt="my-image" />
          </div>
        </div>
      </div>
      <div class={`about-contact-container block ${isOpen ? "active" : ""}`}>
        <div class="about-container-relative">
          <div class="about-contact-close-btn-block">
            <div class="about-contact-close-btn" onClick={handlePopupClose}>
              <IoClose />
            </div>
          </div>
          <div class="sub-heading">Contact Me</div>
          <div class="about-contact-flex">
            <div class="about-contact-icon btn">
              <a href="https://wa.me/917892443002">
                <FaWhatsapp />
              </a>
            </div>
            <div class="about-contact-icon btn">
              <a href="tel:+917892443002">
                <CiMobile3 />
              </a>
            </div>
            <div class="about-contact-icon btn">
              <a href="mailto:harsha020296@gmail.com">
                <CiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class={`overlay ${isOpen ? "active" : ""}`}
        onClick={handlePopupClose}
      ></div>
      <HorizontalRule />
    </>
  );
}

export default About;
