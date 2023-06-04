import React, { Component } from 'react';
import Layout from '../layout/Layout';
import '../css/glopal.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Router } from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        {/* Add Google Tag Manager script to the head section */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager -->
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFDTBWK');
              <!-- End Google Tag Manager -->
            `,
          }}
        />
      </Head>

      {/* Add Google Tag Manager noscript tag */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Google Tag Manager (noscript) -->
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFDTBWK"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
            <!-- End Google Tag Manager (noscript) -->
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default MyApp;
