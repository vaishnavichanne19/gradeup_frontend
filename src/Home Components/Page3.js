import axios from "axios";
import React, { useEffect, useState } from "react";

const Page3 = () => {
  const [QuestionPaperUser, setQuestionPaperUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.gradeup01.in/api/getquestionpaper"
      );
      if (response.data.length > 0) {
        setQuestionPaperUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid page3-section">
      {QuestionPaperUser.map((user) => {
        return (
          <div className="row page3-row">
            <div className="col-lg-4 col-md-4 col-sm-12 page3-img" data-aos="zoom-in" data-aos-duration="1500">
              <img src={`https://api.gradeup01.in/images/${user.qustionpaperimage}`} />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 page3-para">
              <h1 dangerouslySetInnerHTML={{__html: user.description}}>
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page3;
