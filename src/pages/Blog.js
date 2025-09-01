import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blog = () => {
    const [BlogUser, setBlogUser] = useState([]);
  const [MainHeading, setMainHeading] = useState("");
  const [MainHeading1, setMainHeading1] = useState("");
  const [MainDescription, setMainDescription] = useState("");
  const [MainImage, setMainImage] = useState("");


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.gradeup01.in/api/getblog");

      if (response.data.length > 0) {
        setMainHeading(response.data[0].heading);
        setMainHeading1(response.data[0].heading1);
        setMainDescription(response.data[0].description);
        setMainImage(response.data[0].blogimage);

        // ✅ Only show published blogs except the first one
        const publishedBlogs = response.data.filter((blog, index) => blog.publish && index !== 0);
        setBlogUser(publishedBlogs);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  fetchData();
}, []);

const getLimitedHtml = (htmlString, wordLimit) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  const text = div.textContent || div.innerText || "";
  const trimmed = text.split(" ").slice(0, wordLimit).join(" ");
  return trimmed;
};

  return (
    <>
       <Helmet>
           <title>GradeUp – Blog</title>
        </Helmet>
   
    <div className="container-fluid blog-section">
      <h1>
       {MainHeading} <span>{MainHeading1}</span>
      </h1>
      <div>
        <div className="row blog-section1">
          <div className="col-lg-3 col-md-3 col-sm-12 blog-area">
            <div className="blog-section1-span1"></div>
            <div className="blog-section1-span2"></div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 blog-section1-para">
            <p  dangerouslySetInnerHTML={{ __html: MainDescription }}>
              {/* Dive into our expert articles to enhance your knowledge, stay
              updated with industry developments, and achieve your personal and
              professional goals. */}
            </p>
          </div>
        </div>

        <div className="row blog-section2 spread">
          <div className="col-lg-9 col-md-9 col-sm-12 blog-section2-img">
            <img src={`https://api.gradeup01.in/images/${MainImage}`} />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-3 blog-area blog-section2-span">
            <div className="blog-section2-span1"></div>
            <div className="blog-section2-span2"></div>
          </div>
        </div>
      </div>
      <div className="container spread">
        <div className="row g-4">
          {BlogUser.map((user, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-12 blog-section3">
            <div className="blog-section3-img">
              <img src={`https://api.gradeup01.in/images/${user.blogimage}`} />
            </div>
            <div className="blog-section3-content">
          
            <small>{user.date}</small>
            <h4>{user.heading}</h4>
            <p dangerouslySetInnerHTML={{ __html: getLimitedHtml(user.description, 20) }}></p>
            <Link to={`/blog-detail/${user._id}`}>
              <button>Read More</button>
              </Link>
            </div>
          </div>
          ))}
        </div>
        
      </div>
    </div>
     </>
  );
};

export default Blog;
