import Head from "next/head";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Loading from '../components/Loading';

const openSidebar = () => {
  document.querySelector("#nav-icon1").classList.toggle("open");
  document.querySelector(".side_nav").classList.toggle("side_nav_open");
  document.querySelector("html").classList.toggle("menu_open");
};

const closeSidebar = (e) => {
  document.querySelector(".side_nav").classList.toggle("side_nav_open");
  document.querySelector("#nav-icon1").classList.toggle("open");
  document.querySelector("html").classList.remove("menu_open");

};




function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false)
    } else {
      setLoading(true)
    }

  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />

        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/backbtn_style.css" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/js/jquery-3.6.0.min.js"></script>
        <script src="/js/backbtn_script.js" ></script>

      </Head>

    
      <SideNav closeSidebar={closeSidebar} />

      <Navbar openSidebar={openSidebar} />

      <main> {children} </main>

      <Footer />
    </>
  );
}

export default Layout;
