import React from 'react';
import Head from 'next/head';
import { bublic_url, fireflyapi } from '../../components/API';
import Loading from '../../components/Loading';
import HeaderFlaycontent from '../../components/FireFlay/HeaderFlaycontent';
import FireFlayFormLeft from '../../components/FireFlay/FireFlayFormLeft';
import FireFlayFormRight from '../../components/FireFlay/FireFlayFormRight';
import FireFlayFeatures from '../../components/FireFlay/FireFlayFeatures';
import axios from 'axios';


function Firefly({ data }) {
  const extension = data?.attributes?.FirstSectionBackground?.data?.attributes?.url?.split('.').pop();
  return (
    <>
      <Head>
        <title>Viola Outdoor - FireFly</title>
        <meta name="description" content={data?.attributes?.FirstSectionLabel} />
        <meta property="og:title" content="viola Outdoor - FireFly" />
        <meta
          property="og:description"
          content={data?.attributes?.FirstSectionLabel}
        />
        <meta
          property="og:image"
          content="/images/firefly/fireflyimg.webp"
        />
        <meta property="og:type" content="article" />
      </Head>

      {!data ? <Loading /> : null}

      <div className="fireflay_page">


        <div className="firefly_header">
          {extension === 'jpg' || extension === 'png' || extension === 'gif' ? (
            <div className="card_img">
              <div className="img_parent">
                <img src={`${bublic_url}${data.attributes.FirstSectionBackground.data.attributes.url}`} alt="" />
              </div>
              <HeaderFlaycontent data={data} />
            </div>
          ) : extension === 'mp4' || extension === 'avi' || extension === 'mov' ? (
            <div className="header_video">
              <div className="video_behind">
                <video src={`${bublic_url}${data.attributes.FirstSectionBackground.data.attributes.url}`} autoPlay playsInline muted loop></video>
              </div>
              <div className="video_wrapper">
                <video src={`${bublic_url}${data.attributes.FirstSectionBackground.data.attributes.url}`} autoPlay playsInline muted loop></video>
              </div>
              <HeaderFlaycontent data={data} />
            </div>
          ) : (
            <div className="card_img">
              <div className="img_parent">
                <img src={`/images/firefly/fireflyimg.webp`} alt="" />
              </div>
              <HeaderFlaycontent data={data} />
            </div>
          )}
        </div>

        <div className="fireflay_form_section">
          <div className="bottom_lines_strip">
            <img src={`/images/firefly/bottomstrip.svg`} alt="" />
          </div>
          <div className="strip_top">
            <div className="lines">
              <img src={`/images/firefly/line.svg`} alt="" />
            </div>
            <div className="circles">
              <img src={`/images/firefly/circles.svg`} alt="" />
            </div>

            <div className="container">
              <div className="col-lg-6">
                <FireFlayFormLeft data={data} />
              </div>
            </div>
          </div>

          <div className="strip_bottom">
            <div className="container-fluid circles2">
              <div className="row">
                <div className="col-lg-12 mt-5">
                  <img src={`/images/firefly/circles2.svg`} alt="" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="col-lg-6">
                <div className="logo_social d-flex align-items-center">
                  <div className="logoimg">
                    <img src={`/images/firefly/logosvg.svg`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section_content">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  {/* <FireFlayFormLeft data={data} /> */}
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <FireFlayFormRight data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <FireFlayFeatures />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const response = await axios.get(fireflyapi);
    const data = response.data.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: {},
      },
    };
  }
}


export default Firefly;
