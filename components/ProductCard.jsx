import Link from 'next/link';
import React from 'react'
import { bublic_url } from './API';

function ProductCard({ item }) {
  
  return (
    <>
      <div className="slider_item">
        <Link href={{ pathname: `/product/${item.attributes.Slug}` }} className="product_card">
          <div className="card_img">
            <div className="img_parent">
              <img src={`${bublic_url}${item.attributes?.card_image?.data?.attributes?.url}`} alt="" />
            </div>
            <div className="card_title">
              <h5 className="text-f-3 text-w-500">{item.attributes?.Title}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard