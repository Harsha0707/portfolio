function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div id="footer" class="footer-container container">
        <div class="footer-block">
          <img src="../../images/profile-pic.png" alt="my-image-tiny" />
          <h3>Harsha Suresh</h3>
        </div>
        <div class="footer-copy-right-reserved">
          © {year}. All rights reserved by{" "}
          <a
            href="https://www.linkedin.com/in/harsha-gowda-s0296/"
            target="_blank"
            rel="noreferrer"
          >
            HARSHA SURESH
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

export default Footer;
