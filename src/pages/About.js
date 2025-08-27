import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [AboutUser, setAboutUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getabout");
      setAboutUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container about-section">
      {AboutUser.filter((user) => user._id === "686be2e15a967ccfe5ae7fad").map(
        (user) => {
          return (
            <div>
              <div className="about-section-heading">
                <h1>
                  <span>{user.heading1}</span>: {user.heading}
                </h1>
              </div>
              <div className="about-section1">
                <p dangerouslySetInnerHTML={{ __html: user.description }}>
                  {/* A good test paper should have a clear purpose, appropriate difficulty,
          and cover the relevant subject matter. It should also be
          well-structured, with clear instructions and a logical sequence of
          questions. The questions should be unbiased, and the paper should be
          of adequate length, neither too short nor too lengthy.{" "} */}
                </p>
                <div className="row about-section2">
                  <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-duration="1500">
                    <div className="about-img">
                      <img
                        src={`https://api.gradeup01.in/images/${user.aboutimage1}`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-duration="1800">
                    <div className="about-img">
                      <img
                        src={`https://api.gradeup01.in/images/${user.aboutimage2}`}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="about-img">
                      <img
                        src={`https://api.gradeup01.in/images/${user.aboutimage3}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}

      {AboutUser.filter((user) => user._id === "686be38d520ebd3a86941019").map(
        (user) => {
          return (
            <div className="row about-section3 spread1">
              <div className="col-lg-8 col-md-8 col-sm-12 about-section3-area">
                <div className="about-section3-para">
                  <h3 data-aos="fade-down" data-aos-duration="1500">
                    {user.heading} <span>{user.heading1}</span>
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: user.description }}>
                    {/* A good test paper should have a clear purpose, appropriate
              difficulty, and cover the relevant subject matter. It should also
              be well-structured, with clear instructions and a logical sequence
              of questions. */}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="about-section3-img" data-aos="zoom-in" data-aos-duration="1500">
                  <img
                    src={`https://api.gradeup01.in/images/${user.aboutimage1}`}
                  />
                </div>
              </div>
            </div>
          );
        }
      )}

      {AboutUser.filter((user) => user._id === "686be3af520ebd3a8694101d").map(
        (user) => {
          return (
            <div className="row about-mission spread1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="about-mission-img" data-aos="zoom-in" data-aos-duration="1500">
                  <img
                    src={`https://api.gradeup01.in/images/${user.aboutimage1}`}
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 about-mission-area">
                <div className="about-section3-para about-section3-para-mobileview">
                  <h3 data-aos="fade-down" data-aos-duration="1500">
                    {user.heading}
                    <span> {user.heading1}</span>
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: user.description }}>
                    {/* A good test paper should have a clear purpose, appropriate
              difficulty, and cover the relevant subject matter. It should also
              be well-structured, with clear instructions and a logical sequence
              of questions. */}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}

      {AboutUser.filter((user) => user._id === "686be3e3f905b459c156b5d3").map(
        (user) => {
          return (
            <div className="row about-section5 spread1">
              <div className="about-section5-para">
                <p dangerouslySetInnerHTML={{ __html: user.description }}>
                  {/* A good test paper should have a clear purpose, appropriate
            difficulty, and cover the relevant subject matter. It should also be
            well-structured, with clear instructions and a logical sequence of
            questions. The questions should be unbiased, and the paper should be
            of adequate length, neither too short nor too lengthy.{" "} */}
                </p>
                <Link to="/contact">
                <button>Contact Us</button>
                </Link>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default About;
