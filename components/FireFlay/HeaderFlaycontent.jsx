import React from 'react'

function HeaderFlaycontent({data}) {
  return (
    <>


      <div className="header-content">
        <div className="container">
          <div className="content col-lg-12 col-xl-7">
            <img src={`${process.env.PUBLIC_URL}/images/firefly/titleimg.svg`} alt="" />
            <h1 className="text-white header_title">{data?.attributes.FirstSectionLabel}</h1>
            <p className="text-white header_text text-uppercase">{data?.attributes.FirstSectionBio}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default HeaderFlaycontent