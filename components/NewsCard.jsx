import Link from 'next/link';
import React from 'react'

function NewsCard(props) {
  const {link, img, data, title, slag} =  props;
  return (
    <>
      <Link href={{ pathname: `/blogdetails/${link}`, query: { data: data, img: img, title: title, slag:slag } }} className="main_blog">
        <div className="card_img">
          <div className="img_parent">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="main_title text-w-300 text-white col-lg-10 ms-auto">
          <p>OOH Guide 2022: Radical evolution – by Viola’s Ammar Sharaf</p>
        </div>
      </Link>
    </>
  )
}

export default NewsCard