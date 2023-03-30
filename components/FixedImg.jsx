import React from 'react'
import { bublic_url } from './API'

function FixedImg({data}) {
  return (
    <>
      <div className="fixed_image">
        <div className="card_img">
          <div className="img_parent">
            <img src={`${bublic_url}${data.attributes?.Sustainability_background.data.attributes.url}`} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FixedImg