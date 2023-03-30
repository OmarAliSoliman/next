import React from 'react'

function HomeAbout({data}) {
  return (
    <>
      {/* <!-- about us section --> */}
      <div className="about_us" id="aboutus_section">
        <div className="container">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase">About us</h5>
          </div>
          <div className="about_contetn">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <h5 className="text-w-700">
                  {data.attributes?.AboutUSLeftSide}
                </h5>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-1 d-none d-md-block"></div>
              <div className="col-sm-12 col-md-12  col-lg-7">
                <p className="text-w-400">
                {data.attributes?.AboutUsRightSide}
                </p>
               
              </div>
            </div>
          </div>
          <a href="#ourproduct_section" className="arrow_animation">
            <img src="/images/arrowdownb.svg" alt="" />
              <span className="text-f-600 text-f-3">Our products</span>
          </a>
        </div>

      </div>

    </>
  )
}

export default HomeAbout