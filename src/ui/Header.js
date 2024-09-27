import { RxHamburgerMenu } from "react-icons/rx";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenu from "./Main/MobileMenu";
import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(!true);
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 50); // Change 50 to whatever scroll offset you want
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        class={`header-container ${isSticky ? "active" : ""}`}
      >
        <div class="header-flex">
          <div class="mobile-menu-btn" onClick={handleOpen}>
            <RxHamburgerMenu />
          </div>
          <div class="header-info-block">
            <img src="../../images/profile-pic.png" alt="my-image-tiny" />
            <h2 class="header-heading">Harsha Suresh</h2>
          </div>
          <div class="header-nav-flex">
            <nav class="header-nav-block">
              <ul>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About me
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#work-projects">
                    Work Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact-me">
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
            <DarkModeToggle />
          </div>
        </div>
      </header>
      <MobileMenu openMenu={open} handleMenuClose={handleClose} />
      <div
        class={`overlay ${open ? "active" : ""}`}
        onClick={handleClose}
      ></div>
    </>
  );
}

export default Header;
