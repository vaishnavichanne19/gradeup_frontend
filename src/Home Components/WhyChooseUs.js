import axios from "axios";
import React, { useEffect, useState } from "react";

const WhyChooseUs = () => { 
    const [ChooseUsUser, setChooseUsUser] = useState([]);
    const [mainheading, setmainheading] = useState("");
    const [mainheading1, setmainheading1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getchooseus");
      if (response.data.length > 0) {
        setmainheading(response.data[0].heading);
        setmainheading1(response.data[0].heading1);
        setChooseUsUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid chooseus-section">
    <div className="container chooseus-area">
      <h1 data-aos="fade-up" data-aos-duration="1500">
       {mainheading}  <span>{mainheading1}</span>?
      </h1>
      <div className="row chooseus-para">
        {ChooseUsUser.map((user) => {
          return (
        <div className="col-lg-4 col-md-4 col-sm-6  chooseus-point">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>{" "}
         {user.point}
        </div>
           )
        })}
         {/* <div className="col-lg-4 col-md-4 col-sm-6  chooseus-point">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>{" "}
          Easy Access
        </div>
         <div className="col-lg-4 col-md-4 col-sm-6  chooseus-point">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>{" "}
          Extensive Collection
        </div>
         <div className="col-lg-4 col-md-4 col-sm-6  chooseus-point">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>{" "}
          User Friedly Interface
        </div>
         <div className="col-lg-4 col-md-4 col-sm-6  chooseus-point">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>{" "}
          Flexible Formate
        </div>
         <div className="col-lg-4 col-md-4 col-sm-6  chooseus-point">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>{" "}
          Positive Learning
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
