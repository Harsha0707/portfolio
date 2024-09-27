import HorizontalRule from "./HorizontalRule";

function Education() {
  return (
    <>
      <div id="education" class="education-container container">
        <h2 class="primary-heading">Education</h2>
        <div class="eduction-block block">
          <h4 class="education-heading">Electrical & Electronics Engineer</h4>
          <div class="education-college-period">
            <a href="https://vvce.ac.in/">
              Vidyavardhaka College of Engineering
            </a>
            (University in Mysore, Karnataka) -{" "}
            <span class="education-priod">(Aug 2013 - July 2017) </span> -
            <span class="education-result"> 61.01%</span>
          </div>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
}

export default Education;
