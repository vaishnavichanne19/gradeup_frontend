import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
      const [BannerUser, setBannerUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8005/api/getbanner");
      setBannerUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <div className='container-fluid banner-section'>
        <div className='container'>
            {BannerUser.map((user) => {
                return (
        <div className='row' key={user.id}>
            <div className='col-lg-5 col-md-5 col-sm-12 banner-para'>
                <h1 data-aos="fade-up" data-aos-duration="2000">{user.heading} <span>{user.heading1}</span></h1>
                <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
                <Link to="/test">
                <button>Get Started</button>
                </Link>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'></div>
                    <div className='col-lg-8 col-md-8 col-sm-12 banner-img'>
                        <img src={`http://localhost:8005/images/${user.bannerimage1}`}/>
                    </div>
                     <div className='col-lg-8 col-md-8 col-sm-12 banner-img1'>
                        <img src={`http://localhost:8005/images/${user.bannerimage2}`}/>
                     </div>
                      <div className='col-lg-4 col-md-4 col-sm-12'></div>
                </div>
            </div>
        </div>
            )})}
        </div>
    </div>
  )
}

export default Banner
