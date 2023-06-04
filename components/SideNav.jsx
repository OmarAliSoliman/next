import Link from "next/link";
import React from "react";

function SideNav(props) {
  const {closeSidebar} = props;
  return (
    <>
      {/* <!-- sidenav --> */}
      <div className="side_nav">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <ul className="list-unstyled links">
                <li>
                  <a href="/#aboutus_section" onClick={closeSidebar}>about us</a>
                </li>
                <li>
                  <Link href="/firefly" onClick={closeSidebar}>Firefly</Link>
                </li>
                <li>
                  <a href="/#ourproduct_section" onClick={closeSidebar}>Our Products</a>
                </li>
                <li>
                  <a href="/#ourlocation_section" onClick={closeSidebar}>Our Locations</a>
                </li>
                <li>
                  <a href="/#newsmedia_section" onClick={closeSidebar}>News & Insights</a>
                </li>
                <li>
                  <a href="/#contactus_section" onClick={closeSidebar}>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
