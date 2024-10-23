import { useState } from "react";
import HorizontalRule from "./HorizontalRule";
import toast from "react-hot-toast";

function ContactMe() {
  const [result, setResult] = useState("");

  const formKey = process.env.REACT_APP_WEB3_KEY;

  console.log(formKey);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", formKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Submitted Successfully");
      event.target.reset();
    } else {
      setResult("");
      toast.error(data.message);
    }
  };

  return (
    <>
      <div id="contact-me" class="contact-me-container container">
        <div class="sub-heading">Contact</div>
        <h2 class="primary-heading">Contact With Me</h2>
        <div class="contact-me-grid">
          <div class="contact-me-left-block block">
            <div class="contact-me-image">
              <img src="../../images/contact.png" alt="contact-me" />
            </div>
            <div class="contact-me-via">
              <h4 class="contact-heading">Find Me</h4>
              <div class="contact-me-via-mobile">
                <span>Mobile:</span>{" "}
                <a href="tel:+917892443002">+91 7892443002</a>
              </div>
              <div class="contact-me-via-mail">
                <span>Email:</span>{" "}
                <a href="mailto:harsha020296@gmail.com">
                  harsha020296@gmail.com
                </a>
              </div>
            </div>
            <div class="contact-me-with-other">
              <div class="contact-me-with-linkedin btn">
                <a
                  href="https://www.linkedin.com/in/harsha-gowda-s0296/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <div class="contact-me-with-github btn">
                <a
                  href="https://github.com/Harsha0707"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    height="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    version="1.1"
                    width="24"
                    data-view-component="true"
                    class="octicon octicon-mark-github"
                  >
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="contact-me-right-block block">
            <form onSubmit={onSubmit}>
              <div class="contact-form-grid-half">
                <div class="contact-form-grid">
                  <label for="name">
                    Your Name <span>*</span>
                  </label>
                  <input type="text" name="name" required />
                </div>
                <div class="contact-form-grid">
                  <label for="phone-number">Phone Number</label>
                  <input type="number" name="phone-number" />
                </div>
              </div>
              <div class="contact-form-grid">
                <label for="email">
                  Email <span>*</span>
                </label>
                <input type="email" name="email" required />
              </div>
              <div class="contact-form-grid">
                <label for="subject ">
                  Subject <span>*</span>
                </label>
                <input type="text" name="subject" required />
              </div>
              <div class="contact-form-grid">
                <label for="message ">
                  Your Message <span>*</span>
                </label>
                <textarea name="message" required></textarea>
              </div>

              <button type="submit" class="form-btn">
                SEND MESSAGE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
            {result && <div class="contact-form-message">{result}</div>}
          </div>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
}

export default ContactMe;
