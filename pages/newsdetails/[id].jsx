import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import BtnBack from "../../components/btnBack";

function productDetails() {
  const router = useRouter();
  const data = router.query.data;
  const title = router.query.title;
  const img = router.query.img;
  const slag = router.query.slag;
  const innerimg = router.query.innerimg;

  const [loadbtn, setLoadbtn] = useState(false);

  useEffect(() => {
    document.title = title


    const script = document.createElement('script');
    script.src = '/js/backbtn_script.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    }


  }, [title])

  return (
    <>
      {/* inner_news */}

      <div className="inner_blog inner_news">


        <BtnBack backLink="newsmedia_section" />


        <div className="mobile_blog_image d-block d-lg-none">
          <div className="card_img">
            <div className="img_parent">
              <img src={innerimg} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="about_header inner_blog_padding">
                <h5 className="text-f-4 text-w-700 text-uppercase text-left text-black ">
                  {title}
                </h5>
                <h6 className="col-lg-12">{slag}</h6>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="inner_blog_content">
                <div className="inner_parg">
                  <Scrollbar>
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                  </Scrollbar>

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
                    <img src={innerimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default productDetails;


