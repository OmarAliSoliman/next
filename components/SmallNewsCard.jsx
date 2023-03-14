import Link from 'next/link';
import React from 'react'

function SmallNewsCard(props) {
  const { link, img, title, slag, data, innerimg } = props;
  return (
    <>
      <div className="slider_item">
        <div className="new_newsMedia_card">
          <div className="card_img">
            <div className="img_parent">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="card_body">
            <div className="card_date"><span className="text-w-100">Nov, 09, 2022 </span></div>
            <div className="card_title">
              <h5 className="text-w-500">{title}</h5>
            </div>
            <div className="card_text">
              <div className='render_html' dangerouslySetInnerHTML={{ __html: data }} />
               
            </div>
            <div className="read_more">
              <Link href={{ pathname: `/newsdetails/${link}`, query: { data: data, img: img, title: title, slag: slag, innerimg:innerimg } }} className="text-f-2 text-w-500">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallNewsCard


