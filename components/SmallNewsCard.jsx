import Link from 'next/link';
import React from 'react'
import { bublic_url } from './API';

function SmallNewsCard({ item }) {
  // const { link, img, title, slag, data, innerimg } = props;
  return (
    <>
      <div className="slider_item">
        <div className="new_newsMedia_card">
          <div className="card_img">
            <div className="img_parent">
              <img src={`${bublic_url}${item.attributes?.card_image?.data?.attributes?.url}`} alt="" />
            </div>
          </div>
          <div className="card_body">
            <div className="card_date"><span className="text-w-100">Nov, 09, 2022 </span></div>
            <div className="card_title">
              <h5 className="text-w-500">{item.attributes.Title}</h5>
            </div>
            <div className="card_text">
              <p className='render_html' dangerouslySetInnerHTML={{ __html: item.attributes.Description }} />

            </div>
            <div className="read_more">
              <Link href={{ pathname: `/newsdetails/${item.id}`, query: { title: item.attributes.Title } }} className="text-f-2 text-w-500">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallNewsCard
