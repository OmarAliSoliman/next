import axios from "axios";
import Head from 'next/head';
import { bublic_url, news_api } from "../../components/API";
import PageSkelton from "../../components/PageSkelton";

export default function NewsDetails({ data, title }) {
  return (
    <>
      {/* inner_news */}
      <Head>
        <title>{data.attributes?.Slug}</title>
        <meta name="description" content="Viola Outdoor" />
        <meta name="og:title" property="og:title" content={data.attributes?.Slug} />
        <meta name="og:description" property="og:description" content={data.attributes?.Content} />
        <meta name="og:image" property="og:image" content={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`} />
        <meta name="og:image:type" property="og:image:type" content="image/jpeg" />
        <meta name="og:type" property="og:type" content="article" />
      </Head>
      {!data ? (
        <PageSkelton title={data.attributes?.Title} />
      ) : (
        <div className="inner_blog inner_news">
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
              <div className="col-sm-12 col-lg-12">
                <div className="about_header inner_blog_padding">
                  <div className="back_btn blog_back_btn">
                    <a href="/#newsmedia_section">
                      <img src="/images/newarrowblack.svg" alt="" />
                    </a>
                  </div>
                  <h5 className="text-f-4 text-w-700 text-uppercase text-left text-black ">
                    {data.attributes?.Title}
                  </h5>
                  <h6 className="col-lg-12">{data.attributes?.Author}</h6>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="inner_blog_content">
                  <div className="who-content">
                    <div className="card_img">
                      <div className="img_parent">
                        <img
                          src={`${bublic_url}${data.attributes?.inner_image?.data?.attributes?.url}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <p>{data.attributes?.Description}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query, params } = context;
  const title = params.slug;
  var data = [];
  try {
    const response = await axios.get(`${news_api}/?populate=*&filters[Slug]=${title}`);
    if(response.data.data[0].length === 0){
      data = [];
    }else{
     data = response.data.data[0];
    }
    return {
      props: {
        data,
        title
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
