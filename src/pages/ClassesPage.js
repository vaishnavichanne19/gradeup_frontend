import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ClassesPage = () => {
  // Test Data
  const [TestUser, setTestUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/gettest");
      setTestUser(response.data);
    };

    fetchData();
  }, []);

  // subject data
  const [SubjectUser, setSubjectUser] = useState([]);
  const { classId } = useParams();
  const location = useLocation();
  const classname = location.state?.classname;
const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.gradeup01.in/api/getsubject/${classId}`
      );
      setSubjectUser(response.data);
       if (response.data.length > 0) {
        setSelectedSubjectId(response.data[0]._id);
      }
    };

    if (classId) {
      fetchData();
    }
  }, [classId]);
  
  // Pdf data
  const [PdfUser, setPdfUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getpdf");
      setPdfUser(response.data);
    };

    fetchData();
  }, []);

  const filteredPdfs = PdfUser.filter(
    (pdf) => pdf.subjectref === selectedSubjectId
  );

  // return (
  //   <div className="container test-section">
  //     {TestUser.filter((user) => user._id === "6870fa24e8f8aaf83972fc23").map(
  //       (user) => {
  //         return (
  //           <div className="row test-section1">
  //             <h1>
  //               <span>{user.heading1} </span> {user.heading}
  //             </h1>
  //             <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
  //           </div>
  //         );
  //       }
  //     )}

  //     <div className="row spread subject-section">
  //       <h2>{classname} Subjects</h2>
  //       <div className="row subject-row">
  //         {SubjectUser.map((subject) => {
  //           return (
  //             <div className="col-lg-2 col-md-2 col-sm-6 col-sm-6 subject-name"
  //               key={subject._id}
  //               style={{
  //               cursor: "pointer",
  //               border:
  //                 selectedSubjectId === subject._id
  //                   ? "2px solid #ed0000"
  //                   : "1px solid #ccc",
  //             }}
  //             onClick={() => setSelectedSubjectId(subject._id)}
  //             >
  //               <div className="subject-content">
  //                 <h5>{subject.subjectname}</h5>
  //                 <img src="../img/books.png" />
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>

  //     <div className="row spread test-section6">
  //       <h2>   {
  //           SubjectUser.find((sub) => sub._id === selectedSubjectId)
  //             ?.subjectname
  //         }{" "} Questions Papers</h2>

  //          {filteredPdfs.length > 0 ? (
  //       filteredPdfs.map((user) => (
  //           <div className="col-lg-6 col-md-6 col-am-12 test-section6-pdfs classpage-pdf">
  //             <div className="test-section6-pdfs-1 classpage-pdf-1">
  //               <i className="fa-regular fa-file-pdf"></i>
  //               <h4>
  //                 {" "}
  //                 <a
  //                   href={`https://api.gradeup01.in/files/${user.pdfname}`}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   {user.pdfname
  //                     ? user.pdfname.replace(/^\d+_/, "")
  //                     : "Open PDF"}
  //                 </a>
  //               </h4>
  //             </div>
  //           </div>
  //       ))
  //       ) : (
  //          <p>No PDFs available for this subject.</p>
  //       )}
  //     </div>

  //     <div className="row faq-last-section-area classpage-last-page">
  //       {TestUser.filter((user) => user._id === "687100d200ecbd63eb335d6d").map(
  //         (user) => {
  //           return (
  //             <div className="faq-last-section">
  //               <h1>
  //                 {user.heading} <span>{user.heading1}</span>
  //               </h1>
  //               <Link to="/contact">
  //               <button>Contact Us</button>
  //               </Link>
  //             </div>
  //           );
  //         }
  //       )}
  //     </div>
  //   </div>
  // );

return (
  <div className="container test-section">
    {SubjectUser.length === 0 ? (
      <h2 style={{ textAlign: "center", marginTop: "100px", color: "#888" }}>
       Subjects will be available here soon. Keep learning and exploring!
      </h2>
    ) : (
      <>
        {/* Page content starts here */}
        {TestUser.filter((user) => user._id === "6870fa24e8f8aaf83972fc23").map(
          (user) => {
            return (
              <div className="row test-section1">
                <h1>
                  <span>{user.heading1} </span> {user.heading}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: user.description,
                  }}
                ></p>
              </div>
            );
          }
        )}

        <div className="row spread subject-section">
          <h2>{classname} Subjects</h2>
          <div className="row subject-row">
            {SubjectUser.map((subject) => {
              return (
                <div
                  className="col-lg-2 col-md-2 col-sm-6 subject-name"
                  key={subject._id}
                  style={{
                    cursor: "pointer",
                    border:
                      selectedSubjectId === subject._id
                        ? "2px solid #ed0000"
                        : "1px solid #ccc",
                  }}
                  onClick={() => setSelectedSubjectId(subject._id)}
                >
                  <div className="subject-content">
                    <h5>{subject.subjectname}</h5>
                    <img src="../img/books.png" alt="subject" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row spread test-section6">
          <h2>
            {
              SubjectUser.find((sub) => sub._id === selectedSubjectId)
                ?.subjectname
            }{" "}
            Questions Papers
          </h2>

          {filteredPdfs.length > 0 ? (
            filteredPdfs.map((user) => (
              <div className="col-lg-6 col-md-6 col-am-12 test-section6-pdfs classpage-pdf">
                    <a
                      href={`https://api.gradeup01.in/files/${user.pdfname}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                <div className="test-section6-pdfs-1 classpage-pdf-1">
                  <i className="fa-regular fa-file-pdf"></i>
                  <h4>
                      {user.pdfname
                        ? user.pdfname.replace(/^\d+_/, "")
                        : "Open PDF"}
                  </h4>
                </div>
                    </a>
              </div>
            ))
          ) : (
            <p>No PDFs available for this subject.</p>
          )}
        </div>

        <div className="row faq-last-section-area classpage-last-page">
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
      </>
    )}
  </div>
);

};

export default ClassesPage;
