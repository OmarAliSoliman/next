import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { bublic_url, product_api } from "../../components/API";
import BtnBack from "../../components/BtnBack";
import PageSkelton from "../../components/PageSkelton";

function ProductDetails({ data, title }) {
  return (
    <>

      <Head>
        <title>{data.attributes?.Title}</title>
        <meta name="description" content="Viola Outdoor" />
        <meta name="og:title" property="og:title" content={data.attributes?.Title} />
        <meta name="og:description" property="og:description" content="Viola Outdoor" />
        <meta name="og:image" property="og:image" content={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} />
        <meta name="og:image:type" property="og:image:type" content="image/jpeg" />
        {/* <meta name="og:url" property="og:url" content={window.location.href} /> */}
        {/* <meta name="og:site_name" property="og:site_name" content={window.location.href} /> */}
        <meta name="og:type" property="og:type" content="article" />
      </Head>

      {/* inner_news */}
      <div className="inner_blog blog_page">
        <div className="mobile_blog_image d-block d-lg-none">
          <div className="card_img">
            <div className="img_parent">
              <img src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="inner_blog_content blog_inner_blog_content">
                <div className="back_btn">
                  <a href="/#ourproduct_section">
                    <img src="/images/newarrowblack.svg" alt="" />
                  </a>
                </div>
                <div className="about_header">
                  <h5 className="text-f-5 text-w-700 text-uppercase text-left text-black "> {data.attributes?.Title}</h5>
                  {/* <h6 class="col-lg-12">A new vision for a brighter future</h6> */}
                </div>
                <div className="inner_parg">
                  <p>{data.attributes?.Content}</p>
                </div>
              </div>
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
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const id = parseInt(query.id);
  const title = query.title;

  try {
    const response = await axios.get(`${product_api}/${id}?populate=*`);
    const data = response.data.data;
    return {
      props: {
        data,
        title,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export default ProductDetails;
