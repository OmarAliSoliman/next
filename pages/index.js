import Head from "next/head";
import React from "react";
import axios from "axios";
import Map from "../components/Map";
import Header from "../components/Header";
import HomeAbout from "../components/HomeAbout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeProuduct from "../components/HomeProuduct";
import HomeNews from "../components/HomeNews";
import HomeStrip from "../components/HomeStrip";
import HomeContactUs from "../components/HomeContactUs";
import FixedImg from "../components/FixedImg";
import { bublic_url, home_api } from "../components/API";
import Loading from "../components/Loading";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>viola Outdoor</title>
        <meta name="description" content="Viola Outdoor" />
        <meta property="og:title" content="Viola Outdoor" />
        <meta
          property="og:description"
          content={data.attributes?.AboutUSLeftSide}
        />
        <meta
          property="og:image"
          content="https://api.voutdoor.ae/uploads/logo_5b70fb53d4.svg"
        />
        <meta property="og:type" content="article" />
      </Head>

      {!data ? <Loading /> : null}

      <FixedImg data={data} />
      <Header data={data} />
      <HomeAbout data={data} />
      <HomeProuduct />
      <Map />
      <HomeNews />
      <HomeStrip data={data} />
      <HomeContactUs data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, params } = context;
  // const hostname = host || null;
  try {
    const response = await axios.get(`${home_api}/?populate=*`);
    const data = response.data.data;
    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: {} },
    };
  }
}

export default Home;
