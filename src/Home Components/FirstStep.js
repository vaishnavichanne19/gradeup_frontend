import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FirstStep = () => {
  const [FirstStepUser, setFirstStepUser] = useState([]);
  const [MainHeading, setMainHeading] = useState("");
   const [MainHeading1, setMainHeading1] = useState("");
  const [MainDescription, setMainDescription] = useState("");
  const [MainTitle, setMainTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8005/api/getfirststep"
      );
      if (response.data.length > 0) {
        setMainHeading(response.data[0].heading);
        setMainHeading1(response.data[0].heading1);
        setMainDescription(response.data[0].description);
        setMainTitle(response.data[0].title);
        setFirstStepUser(response.data.slice(1));
      }
    };

    fetchData();
  }, []);


  return (
    <div className='container-fluid firststep-section'>
      <div className='container spread'>
      <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-12 firststep-para'>
          <div className='firststep-area'>
            <h1>{MainHeading} <span>{MainHeading1}</span></h1>
            <p dangerouslySetInnerHTML={{__html: MainDescription }}></p>
        </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 first-right-area'>
          <div className='firststep-right-area'>

                <div className='overlapping-images'>
            {FirstStepUser.map((user) => {
              return(
                <span>
            <img src={`http://localhost:8005/images/${user.firststepimage}`}/>
            {/* <img src='img/banner4.jpg'/>
            <img src='img/banner4.jpg'/>
            <img src='img/banner4.jpg'/> */}
            </span>
          )
        })}
            </div>
            <p>{MainTitle}</p>
            <Link to="/test">
            <button>Explore Now</button>
            </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FirstStep
