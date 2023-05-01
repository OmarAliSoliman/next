import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import Map from '../components/Map';
import Header from '../components/Header';
import HomeAbout from '../components/HomeAbout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeProuduct from '../components/HomeProuduct';
import HomeMap from '../components/HomeMap';
import HomeNews from '../components/HomeNews';
import HomeStrip from '../components/HomeStrip';
import HomeContactUs from '../components/HomeContactUs';
import FixedImg from '../components/FixedImg';
import { home_api } from '../components/API';
import Loading from '../components/Loading';


function Home() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Home"
    setLoading(true)
    retreveData();

  }, [])


  const retreveData = async () => {
    await axios.get(`${home_api}/?populate=*`).then((res) => {
      if (res.status == 200) {
        setData(res.data.data)
      }
    }).catch((er) => {
      console.error(er)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <Head>
        <title>Viola Outdoor - Home</title>
        <meta property="og:title" content="Viola Outdoor" key="title" />
      </Head>
      {
        loading ? <Loading /> : null
      }


      <FixedImg data={data} />

      <Header data={data} />

      <HomeAbout data={data} />

      <HomeProuduct />

      {/* <HomeMap /> */}
      <Map />

      <HomeNews />

      <HomeStrip data={data} />

      <HomeContactUs data={data} />

    </>
  )
}


export default Home
