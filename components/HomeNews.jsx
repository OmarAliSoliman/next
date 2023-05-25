import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { news_api } from './API';
import NewsCard from './NewsCard'
import SmallNewsCard from './SmallNewsCard'


const HomeNews = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    retreveData();
  }, [])


  const retreveData = async () => {
    await axios.get(`${news_api}?populate=*`).then((res) => {
      if (res.status == 200) {
        setNews(res.data.data)
      }
    })

  }

  const slider = React.useRef(null);

  var settings = {
    slidesToShow: 4,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          
        }
      }
    ]
  }

  return (
    <>
      {/* <!-- news & media --> */}

      <div className="news_media" id="newsmedia_section">
        <div className="container">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase text-center text-white"> News & Insights</h5>
          </div>
          <div className="blogs_wrapper">
            <div className="blogs_wrapper_slider">

              <Slider ref={slider} {...settings}>

                {news.map((item) => (
                  <div className="slider_item" key={item.id}>
                    <SmallNewsCard item={item} />
                  </div>
                ))}


              </Slider>


            </div>
            <div className="custom_arrow">
              <ul className="list-unstyled">
                <li className="prev" onClick={() => slider?.current?.slickPrev()}><img src="/images/newarrow.svg" alt="" /></li>
                <li className="next" onClick={() => slider?.current?.slickNext()}><img src="/images/newarrow-right.svg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="news_media" id="newsmedia_section">
        <div className="container-fluid">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase text-center text-white"> News & Insights</h5>
          </div>
          <div className="blogs_wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <NewsCard link="./inner-news-1.html" img="/images/blogs_image/blog1n.jpg" title="OOH Guide 2022: Radical evolution – by Viola’s Ammar Sharaf" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="small_blogs">
                  <ul className="list-unstyled">
                    <SmallNewsCard link="./inner-news-7.html" img="/images/blogs_image/blog7.webp" title="V-I-O-L-A —Viola —Viola Outdoor Joins WOO" />
                    <SmallNewsCard link="./inner-news-2.html" img="/images/blogs_image/blog2.jpg" title="Beyond transformational – by Viola Communication’s Ammar Sharaf" />
                    <SmallNewsCard link="./inner-news-3.html" img="/images/blogs_image/blog3n.jpg" title="Viola Outdoor appoints Henrietta Shakespeare as executive growth director" />
                    <SmallNewsCard link="./inner-news-4.html" img="/images/blogs_image/blog4.jpg" title="OOH Industry Snapshot: Viola’s Ammar Sharaf" />
                    <SmallNewsCard link="./inner-news-5.html" img="/images/blogs_image/blog5.jpg" title="Viola Communications to launch new digital out-of-home media In Abu Dhabi" />
                    <SmallNewsCard link="./inner-news-6.html" img="/images/blogs_image/blog6n.jpg" title="Signs of the future, by Viola Outdoor’s Ammar Sharaf" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default HomeNews