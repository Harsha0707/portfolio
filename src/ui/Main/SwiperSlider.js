import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function SwiperSlider({
  slides,
  slidesPerView = 3,
  spaceBetween = 30,
  breakpoints,
}) {
  const [isExpanded, setIsExpanded] = useState(
    Array(slides.length).fill(false)
  );

  const handleToggle = (index) => {
    setIsExpanded((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={true}
      loop={true}
      breakpoints={breakpoints}
      modules={[Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div class="projects-block block">
            <div class="project-image">
              <img src={slide.imageURL} alt={slide.name} />
            </div>
            <div class="project-content">
              <h4 class="sub-heading">{slide.name}</h4>
              {slide.description && (
                <>
                  <div class="project-description">
                    {isExpanded[index]
                      ? slide.description
                      : `${slide.description.substring(0, 100)}...`}
                  </div>
                  <div onClick={() => handleToggle(index)} class="read-btn">
                    <span>{isExpanded[index] ? "Read Less" : "Read More"}</span>
                  </div>
                </>
              )}
              {slide.tech && (
                <div class="project-tech">
                  {slide.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              )}

              <div class="project-link">
                {slide.liveURL && (
                  <a
                    href={slide.liveURL}
                    class="btn"
                    title="Live site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoIosGlobe />
                  </a>
                )}
                {slide.githubURL && (
                  <a
                    href={slide.githubURL}
                    class="btn"
                    title="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSlider;
