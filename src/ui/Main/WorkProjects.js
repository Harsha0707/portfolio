import SwiperSlider from "./SwiperSlider";
import HorizontalRule from "./HorizontalRule";

function WorkProjects() {
  const slides = [
    {
      id: "1",
      name: "Luna Lux Beauty",
      imageURL: "../../images/luna-lux-beauty.png",
      liveURL: "https://lunaluxbeauty.hu/",
    },
    {
      id: "2",
      name: "Legoe Heritage",
      imageURL: "../../images/legoe-heritage.png",
      liveURL: "https://legoeheritage.com/",
    },
    {
      id: "3",
      name: "In2Green",
      imageURL: "../../images/in2green.png",
      liveURL: "https://www.in2green.com/",
    },
    {
      id: "4",
      name: "White Horse Coffee",
      imageURL: "../../images/white-horse-coffee.png",
      liveURL: "https://whitehorsecoffee.com.au/",
    },
    {
      id: "5",
      name: "ZYPHR",
      imageURL: "../../images/zyphr.png",
      liveURL: "https://www.zyphr.com/",
    },
    {
      id: "6",
      name: "Dr Martens Repairs",
      imageURL: "../../images/dr-martens-repairs.png",
      liveURL: "https://drmartensrepairs.com/",
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
      <div id="work-projects" class="work-project-container container">
        <h2 class="primary-heading">Work Projects</h2>
        <div class="work-projects-block">
          <div class="work-projects-slider">
            <SwiperSlider slides={slides} breakpoints={breakpoints} />
          </div>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
}

export default WorkProjects;
