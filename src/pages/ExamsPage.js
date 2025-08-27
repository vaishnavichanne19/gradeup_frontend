import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ExamsPage = () => {
  const location = useLocation();
  const examname = location.state?.examname;
  const { entranceexamId } = useParams();

  const [ExamMainHeading, setExamMainHeading] = useState("");
  const [ExamMainHeading1, setExamMainHeading1] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);

  useEffect(() => {
    const fetchHeadings = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getexam");
      if (response.data.length > 0) {
        setExamMainHeading(response.data[0].heading);
        setExamMainHeading1(response.data[0].heading1);
      }
    };
    fetchHeadings();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjectRes = await axios.get(
        `https://api.gradeup01.in/api/getexamsubject/${entranceexamId}`
      );
      setSubjects(subjectRes.data);
      if (subjectRes.data.length > 0) {
        setSelectedSubjectId(subjectRes.data[0]._id);
      }
    };
    if (entranceexamId) fetchSubjects();
  }, [entranceexamId]);

  useEffect(() => {
    const fetchPDFs = async () => {
      const pdfRes = await axios.get("https://api.gradeup01.in/api/getexampdf");
      setPdfs(pdfRes.data);
    };
    fetchPDFs();
  }, []);

  const filteredPdfs = pdfs.filter(
    (pdf) => pdf.examsubjectref === selectedSubjectId
  );

  return (
    <div className="container test-section">
          {subjects.length === 0 ? (
      <h2 style={{ textAlign: "center", marginTop: "100px", color: "#888" }}>
       Subjects will be available here soon. Keep learning and exploring!
      </h2>
    ) : (
      <div className="row exam-page">
        <h2>
          <span>{ExamMainHeading1}</span> {ExamMainHeading}
        </h2>

        <div className="row exam-section">
          <h3>{examname}</h3>
          <div className="col-lg-6 col-md-6 col-sm-12 exam-content">
            <small>
              NEET Exam Paper: National Eligibility cum Entrance Exam (NEET) is
              a medical entrance exam for students willing to pursue MBBS or BDS
              courses. Find all NEET Previous Year Papers here.
            </small>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 exam-area exam-img">
            <img src="../img/banner1.jpg" alt="Exam Banner" />
          </div>
        </div>

        {/* Subject Cards */}
        <div className="row">
          {subjects.map((sub) => (
            <div
              key={sub._id}
              className={`col-lg-3 col-md-3 col-sm-12 exam-area exam-section-1 ${
                selectedSubjectId === sub._id ? "selected-subject" : ""
              }`}
              onClick={() => setSelectedSubjectId(sub._id)}
              style={{ cursor: "pointer" }}
            >
              <img src="../img/banner1.jpg" alt={sub.subjectname} />
              <div className="exam-sub">
                <h5>{sub.subjectname}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* PDFs Section */}
        <div className="row spread mt-4">
          <h2 style={{ textAlign: "center" }}>
            <span>
              {subjects.find((sub) => sub._id === selectedSubjectId)?.subjectname || "Select a Subject"}
            </span>{" "}
            Question Papers
          </h2>

          {filteredPdfs.length > 0 ? (
            filteredPdfs.map((user) => (
              <div
                key={user._id}
                className="col-lg-6 col-md-6 col-sm-12 test-section6-pdfs exam-pdfs"
              >
                <div className="test-section6-pdfs-1">
                  <i className="fa-regular fa-file-pdf"></i>
                  <h4>
                    <a
                      href={`https://api.gradeup01.in/files/${user.pdfname}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {user.pdfname
                        ? user.pdfname.replace(/^\d+_/, "")
                        : "Open PDF"}
                    </a>
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No PDFs available for this subject.
            </p>
          )}
        </div>
      </div>
    )}
    </div>
  );
};

export default ExamsPage;
