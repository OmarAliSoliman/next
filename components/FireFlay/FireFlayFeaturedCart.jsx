import React from 'react'
import { bublic_url } from '../API'

function FireFlayFeaturedCart({item}) {
  return (
    <>
      <li>
        <div className="feat_card d-flex align-items-center justify-content-start">
          <div className="card_icon">
            <img src={`${bublic_url}${item.attributes.Icon.data.attributes.url}`} alt="" />
          </div>
          <span className="line"></span>
          <h6>{item.attributes.Label} </h6>
        </div>
      </li>
    </>
  )
}

export default FireFlayFeaturedCart