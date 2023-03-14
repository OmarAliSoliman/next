import React from 'react'

function HomeAbout() {
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
                <h5 className="text-w-700">Viola Outdoor is a leading provider of out-of-home advertising, offering brands
                  dynamic and impactful
                  communication solutions.</h5>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-1 d-none d-md-block"></div>
              <div className="col-sm-12 col-md-12  col-lg-7">
                <p className="text-w-400">
                  We ensure maximum exposure and a strategic reach, enabling brands to engage with their audience on the go.
                </p>
                <p className="text-w-400">
                  Whether creating awareness in a specific neighborhood, the entire city or across the busiest highways, we
                  provide comprehensive exposure for our clients that delivers results and maximizes their ROI. </p>
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