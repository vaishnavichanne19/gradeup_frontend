import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LevelUpPage = () => {
    const [LevelUpUser, setLevelUpUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8005/api/getlevelup");
      setLevelUpUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <div className='container-fluid'>
      <div className='container spread'>
        {LevelUpUser.map((user) => {
          return (    
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12 levelup-img1' data-aos="zoom-in" data-aos-duration="1500">
            <img src={`http://localhost:8005/images/${user.levelupimage1}`}/>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 levelup-para'>
            <h1><span style={{color:"#ed0000"}}>{user.heading1}</span> {user.heading} <img src={`http://localhost:8005/images/${user.logo}`} /></h1>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 levelup-img2'   data-aos="zoom-in" data-aos-duration="1500">
            <img src={`http://localhost:8005/images/${user.levelupimage2}`} />
        </div>
      </div>
          )
        })}
      </div>
    </div>
  )
}

export default LevelUpPage
