import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

function HomeProuduct() {
  const slider = React.useRef(null);

  var settings = {
    centerMode: true,
    slidesToShow: 2.35,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.001,
        },
      },
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- our products --> */}
      <div className="our_products" id="ourproduct_section">
        <div className="container">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-white text-uppercase">
              our products
            </h5>
          </div>
        </div>
        <div className="our_product_slider">
          <Slider ref={slider} {...settings}>
            <ProductCard
              link="1"
              data=" <p>
                Our bridge banners are strategically located, with ideal visibility based on size, location and viewing
                distances.
              </p>   <p>
              Free of any obstruction, <strong>Viola.skylights</strong> place brands in front of a captive audience on
              an unmissable
              large format canvas.
            </p>"
              img="/images/project1.png"
              title="Viola.skylight"
              slag="The ideal platform for mid and long-term campaigns"
            />

            <ProductCard
              link="2"
              data=" <p>
                Large format digital screens installed on bridges in key premium and high traffic locations,
                <strong>D.Skylights</strong> allow for marketing creativity in bigger, <strong>bolder, smarter and
                  brighter</strong>
                ways.
              </p>
              <p>
                The opportunities are endless, with digital displays offering the opportunity to instantly change
                content, whether static, animated or motion.
              </p>
              <p>
                <strong>Digital bridge</strong> banners are available in key tactical locations that generate immediate
                impact. Brands
                are seen, campaigns are effective and messaging is remembered by the right people, in the right place
                and at the right time.
              </p>"
              img="/images/project2.png"
              title="d.Skylight"
              slag="A new vision for a brighter future"
            />

            <ProductCard
              link="3"
              data="      <p>
              Strategically located in highly visible areas, <strong>Viola Hoardings</strong> are exceptionally
              positioned to reach
              pedestrian and vehicular traffic.
            </p>
            <p>
              <strong>Viola Hoardings</strong> provide extended viewing opportunities key intersections, are available
              for flexible
              booking durations and can be geotargeted.
            </p>
            <p>
              Hoardings have notably high recall, with surveys revealing that as many
              as 75%+ of people asked, consciously look at and absorb information from billboards.
            </p>"
              img="/images/project3.png"
              title="Viola.Hoardings"
              slag="Awareness. Recall. Growth."
            />
            <ProductCard
              link="4"
              data="         <p>
              <strong>Viola.spotlight</strong> is the ideal advertising medium to reach an urban mobile audience. The
              strategic
              placement of <strong>Viola.spotlight</strong> makes it a clutter free and easily visible platform.
            </p>
            <p>
              Our lamppost signs are offered as circuits in prime locations grouped into four main categories, based
              on audience coverage and contextual targeting.
            </p>"
              img="/images/project4n.png"
              title="Viola.spotlight"
              slag="An effective medium to convey key messaging with high frequency and reach"
            />
            <ProductCard
              link="5"
              data="      <p>
                <strong>Viola.bussight</strong> cover a strategic network of buses, with the majority circulating around
                the clock,
                providing unlimited reach whilst hyper-targeting commuters, drivers, passengers and pedestrians.    

              </p>
              <p>
                <strong>Viola.bussight</strong> offers advertisers cost-effective campaigns, printed to hi-definition
                specs and are an
                ideal solution for brands targeting audiences geographically with eye-catching mobile large format
                displays. 
              </p>"
              img="/images/project5.png"
              title="Viola.bussight"
              slag="A full wrap transit media solution "
            />
          </Slider>
        </div>
        <div className="custom_arrow">
          <ul className="list-unstyled">
            <li className="prev" onClick={() => slider?.current?.slickPrev()}>
              <img src="/images/newarrow.svg" alt="" />
            </li>
            <li className="next" onClick={() => slider?.current?.slickNext()}>
              <img src="/images/newarrow-right.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeProuduct;

