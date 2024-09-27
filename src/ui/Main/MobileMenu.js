import { IoClose } from "react-icons/io5";
import HorizontalRule from "./HorizontalRule";

function MobileMenu({ openMenu, handleMenuClose }) {
  return (
    <div class={`mobile-menu-container ${openMenu ? "active" : ""}`}>
      <div class="mobile-menu-inner">
        <div class="mobile-menu-close-btn" onClick={handleMenuClose}>
          <IoClose />
        </div>
        <div class="mobile-menu-header">
          <img src="../../images/profile-pic.png" alt="my-tiny-image" />
          <div class="mobile-menu-header-name">HARSHA SURESH</div>
        </div>
        <HorizontalRule />
        <div class="mobile-menu-block">
          <nav class="mobile-menu-nav">
            <ul class="mobile-menu-list-item">
              <li class="mobile-menu-list">
                <a href="#about" onClick={handleMenuClose}>
                  About me
                </a>
              </li>
              <li class="mobile-menu-list">
                <a href="#skills" onClick={handleMenuClose}>
                  Skills
                </a>
              </li>
              <li class="mobile-menu-list">
                <a href="#experience" onClick={handleMenuClose}>
                  Experience
                </a>
              </li>
              <li class="mobile-menu-list">
                <a href="#projects" onClick={handleMenuClose}>
                  Projects
                </a>
              </li>
              <li class="mobile-menu-list">
                <a href="#work-projects" onClick={handleMenuClose}>
                  Work Projects
                </a>
              </li>
              <li class="mobile-menu-list">
                <a href="#education" onClick={handleMenuClose}>
                  Education
                </a>
              </li>
              <li class="mobile-menu-list">
                <a href="#contact-me" onClick={handleMenuClose}>
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
