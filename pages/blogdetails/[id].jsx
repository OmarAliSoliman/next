import Link from "next/link";
import { useRouter } from "next/router";
import React, {useEffect} from "react";
import { Scrollbar } from "react-scrollbars-custom";
import BtnBack from "../../components/btnBack";

function productDetails() {
  const router = useRouter();
  const data = router.query.data;
  const title = router.query.title;
  const img = router.query.img;
  const slag = router.query.slag;

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
      <div class="inner_blog blog_page">

        <BtnBack backLink="ourproduct_section" />

        <div class="mobile_blog_image d-block d-lg-none">
          <div class="card_img">
            <div class="img_parent">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="inner_blog_content">
                <div class="about_header">
                  <h5 class="text-f-5 text-w-700 text-uppercase text-left text-black "> {title}</h5>
                  {/* <h6 class="col-lg-12">A new vision for a brighter future</h6> */}
                </div>
                <div class="inner_parg">
                  <Scrollbar>
                    <div dangerouslySetInnerHTML={{ __html: data }} />
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
                    <img src={img} alt="" />
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


