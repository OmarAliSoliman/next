import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { bublic_url, news_api } from "../../components/API";
import { Scrollbars } from 'react-custom-scrollbars-2';
import BtnBack from "../../components/btnBack";
import PageSkelton from "../../components/PageSkelton";


function productDetails() {

  const router = useRouter();
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false);
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

    // const script = document.createElement('script');
    // script.src = '/js/backbtn_script.js';
    // script.async = true;
    // document.head.appendChild(script);
    // return () => {
    //   document.head.removeChild(script);
    // }


  }, [id, title])


  const retreveData = async (id) => {
    await axios.get(`${news_api}/${id}?populate=*`).then((res) => {
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

      {loading && !id ? (<PageSkelton title={data.attributes?.Title} />) : (<div className="inner_blog inner_news">


        {/* <BtnBack backLink="newsmedia_section" /> */}


        <div className="mobile_blog_image d-block d-lg-none">
          <div className="card_img">
            <div className="img_parent">
              <img src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="about_header inner_blog_padding">
                <h5 className="text-f-4 text-w-700 text-uppercase text-left text-black ">
                  {data.attributes?.Title}
                </h5>
                <h6 className="col-lg-12">{data.attributes?.Author}</h6>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="inner_blog_content">
                <div className="inner_parg">

                  <Scrollbars style={{ width: 500, height: 300 }}>
                    <p>{data.attributes?.Description}</p>
                  </Scrollbars>


                </div>
                <div className="back_btn">
                    <a href="/#newsmedia_section">
                      <img src="/images/newarrowblack.svg" alt="" />
                    </a>
                  </div>
              </div>
              <a href="/#ourproduct_section" className="back_btn_arrow">
                <img src="/images/arrow-return.svg" alt="" />
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-none d-lg-block">
              <div className="inner_blog_img">
                <div className="card_img">
                  <div className="img_parent">
                    <img src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}



    </>
  );
}

export default productDetails;


