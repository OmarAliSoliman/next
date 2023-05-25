import React, { Component } from 'react'
import Layout from '../layout/Layout'
import '../css/glopal.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Router } from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  })

  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
  })

  return (
    <>

      <Layout>
        
        <Component {...pageProps} />
        <ToastContainer />

      </Layout>

    </>
  )
}

export default MyApp