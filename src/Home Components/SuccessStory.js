import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const SuccessStory = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [SuccessStoryUser, setSuccessStoryUser] = useState([]);
  const [MainHeading, setMainHeading] = useState("");
  const [MainHeading1, setMainHeading1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8005/api/getsuccessstory"
      );
      if (response.data.length > 0) {
        setMainHeading(response.data[0].heading);
        setMainHeading1(response.data[0].heading1);
        setSuccessStoryUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid success-story-section">
      <div className="container success-story-area spread">
        <h1 data-aos="fade-up" data-aos-duration="1500">
          <span dangerouslySetInnerHTML={{ __html: MainHeading }} />
          <span>{MainHeading1}</span>
        </h1>

        <div className="success-story-slider">
          <Slider {...settings}>
            {SuccessStoryUser.map((user, index) => (
              <div key={index} className="success-story-slider-img">
                <img
                  src={`http://localhost:8005/images/${user.successstoryimage}`}
                  alt="slider image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
