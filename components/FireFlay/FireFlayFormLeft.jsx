import React from 'react'

function FireFlayFormLeft({data}) {
  // console.log(data.attributes.SecondSectionDetails.split('\n'))
  return (
    <>

      <div className="side_left_section">
        <div className="top_content">
          <h5 className="text-uppercase">{data?.attributes.SecondSectionTitle}</h5>
          <p className='text-white'>{data.attributes.SecondSectionDetails.split('\n')[0]}</p>
          <p className='text-white'>{data.attributes.SecondSectionDetails.split('\n')[2]}</p>
        </div>

        {/* <div className="logo_social d-flex align-items-center">
          <div className="logoimg">
            <img src={`${process.env.PUBLIC_URL}/images/firefly/logosvg.svg`} alt="" />
          </div>

        </div> */}

      </div>


    </>
  )
}

export default FireFlayFormLeft