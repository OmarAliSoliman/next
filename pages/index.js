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

function Home() {

  useEffect(()=>{
    document.title = "Home"
  }, [])

  return (
    <>

      <FixedImg />

      <Header />

      <HomeAbout />

      <HomeProuduct />

      {/* <HomeMap /> */}
      <Map />

      <HomeNews />

      <HomeStrip />

      <HomeContactUs />

    </>
  )
}


export default Home
