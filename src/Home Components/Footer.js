import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [FooterUser, setFooterUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.gradeup01.in/api/getFooter");
      setFooterUser(response.data);
    };

    fetchData();
  }, []);

    const [ContactUser, setContactUser] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(
          "https://api.gradeup01.in/api/getcontact"
        );
          setContactUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className='container-fluid footer-section'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 footer-first-section' data-aos="fade-up" data-aos-duration="1500">
            <img src='../img/white-logo.svg'/>
            {FooterUser.map((user) => {
          return (
            <p>{user.description}</p>
          )})}
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 footer-links' data-aos="fade-up" data-aos-duration="1700">
            <ul>
              <Link to="/">
                <li>Home</li>
                </Link>
                 <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/service">
                <li>Services</li>
                </Link>
                 <Link to="/test">
                <li>Test</li>
                </Link>
                <Link to="/blog">
                <li>Blog</li></Link>
                 <Link to="/contact">
                <li>Contact Us</li></Link>
            </ul>
        </div>
        <div className='col-lg-2 col-md-3 col-sm-6 col-6 footer-links' data-aos="fade-up" data-aos-duration="1800">
               <ul>
                <li>Support</li>
                <li>FAQs</li>
                <li>Terms and Policy</li>
            </ul>
        </div>
        <div className='col-lg-2 col-md-6 col-sm-12 footer-icon' data-aos="fade-up" data-aos-duration="1900">
               <ul>
                {ContactUser.filter((user) => user._id === "6870b51b76108b6d7a170f1f").map ((user) => {
                  return (

                    <li><i className={user.icon}></i> {user.heading}</li>
                  )
                })}
                 {ContactUser.filter((user) => user._id === "6870b1cd76108b6d7a170f03").map ((user) => {
                  return (
                <li><i className={user.icon}></i> {user.heading}</li>
                   )
                })}
            </ul>
        </div>
        <div className='col-lg-2 col-md-6 col-sm-12 footer-follow-links' data-aos="fade-up" data-aos-duration="2000">
            <p>Follow us on:</p>
            <div>
              <span>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
              </span>
            </div>
            <small>Copyright @ 2005 All rights reserved.</small>
        </div>
      </div>
      <div className='container-fluid footer-bottom-section'>
        <h1 className="footer-title">GradeUP</h1>
      </div>
    </div>
  )
}

export default Footer
