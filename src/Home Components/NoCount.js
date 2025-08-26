import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const NoCount = () => {
 const [NoCountUser, setNoCountUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8005/api/getcount");
      setNoCountUser(response.data);
    };

    fetchData();
  }, []);


  const [startCount, setStartCount] = useState(false);
const ref = useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); 
        } else {
          setStartCount(false); 
        }
      },
      { threshold: 0.7 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);



  return (
    <div className='container'>
      <div className="row about-section4" ref={ref}>
        {NoCountUser.map((user) => {
          return (

     
        <div className="col-lg-4 col-md-4 col-sm-12 about-section4-number">
          <h1>
            {startCount && <CountUp start={0} end={user.countnumber} duration={3} />}K+
          </h1>
          <p>{user.title}</p>
        </div>
             )
        })}
        {/* <div className="col-lg-4 col-md-4 col-sm-12 about-section4-number">
          <h1>
            {inView && <CountUp end={2} duration={2} />}K+
          </h1>
          <p>Reviews</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 about-section4-number">
          <h1>
            {inView && <CountUp end={12} duration={2.5} />}K+
          </h1>
          <p>Questions</p>
        </div> */}
      </div>
    </div>
  );
};

export default NoCount;
