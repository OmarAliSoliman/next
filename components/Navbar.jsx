import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




function Navbar(props) {
  const {openSidebar} = props;
  return (
    <>
      {/* <!-- navbar --> */}
      <div className="my_navbar">
        <div className="container">
          <div className="wrapper">
            <div className="logo">
              <Link href="/">
                <img src={`/images/newlogo.svg`} alt="" />
              </Link>
            </div>
            <div className=" burger_menue">
              <div className="contact">
                <a className="text-f-3" href="#contactus_section">Contact Us</a>
              </div>
              <div className="menu_icon" onClick={openSidebar}>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar