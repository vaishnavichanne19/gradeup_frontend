import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [FAQUser, setFAQUser] = useState([]);
  const [mainheading, setmainheading] = useState("");
  const [heading, setheading] = useState("");
  const [subheading, setsubheading] = useState("");
  const [heading1, setheading1] = useState("");
  const [subheading1, setsubheading1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8005/api/getfaq");
      if (response.data.length > 0) {
        setmainheading(response.data[0].mainheading);
        setheading(response.data[0].heading1);
        setsubheading(response.data[0].heading2);
        setheading1(response.data[0].subheading1);
        setsubheading1(response.data[0].subheading2);
        setFAQUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid faq-section">
      <div className="container  spread">
        <div className="row faq-top">
          <h2 dangerouslySetInnerHTML={{ __html: mainheading }}>
            {/* At <img src="img/clogo.svg" />, We believe in marking your learning
            journey as smooth and supportive as possible. Whether you need
            assistance with our test series, or just want to share your
            feedback, we're eager to hearfrom you. We're here for you. */}
          </h2>
        </div>
        <div className="row faq-area">
          <div className="col-lg-6 col-md-6 col-sm-12 faq-left-section">
            <h1 data-aos="fade-up" data-aos-duration="1500">
              {heading} <br />
              <span>{heading1}</span>
            </h1>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 faq-accordion">
            <div className="accordion" id="faqAccordion">
              {FAQUser.map((faq) => (
                <div className="accordion-item" key={faq._id}>
                  <h2 className="accordion-header" id={`heading${faq._id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq._id}`}
                    >
                      {faq.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq._id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${faq._id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p>{faq.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row faq-last-section-area">
          <div className="faq-last-section">
            <h1>
              {subheading} <span>{subheading1}</span>
            </h1>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
