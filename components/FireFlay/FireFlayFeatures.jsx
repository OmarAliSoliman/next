import React, { useEffect, useState } from 'react'
import FireFlayFeaturedCart from './FireFlayFeaturedCart'
import axios from 'axios';
import { fireflyopions } from '../API';

function FireFlayFeatures() {
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  useEffect(() => {
    retreveData();
  }, [])

  const retreveData = () => {
    axios.get(`${fireflyopions}`).then((res) => {
      if (res.status == 200) {
        const middleIndex = Math.ceil(res.data.data.length / 2);

        const firstHalf = res.data.data.splice(0, middleIndex);
        const secondHalf = res.data.data.splice(-middleIndex);
        setFirstArray(firstHalf)
        setSecondArray(secondHalf)
      }
    })
  }

  return (
    <>

      <div className="fireflay_features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-5">
              <ul className="list-unstyled">

                {firstArray.map((item, index)=>(
                 
                  <FireFlayFeaturedCart item={item} key={index} />
                ))}

              </ul>
            </div>
            <div className="col-sm-12 col-md-12 text-center col-lg-2 orderlastmobile">
              <img src={`/images/firefly/features.png`} alt="" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <ul className="list-unstyled opsite_list">
              
              {secondArray.map((item, index)=>(
                 <FireFlayFeaturedCart item={item} key={index} />
               ))}

              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FireFlayFeatures