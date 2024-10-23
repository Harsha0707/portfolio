import HorizontalRule from "./HorizontalRule";

function Experience() {
  const calculateExperience = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (now.getDate() < start.getDate()) {
      months--;
    }

    const totalYears = years + months / 12;

    return totalYears.toFixed(1);
  };

  const startDate = "2022-02-01";
  const totalExperience = calculateExperience(startDate);

  return (
    <>
      <div id="experience" class="experience-container container">
        <div class="experience-sub-heading">
          {totalExperience} Years of Experience
        </div>
        <h2 class="primary-heading">My Experience</h2>
        <div class="experience-block block">
          <div class="experience-sub-block">
            <div class="experience-heading-block">
              <h4 class="experience-heading">Frontend Developer</h4>
              <div class="experience-sub-heading-block">
                at <a href="https://www.akunatech.com/">Akuna technologies </a>
                (March 2022 - present)
              </div>
            </div>
            <div class="experience-text-block">
              <ul class="experience-text-sub-block">
                <li class="experience-text">
                  Built and optimized high-performance React.js applications
                  with responsive UI designs, leading to improved user
                  experience and Optimized page load time.
                </li>
                <li class="experience-text">
                  Developed reusable components and custom hooks using React.js,
                  reducing code redundancy and speeding up new feature
                  development.
                </li>
                <li class="experience-text">
                  Integrated RESTful APIs to manage dynamic content and enable
                  seamless data flow between front-end and back-end services.
                </li>
                <li class="experience-text">
                  Implemented advanced state management using Redux and Context
                  API, ensuring efficient handling of complex app states and
                  boosting application performance.
                </li>
                <li class="experience-text">
                  Collaborated in Agile teams to deliver scalable React
                  applications, consistently meeting project deadlines and
                  maintaining high-quality code standards.
                </li>
                <li class="experience-text">
                  Customized Shopify themes and plugins using Liquid,
                  JavaScript, and React.js to align with client branding and
                  functionality needs, leading to a more personalized user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
}

export default Experience;
