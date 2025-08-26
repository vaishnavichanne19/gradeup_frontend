import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
    const [BlogDetailUser, setBlogDetailUser] = useState({
    heading: "",
    date: "",
    description: "",
    blogimage: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const BlogDetailData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8005/api/getblogbyid/${id}`
        );
        setBlogDetailUser(response.data.data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    BlogDetailData();
  }, [id]);

  // blog detail 
      const [BlogUser, setBlogUser] = useState([]);

useEffect(() => {
  const fetchData = async () => {
      const response = await axios.get("http://localhost:8005/api/getblog");
      setBlogUser(response.data.slice(1));
      };

fetchData();
}, []);

  return (
    <div  className="container-fluid blog-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="blog-details section">
                <div className="article">
                  <h2>
                    {BlogDetailUser.heading}
                  </h2>
                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fa-solid fa-calendar-days"></i>
                        <time>{BlogDetailUser.date}</time>
                      </li>
                    </ul>
                  </div>
                  <div className="post-img">
                    <img src={`http://localhost:8005/images/${BlogDetailUser.blogimage}`} alt="" className="img-fluid" />
                  </div>
                  {/* End meta top */}
                  <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: BlogDetailUser.description }}>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="widgets-container">
                <div className="recent-posts-widget widget-item">
                  <h4 className="widget-title">Recent Post</h4>
                  {BlogUser.map((user) => {
                    return (

                      <div className="post-item">
                    <h6>
                      <Link to={`/blog-detail/${user._id}`}>
                       {user.heading}
                      </Link>
                    </h6>
                    <time>{user.date}</time>
                  </div>
                  )
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BlogDetail;
