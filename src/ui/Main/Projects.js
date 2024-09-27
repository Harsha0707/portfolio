import SwiperSlider from "./SwiperSlider";
import HorizontalRule from "./HorizontalRule";

function Projects() {
  const slides = [
    {
      id: "1",
      name: "Vivid Eden",
      description:
        "The Vivid Eden project is about Hotel management admin dashboard. Where you can add bookings, check & update if guest is checked in or checked out, also can delete the bookings. Same for cabin where you can add, update and delete cabin. Also can add new user. In dashboard you can check the activities like total booking, sales, check ins, sales graph, stay duration chart and many more.",
      imageURL: "../../images/vivid-eden.png",
      tech: ["React.js", "Redux.js", "Supabase"],
      liveURL: "https://vivid-eden.netlify.app/",
      githubURL: "https://github.com/Harsha0707/React-Vivid-Eden",
    },
    {
      id: "2",
      name: "Adventure Tours",
      description:
        "Adventure Tour project is mainly about authentication and authorization and checkout, where user can book a tour, used Stripe for payment method which is in test mode so money will not be deducted. Once booked user can check bookings in MY BOOKINGS.",
      imageURL: "../../images/adventure-tour.png",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API"],
      liveURL: "https://adventure-tour.onrender.com/",
      githubURL: "https://github.com/Harsha0707/adventure-tour",
    },
    {
      id: "3",
      name: "Fast Pizza",
      description:
        "Fast Pizza co. project is about Pizza ordering app, where you can start ordering by entering your name you will get into menu page. Once you order the pizza in URL your order number will display like /order/HLK4W2, you search for your order status using order number HLK4W2.",
      imageURL: "../../images/fast-pizza.png",
      tech: ["React.js", "Redux.js", "tailwind.css"],
      liveURL: "https://fast-pizza-house.netlify.app/",
      githubURL: "https://github.com/Harsha0707/React-Fast-Pizza",
    },
    {
      id: "4",
      name: "Workout Timer",
      description:
        "Workout timer project is about where you can choose the type of work out, how many sets you gonna perform, how fast you can do per second and also you can add break time per set. Once all set timer is gonna set which gonna help you like you can choose which workout you can do in your free time.",
      imageURL: "../../images/workout-timer.png",
      tech: ["React.js"],
      liveURL: "",
      githubURL: "https://github.com/Harsha0707/React-Workout-Timer",
    },
    {
      id: "5",
      name: "The Atomic Blog",
      description:
        "The Atomic Blog project is about posting a simple blog by adding title and detail about your blog. You can also check and add archive post which is located below blog.",
      imageURL: "../../images/the-atomic-blog.png",
      tech: ["React.js"],
      liveURL: "",
      githubURL: "https://github.com/Harsha0707/React-Atomic-Blog",
    },
  ];

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <div id="projects" class="project-container container">
        <h2 class="primary-heading">My Projects</h2>
        <div class="projects-block">
          <div class="projects-slider">
            <SwiperSlider slides={slides} breakpoints={breakpoints} />
          </div>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
}

export default Projects;
