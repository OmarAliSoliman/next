import axios from "axios";
import Head from "next/head";
import { bublic_url, product_api } from "../../components/API";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

function ProductDetails({ id, data, title }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>{`Viola Outdoor - ${data.attributes?.Title}`}</title>
        <meta name="description" content="Viola Outdoor" />
        <meta property="og:title" content={data.attributes?.Slug} />
        <meta property="og:description" content={data.attributes?.Content} />
        <meta
          property="og:image"
          content={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`}
        />
        <meta property="og:type" content="article" />
      </Head>

      {/* inner_news */}
      <div className="inner_blog blog_page">
        <div className="mobile_blog_image d-block d-lg-none">
          <div className="card_img">
            <div className="img_parent">
              <img
                src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`}
                alt=""
              />
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
                  <h5 className="text-f-5 text-w-700 text-uppercase text-left text-black ">
                    {" "}
                    {data.attributes?.Title}
                  </h5>
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
                    <img
                      src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`}
                      alt=""
                    />
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
  const { query, params } = context;
  // const title = req.url.split("/")[2].split('?')[0];
  const title = params.slug;
  var data = [];
  try {
    const response = await axios.get(
      `${product_api}/?populate=*&filters[Slug]=${title}`
    );
    if (response.data.data[0].length === 0) {
      data = [];
    } else {
      data = response.data.data[0];
    }
    return {
      props: {
        data,
        title,
        // response.data
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
