import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useMemo } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { bublic_url, product_api } from "../../components/API";
import BtnBack from "../../components/btnBack";
import PageSkelton from "../../components/PageSkelton";

function productDetails() {
  const [data, setData] = useState({})
  const router = useRouter();
  // const [id, setID] = useState(parseInt(router.query.id))
  const [loadin, setLoading] = useState(true);
  const title = router.query.title
  // type
  const id = parseInt(router.query.id);
  const memozid = useMemo(() => {
    return parseInt(router.query.id)
  }, [id])

  useEffect(() => {
    document.title = title
    setLoading(true)
    // setID(parseInt(router.query.id))
    console.log(memozid)
    if (memozid) {
      retreveData(memozid);
    }

  }, [id, title])


  const retreveData = async (id) => {
    await axios.get(`${product_api}/${id}?populate=*`).then((res) => {
      if (res.status == 200) {
        setData(res.data.data);
        console.log(res.data.data);
      }
    }).catch((er) => {
      console.log(er)
    }).finally(() => {
      setLoading(true)
    })
  }

  return (
    <>
      {/* inner_news */}

      {loadin && !id ? (<PageSkelton title={data.attributes?.Title} />) : (
        <div class="inner_blog blog_page">

          {/* <BtnBack backLink="ourproduct_section" /> */}

          <div class="mobile_blog_image d-block d-lg-none">
            <div class="card_img">
              <div class="img_parent">
                <img src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} alt="" />
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="inner_blog_content">
                  <div class="about_header">
                    <h5 class="text-f-5 text-w-700 text-uppercase text-left text-black "> {data.attributes?.Title}</h5>
                    {/* <h6 class="col-lg-12">A new vision for a brighter future</h6> */}
                  </div>
                  <div class="inner_parg">
                    <Scrollbars style={{ width: 500, height: 300 }}>
                      <p>{data.attributes?.Content}</p>
                    </Scrollbars>
                  </div>
                  <div className="back_btn">
                    <a href="/#ourproduct_section">
                      <img src="/images/newarrowblack.svg" alt="" />
                    </a>
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
                      <img src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
}

export default productDetails;


