import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { product_api } from "./API";
import ProductCard from "./ProductCard";

function HomeProuduct() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    retreveData();
  }, [])


  const retreveData = async () => {
    await axios.get(`${product_api}?populate=*`).then((res) => {
      if (res.status == 200) {
        setProducts(res.data.data)
      }
    })

  }


  const slider = React.useRef(null);

  var settings = {
    centerMode: true,
    slidesToShow: 2.35,
    arrows: false,
    infinite: true,
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
            {products.map((item)=>(
              <ProductCard item={item} key={item.id} />
            ))}
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

