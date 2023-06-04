import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Scrollbar } from "react-scrollbars-custom";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Placeholder from 'react-bootstrap/Placeholder';



function PageSkelton({title}) {
  return (
    <>
      <div className="inner_blog blog_page innerpage-skelton">
        <div className="mobile_blog_image d-block d-lg-none">
          <div className="card_img">
            <div className="img_parent">
              <Placeholder as={title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="inner_blog_content">
                <div className="about_header">
                  <h5 aria-hidden="true">
                    <Placeholder xs={6} />
                  </h5>
                </div>
                <div className="inner_parg">
                  <Scrollbars >
                    <p aria-hidden="true">
                      <Placeholder xs={6} />
                    </p>
                  </Scrollbars>
                </div>
              </div>
              <Link href="/#ourproduct_section" className="back_btn_arrow">
                <img src="/images/arrow-return.svg" alt="" />
              </Link>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-none d-lg-block">
              <div className="inner_blog_img">
                <div className="card_img">
                  <div className="img_parent">
                    <Placeholder as={title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageSkelton