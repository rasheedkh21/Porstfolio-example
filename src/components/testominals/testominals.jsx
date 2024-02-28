import React from "react";
// import "./testimonials.css";
import AVTR1 from "../../assets/testominal teacher.jpg";// import Swiper core and required modules
import AVTR2 from "../../assets/avatar-image.png";// import Swiper core and required modules
import Pegination from "swiper"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Muhammad Bekzod",
    review:
"Abdurashid is a boy who never stops on the way his dreams. As his teacher I beleive he can handle every problem that he face."
  },
  // {
  //   avatar: AVTR2,
  //   name: "Ernest Achiever",
  //   review:
  //     "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  // },
  // {
  //   avatar: AVTR1,
  //   name: "Ernest Achiever",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  // },
  // {
  //   avatar: AVTR2,
  //   name: "Ernest Achiever",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  // }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        // modules={[Pegination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="avtar img" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
