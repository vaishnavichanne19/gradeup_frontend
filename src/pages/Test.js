import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Test = () => {
  // Test Data
  const [TestUser, setTestUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/gettest");
      setTestUser(response.data);
    };

    fetchData();
  }, []);

  // Practice Pdf Data
  const [PracticepdfUser, setPracticepdfUser] = useState([]);
  const [MainHeading, setMainHeading] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.gradeup01.in/api/getpracticepdf"
      );
      if (response.data.length > 0) {
        setMainHeading(response.data[0].heading);
        setPracticepdfUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);

  // Board data
  const [BoardUser, setBoardUser] = useState([]);
  const [ClassUser, setClassUser] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");

  useEffect(() => {
    const fetchBoardData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getboard");
      setBoardUser(response.data);
      if (response.data.length > 0) {
        setSelectedBoard(response.data[0]._id);
      }
    };

    fetchBoardData();
  }, []);

  // Class data
  useEffect(() => {
    const fetchClassData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getclass");
      setClassUser(response.data);
    };

    fetchClassData();
  }, []);

  // Entrance Exam data 
    const [EntranceExams, setEntranceExams] = useState([]);
  const [ExamMainHeading, setExamMainHeading] = useState("");
  const [ExamMainHeading1, setExamMainHeading1] = useState("");

    useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getexam");

      if (response.data.length > 0) {
        setExamMainHeading(response.data[0].heading);
        setExamMainHeading1(response.data[0].heading1);
        setEntranceExams(response.data.slice(1));
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container-fluid test-section">
      <div className="container">
        {TestUser.filter((user) => user._id === "6870fa24e8f8aaf83972fc23").map(
          (user) => {
            return (
              <div className="row test-section1">
                <h1 data-aos="fade-down" data-aos-duration="1500">
                   {user.heading} <span>{user.heading1} </span>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
              </div>
            );
          }
        )}

        {TestUser.filter((user) => user._id === "6870fa4ce8f8aaf83972fc2b").map(
          (user) => {
            return (
              <div className="row test-section2 spread">
                <h3 data-aos="fade-down" data-aos-duration="1500">{user.heading}</h3>
                <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
              </div>
            );
          }
        )}
      </div>
      <div className="test-section2-table">
        <div className="table-section">
          <div className="selector-container">
            <div className="heading-row">
              <div className="heading-title">Boards</div>
              <div className="heading-title1">Classes</div>
            </div>

            <div className="main-content">
              <div className="boards-section">
                {BoardUser.map((board) => (
                  <div
                    key={board._id}
                    className={`board-option ${
                      selectedBoard === board._id ? "active" : ""
                    }`}
                    onClick={() => setSelectedBoard(board._id)}
                  >
                    {board.boardname}
                  </div>
                ))}
              </div>

              <div className="classes-section">
                <h4>
                  {BoardUser.find((b) => b._id === selectedBoard)?.boardname}{" "}
                  Classes
                </h4>
                <div className="class-grid">
                  {ClassUser.filter(
                    (cls) => cls.boardref === selectedBoard
                  ).map((cls, index) => (
                    <Link to={`/class/${cls._id}`} state={{ classname: cls.classname }}>
                    <div className="class-box" key={index}>
                      {cls.classname}
                    </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {TestUser.filter((user) => user._id === "6870faad8ff3dcd3430ce89f").map(
          (user) => {
            return (
              <div className="row test-section3 spread">
                <div className="col-lg-6 col-md-6 col-sm-12 test-section3-para">
                  <h3>
                    <span>{user.heading1}</span> {user.heading}
                  </h3>
                  <ul dangerouslySetInnerHTML={{ __html: user.description }}>
                    {/* <li>Prioritize Time Management</li>
                    <li>Analyze Your Performance</li>
                    <li>Implement Active Learning Techniques</li>
                    <li>Maintain Mental nad Physical Well-being</li>
                    <li>Focus on Conceptual Understanding</li>
                    <li>Track Your Progess</li> */}
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 test-section3-img">
                  <div className="row test-section3-img-div1">
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-9 col-md-9 dummy-div"></div>
                  </div>
                  <div className="row test-section3-img-div2">
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-11 col-md-11" data-aos="zoom-in" data-aos-duration="1500">
                      <img
                        src={`https://api.gradeup01.in/images/${user.testimage}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}

        <div className="row test-section4 spread">
          <h2>
            <span>{ExamMainHeading1}</span> {ExamMainHeading}
          </h2>
          <div className="row">
            {EntranceExams.map((exam) => (
            <div className="col-lg-2 col-md-2 col-sm-5 col-5 test-section4-content">
              <Link to={`/entrance-exam/${exam._id}`} state={{ examname: exam.examname }}>
              <div className="test-section4-detail">
                <div className="test-section4-data">
                  <span>{exam.examname}</span>
                  <img  src="img/exam1.png"/>
                </div>
                </div>
              </Link>
            </div>
            ))}

            {/* <div className="col-lg-2 col-md-2 col-sm-5 col-5 test-section4-content">
              <Link to="/entrance-exam">
                <div className="test-section4-data">
                  <span>JEE</span>
                  <img src="img/doctor.png" />
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-5 col-5 test-section4-content">
              <Link to="/entrance-exam">
                <div className="test-section4-data">
                  <span>MHT-CET</span>
                  <img src="img/doctor.png" />
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-5 col-5 test-section4-content">
              <Link to="/entrance-exam">
                <div className="test-section4-data">
                  <span>NEET</span>
                  <img src="img/doctor.png" />
                </div>
              </Link>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-5 col-5 test-section4-content">
              <Link to="/entrance-exam">
                <div className="test-section4-data">
                  <span>JEE</span>
                  <img src="img/doctor.png" />
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="row test-section5 spread1">
        {TestUser.filter((user) => user._id === "687100b800ecbd63eb335d69").map(
          (user) => {
            return (
              <div className="test-section5-content">
                <div className="test-section5-content-div1"></div>
                <h4>
                  "{user.heading}{" "}
                  <span>{user.heading1}</span> "
                </h4>
                <div className="test-section5-content-div2"></div>
              </div>
            );
          }
        )}
      </div>

      <div className="container">
        <div className="row spread test-section6">
          <h2>{MainHeading}</h2>
          {PracticepdfUser.map((user) => {
            return (
              <div className="col-lg-6 col-md-6 col-sm-12 test-section6-pdfs">
                <div className="test-section6-pdfs-1">
                  <i className="fa-regular fa-file-pdf"></i>
                  <h4>
                    <a
                      href={`https://api.gradeup01.in/files/${user.practicepdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.practicepdf
                        ? user.practicepdf.replace(/^\d+_/, "")
                        : "Open PDF"}
                    </a>
                  </h4>
                </div>
              </div>
            );
          })}

          {/* <div className="col-lg-6 col-md-6 col-sm-12 test-section6-pdfs">
            <div className="test-section6-pdfs-1">
              <i className="fa-regular fa-file-pdf"></i>
              <h4>JEE Main 2019</h4>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 test-section6-pdfs">
            <div className="test-section6-pdfs-1">
              <i className="fa-regular fa-file-pdf"></i>
              <h4>JEE Advanced 2019</h4>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 test-section6-pdfs">
            <div className="test-section6-pdfs-1">
              <i className="fa-regular fa-file-pdf"></i>
              <h4>NEET Biology 2019</h4>
            </div>
          </div> */}
        </div>

        <div className="row faq-last-section-area">
          {TestUser.filter(
            (user) => user._id === "687100d200ecbd63eb335d6d"
          ).map((user) => {
            return (
              <div className="faq-last-section">
                <h1>
                  {user.heading} <span>{user.heading1}</span>
                </h1>
                <Link to="/contact">
                <button>Contact Us</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
