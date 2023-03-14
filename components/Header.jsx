import React from 'react'

function Header() {
  return (
    <>
      {/* <!-- header video --> */}
      <div className="section header_video">
        <div className="video_behind">
          <video src="/video/newvideo.mp4" autoPlay playsInline muted loop></video>
        </div>

        <div className="video_wrapper">
          <video src="/video/newvideo.mp4" autoPlay playsInline muted loop></video>
        </div>

        <div className="header_content">
          <div className="container">
            <h5 className="text-w-900 col-md-12 col-lg-10 mx-auto">Viola Outdoor is everywhere your audiences are</h5>
          </div>
        </div>
        <a href="#aboutus_section" className="arrow_animation">
          <img src="/images/arrowdown.svg" alt="" />
            <span className="text-f-600 text-f-3">About us</span>
        </a>
      </div>

    </>
  )
}

export default Header