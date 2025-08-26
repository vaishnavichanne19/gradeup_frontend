import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page = () => {
  const [StartPracticingUser, setStartPracticingUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8005/api/getstartpracticing"
      );
      setStartPracticingUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid page-section">
      {StartPracticingUser.map((user, index) => {
        const words = user.para1.split(" ");
        const colorIndex = [3, 7, 12];
        return (
          <div className="container spread" key={index}>
            <div className="page-para">
              <h2 data-aos="fade-down" data-aos-duration="1500">
                "
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
                "
              </h2>
            </div>

            <div className="row page-para2">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 para2-img1" data-aos="zoom-in" data-aos-duration="1500">
                    <img
                      src={`http://localhost:8005/images/${user.startimage1}`}
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="para2-img2" data-aos="zoom-in" data-aos-duration="1500">
                      <img
                        src={`http://localhost:8005/images/${user.startimage2}`}
                      />
                    </div>
                    <div className="para2-img3" data-aos="zoom-in" data-aos-duration="1500">
                      <img
                        src={`http://localhost:8005/images/${user.startimage3}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 page-paragraph2">
                <h2>
                  <span>{user.heading1} </span> <br />
                  {user.heading}
                </h2>
                <div className="page-btn">
                  <Link to="/contact">
                    <button>Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
