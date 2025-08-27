import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  const servicesData = [
    {
      title: "Mock Test Series",
      description:
        "Practice with full-length mock tests designed to match the actual exam pattern.Improve your speed, accuracy, and confidence with instant results and detailed performance analysis to track your progress.",
      image:
        "img/banner1.jpg",
    },
    {
      title: "Doubt Clearing Sessions",
      description:
        "Get all your questions answered by subject experts in live doubt-solving sessions. Whether it’s a tricky problem or a concept you find difficult, our experts will guide you with clear explanations and tips to master the topic.",
      image:
        "img/banner2.jpg",
    },
  ];

const Service = () => {
  const [ServiceUser, setServiceUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getservice");
      setServiceUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container service-section">
      {ServiceUser.filter(
        (user) => user._id === "686cf3f6a33d6c12e690eae9"
      ).map((user) => {
        return (
          <div className="row service-section1">
            <div className="col-lg-6 col-md-6 col-sm-12 service-section1-img" data-aos="zoom-in" data-aos-duration="1500">
              <img src={`https://api.gradeup01.in/images/${user.serviceimage}`} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-section1-para">
              <div className="service-section1-heading">
                <h1 data-aos="fade-down" data-aos-duration="1500">
                  {user.heading} <span>{user.heading1}</span>
                </h1>
              </div>
              <div className="service-section1-paragraph">
                <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="row service-section2 spread1">
        {ServiceUser.filter(
          (user) => user._id === "686fdf1a0aa13c1f287ea39a"
        ).map((user) => {
          return <h2>{user.heading}</h2>;
        })}

        {ServiceUser.filter(
          (user) => user._id === "686fdfecb3147042106e9fbc"
        ).map((user) => {
          return (
            <div className="col-lg-6 col-md-6 col-sm-12 service-section2-para1">
              <h3>{user.heading}</h3>
              <div className="service-section2-para1-img" data-aos="zoom-in" data-aos-duration="1500">
                <img
                  src={`https://api.gradeup01.in/images/${user.serviceimage}`}
                />
              </div>
            </div>
          );
        })}

        {ServiceUser.filter(
          (user) => user._id === "686fe002b3147042106e9fc0"
        ).map((user) => {
          return (
            <div className="col-lg-6 col-md-6 col-sm-12 service-section2-para2">
              <div className="service-section2-para2-img" data-aos="zoom-in" data-aos-duration="1500">
                <img
                  src={`https://api.gradeup01.in/images/${user.serviceimage}`}
                />
              </div>
              <h3>{user.heading}</h3>
            </div>
          );
        })}
      </div>

      <div className="row">
 {servicesData.map((service, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12">
            <div className="service-card">
              <div className="service-card-image" data-aos="zoom-in" data-aos-duration="2000">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="row service-section3 spread">
        {ServiceUser.filter(
          (user) => user._id === "686fe19abe6341bd4df50e3b"
        ).map((user) => {
          const words = user.heading.split(" ");
          const colorIndex = [1, 2];

          return (
            <div className="service-section3-para">
              <h1>
                {words.map((word, i) => (
                  <strong
                    key={i}
                    style={{
                      color: colorIndex.includes(i) ? "#ed0000" : "inherit",
                      marginRight: "10px",
                    }}
                  >
                    {word}
                  </strong>
                ))}
              </h1>
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
