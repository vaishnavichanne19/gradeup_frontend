import axios from "axios";
import React, { useEffect, useState } from "react";

const Page2 = () => {
  const [QuestionPaperUser, setQuestionPaperUser] = useState([]);
  const [mainHeading, setMainHeading] = useState(" ");
  const [mainHeading1, setMainHeading1] = useState(" ");
  const [mainDescription, setMainDescription] = useState(" ");
  const [Image, setImage] = useState(" ");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8005/api/getquestionpaper"
      );
      if (response.data.length > 0) {
        setMainHeading(response.data[0].heading);
        setMainHeading1(response.data[0].heading1);
        setMainDescription(response.data[0].description);
        setImage(response.data[0].qustionpaperimage);
        setQuestionPaperUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid page2-section">
      <div className="container spread">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 page2-paragraph">
            <div className="page2-area">
              <h1>
                "<span>{mainHeading1}</span>
                <br />
                {mainHeading}"
              </h1>
              <p dangerouslySetInnerHTML={{ __html: mainDescription }}></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 page2-img" data-aos="zoom-in" data-aos-duration="1500">
            <img src={`http://localhost:8005/images/${Image}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
