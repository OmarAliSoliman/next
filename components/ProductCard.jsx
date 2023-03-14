import Link from 'next/link';
import React from 'react'

function ProductCard(props) {
  const { link, img, title, data, slag } = props;
  return (
    <>
      <div className="slider_item">
        <Link href={{ pathname: `/blogdetails/${link}`, query: { data: data, img: img, title: title, slag:slag } }} className="product_card">
          <div className="card_img">
            <div className="img_parent">
              <img src={img} alt="" />
            </div>
            <div className="card_title">
              <h5 className="text-f-3 text-w-500">{title}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard