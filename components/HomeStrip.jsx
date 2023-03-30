import React from 'react'

function HomeStrip({data}) {
  return (
    <>
      {/* <!-- Sustainability --> */}
      <div className="sustainability" id="sustainability_section">
        <div className="container">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase text-center text-white ">Sustainability</h5>

          </div>
          <p className="text-white text-center text-w-300">
            {data.attributes?.SUSTAINABILITY}
           </p>
        </div>
      </div>

    </>
  )
}

export default HomeStrip