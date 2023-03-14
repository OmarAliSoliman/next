import React from 'react'

function HomeMap() {
  return (
    <>
      {/* <!-- our locations --> */}
      <div className="our_locations" id="ourlocation_section">
        <div className="container">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase text-center">Our Locations</h5>
          </div>

          <a className="location_map" href="./assets/images/AD-MediumMap-v4.jpg" data-fancybox="gallery2" rel="group1">
            <img src="/images/AD-MediumMap-v4.jpg" alt="" />
          </a>
        </div>
      </div>

    </>
  )
}

export default HomeMap