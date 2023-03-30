import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Placeholder from 'react-bootstrap/Placeholder';



function PageSkelton({title}) {
  return (
    <>
      <div class="inner_blog blog_page innerpage-skelton">
        <div class="mobile_blog_image d-block d-lg-none">
          <div class="card_img">
            <div class="img_parent">
              <Placeholder as={title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="inner_blog_content">
                <div class="about_header">
                  <h5 aria-hidden="true">
                    <Placeholder xs={6} />
                  </h5>
                </div>
                <div class="inner_parg">
                  <Scrollbar>
                    <p aria-hidden="true">
                      <Placeholder xs={6} />
                    </p>
                  </Scrollbar>
                </div>
              </div>
              <Link href="/#ourproduct_section" className="back_btn_arrow">
                <img src="/images/arrow-return.svg" alt="" />
              </Link>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 d-none d-lg-block">
              <div class="inner_blog_img">
                <div class="card_img">
                  <div class="img_parent">
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