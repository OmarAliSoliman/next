import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerF,
  InfoWindow,
  MarkerClusterer
} from "@react-google-maps/api";
import axios from "axios";
import { bublic_url, location_points } from "./API";

const containerStyle = {
  width: "100%",
  height: "900px",
};

const center = {
  lat: 24.4047003,
  lng: 54.458163,
};

const exampleMapStyles = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      { saturation: -100 }, // <-- THIS
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#7B868C" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];


var json1 = {
  "points": [{
    "title": "ADH01",
    "icon": "/images/bridge.svg",
    "type": "bridge",

    "lat": 24.42202,
    "lng": 54.51518
  },



  {
    "title": " AIN03	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.32806,
    "lng": 54.58532
  },
  {
    "title": " AIN05	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.28106,
    "lng": 54.64804
  },
  {
    "title": " AIN06	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.25178,
    "lng": 54.70831
  },
  {
    "title": " APT02	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.44669,
    "lng": 54.39267
  },
  {
    "title": " APT03	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.42593,
    "lng": 54.44601
  },
  {
    "title": " APT04	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.41905,
    "lng": 54.47728
  },
  {
    "title": " APT05	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.41443,
    "lng": 54.50369
  },

  {
    "title": " KHA07	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.41196,
    "lng": 54.63274
  },
  {
    "title": " MUS01	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.39482,
    "lng": 54.52374
  },
  {
    "title": " MUS02	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.37389,
    "lng": 54.52466
  },
  {
    "title": " SLM02	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.44422,
    "lng": 54.441
  },
  {
    "title": " YAS01	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.49956,
    "lng": 54.59204
  },
  {
    "title": " YAS05	",
    "icon": "/images/bridge.svg",
    "type": "bridge",
    "lat": 24.49249,
    "lng": 54.62034
  },

  // hordings
  {
    "title": " 1	",
    "icon": "/images/hoardings_icon2.svg",
    "type": "hoardings",
    "lat": 24.4899566319848,
    "lng": 54.3968478635654
  },
  {
    "title": " 2	",
    "icon": "/images/hoardings_icon2.svg",
    "type": "hoardings",
    "lat": 24.490707794973,
    "lng": 54.3967635411508
  },
  {
    "title": " 3	",
    "icon": "/images/hoardings_icon2.svg",
    "type": "hoardings",
    "lat": 24.4910201177346,
    "lng": 54.3967895723245
  },
  // lamppost
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4702305629939,
    "lng": 54.3222894838317
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46369902,
    "lng": 54.32358284
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46503214,
    "lng": 54.32771077
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47323382,
    "lng": 54.34135821
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47014777,
    "lng": 54.32235651
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46455015,
    "lng": 54.32681205
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46688305,
    "lng": 54.33072321
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4704073,
    "lng": 54.33660119
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47160491,
    "lng": 54.32297053
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46353133,
    "lng": 54.32494464
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48370733,
    "lng": 54.37549866
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44273901,
    "lng": 54.4046993
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42107853,
    "lng": 54.44428354
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49057335,
    "lng": 54.36417984
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44507799,
    "lng": 54.3663776
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46314867,
    "lng": 54.34902402
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47935252,
    "lng": 54.35521002
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48324152,
    "lng": 54.3587064
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48815645,
    "lng": 54.35912158
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49243604,
    "lng": 54.36814179
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4590791,
    "lng": 54.35828114
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42094698,
    "lng": 54.44293743
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47228903,
    "lng": 54.34154884
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47732783,
    "lng": 54.34627786
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47498777,
    "lng": 54.36437768
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46999889,
    "lng": 54.37093879
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47417823,
    "lng": 54.37492748
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49519317,
    "lng": 54.3658973
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48955148,
    "lng": 54.36281622
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46186368,
    "lng": 54.36114491
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47424585,
    "lng": 54.36676132
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47414206,
    "lng": 54.37633495
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49408583,
    "lng": 54.3694339
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49185105,
    "lng": 54.38292986
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.477272,
    "lng": 54.35263088
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45043318,
    "lng": 54.361192
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46724939,
    "lng": 54.33944835
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47520982,
    "lng": 54.36592756
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47827941,
    "lng": 54.38120069
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48514516,
    "lng": 54.36210547
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4897013,
    "lng": 54.35381432
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49617277,
    "lng": 54.37230073
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49014975,
    "lng": 54.3691831
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4799939,
    "lng": 54.37935153
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46151617,
    "lng": 54.36093865
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45644138,
    "lng": 54.35550224
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4676501,
    "lng": 54.35558644
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46086518,
    "lng": 54.38744443
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48180959,
    "lng": 54.37733681
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49420611,
    "lng": 54.37479081
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.41901685,
    "lng": 54.46142978
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46988628,
    "lng": 54.37039333
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4762108,
    "lng": 54.36493307
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48049376,
    "lng": 54.35063158
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47889478,
    "lng": 54.36978443
  },

  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46392242,
    "lng": 54.37662105
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42404045,
    "lng": 54.45264568
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46612195,
    "lng": 54.36608698
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48007991,
    "lng": 54.35028555
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49380377,
    "lng": 54.37427042
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48631161,
    "lng": 54.38026064
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49112189,
    "lng": 54.3847294
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47140833,
    "lng": 54.3695855
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48327399,
    "lng": 54.35407219
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4778142,
    "lng": 54.3533925
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48759394,
    "lng": 54.36021266
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46476332,
    "lng": 54.32987975
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46236208,
    "lng": 54.34979915
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49100552,
    "lng": 54.36935981
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.43978267,
    "lng": 54.37151038
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4345418,
    "lng": 54.41082653
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47315061,
    "lng": 54.37481701
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48753844,
    "lng": 54.36551878
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4876139,
    "lng": 54.38208658
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.50902489,
    "lng": 54.38277301
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46374673,
    "lng": 54.33628295
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46268232,
    "lng": 54.3490997
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47760948,
    "lng": 54.36366285
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47099712,
    "lng": 54.37182129
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48664431,
    "lng": 54.36515547
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48800114,
    "lng": 54.37183314
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48487932,
    "lng": 54.35609372
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46442141,
    "lng": 54.33587782
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46662382,
    "lng": 54.34000895
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47436384,
    "lng": 54.34907447
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48321978,
    "lng": 54.35305592
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48898883,
    "lng": 54.35841475
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47244241,
    "lng": 54.37374808
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42130435,
    "lng": 54.4407389
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45100034,
    "lng": 54.39682594
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48747278,
    "lng": 54.37248436
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48138993,
    "lng": 54.36001548
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48566352,
    "lng": 54.35741259
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47021409,
    "lng": 54.34387943
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46338778,
    "lng": 54.32705204
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47575349,
    "lng": 54.34760923
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48480569,
    "lng": 54.35745064
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49001304,
    "lng": 54.35756966
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48300159,
    "lng": 54.37563544
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49170259,
    "lng": 54.37726465
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4657347,
    "lng": 54.33471011
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48691776,
    "lng": 54.35413153
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48249964,
    "lng": 54.35289585
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49009544,
    "lng": 54.37013101
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44488648,
    "lng": 54.40268415
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.43508905,
    "lng": 54.41437187
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42295522,
    "lng": 54.45011184
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42043074,
    "lng": 54.45712002
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49177674,
    "lng": 54.36092946
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49244828,
    "lng": 54.36116891
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49230685,
    "lng": 54.36174292
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.491881,
    "lng": 54.36170334
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49352549,
    "lng": 54.37425382
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49343678,
    "lng": 54.37509309
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46917556,
    "lng": 54.34356701
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49329483,
    "lng": 54.36743058
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4885977,
    "lng": 54.36408563
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46665927,
    "lng": 54.33387953
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47126613,
    "lng": 54.35211963
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47074275,
    "lng": 54.3714751
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4937072,
    "lng": 54.36010968
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46651528,
    "lng": 54.33938652
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49306178,
    "lng": 54.36788533
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46699524,
    "lng": 54.3649436
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47711852,
    "lng": 54.34785682
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49458898,
    "lng": 54.38130743
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4717538,
    "lng": 54.37283751
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49252297,
    "lng": 54.37842067
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4899474,
    "lng": 54.3584253
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46816926,
    "lng": 54.35590812
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46941505,
    "lng": 54.34305364
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48167009,
    "lng": 54.3579039
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46741908,
    "lng": 54.34041417
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48606404,
    "lng": 54.36339105
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48512805,
    "lng": 54.36616514
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49600567,
    "lng": 54.36540224
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49720915,
    "lng": 54.37376174
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48693826,
    "lng": 54.35935305
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4908776,
    "lng": 54.37017962
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45444097,
    "lng": 54.35311172
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47401661,
    "lng": 54.34950101
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47034369,
    "lng": 54.3431429
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48557713,
    "lng": 54.35672749
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49975135,
    "lng": 54.3773956
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4968928,
    "lng": 54.37871446
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48383469,
    "lng": 54.37677695
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48669628,
    "lng": 54.36440309
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48361431,
    "lng": 54.35814515
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47591971,
    "lng": 54.34781713
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45609281,
    "lng": 54.35494861
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48586091,
    "lng": 54.35073413
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.47963907,
    "lng": 54.36978572
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49481532,
    "lng": 54.36541208
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42969034,
    "lng": 54.56368313
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.43932861,
    "lng": 54.57758403
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44924261,
    "lng": 54.60683895
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.34574891,
    "lng": 54.53776706
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44158648,
    "lng": 54.60133196
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.37323381,
    "lng": 54.51077659
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.3641833,
    "lng": 54.52472522
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42505094,
    "lng": 54.5472177
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.41781056,
    "lng": 54.56735593
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.37326889,
    "lng": 54.51293802
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42589884,
    "lng": 54.56463078
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.3346814,
    "lng": 54.52559986
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.37411353,
    "lng": 54.53517043
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.3330943,
    "lng": 54.52604982
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.40434349,
    "lng": 54.57192842
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.37424987,
    "lng": 54.53806369
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4332088,
    "lng": 54.57598369
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.33268546,
    "lng": 54.52554551
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45440872,
    "lng": 54.61764495
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44083835,
    "lng": 54.60075737
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44428733,
    "lng": 54.61057093
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.41279879,
    "lng": 54.56903411
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44319179,
    "lng": 54.60664414
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.41520406,
    "lng": 54.56818687
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44570771,
    "lng": 54.61543849
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45678417,
    "lng": 54.61904167
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.52310917,
    "lng": 54.67223476
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.37273613,
    "lng": 54.53640953
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.34719982,
    "lng": 54.53607995
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.43054587,
    "lng": 54.56677166
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.4093643,
    "lng": 54.49214412
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45235868,
    "lng": 54.61593855
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45040435,
    "lng": 54.61107292
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44828175,
    "lng": 54.60168537
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.33353394,
    "lng": 54.52519504
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.41364334,
    "lng": 54.5673565
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44820423,
    "lng": 54.6000567
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44023619,
    "lng": 54.5765293
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42257052,
    "lng": 54.56575886
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.43776144,
    "lng": 54.57305481
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42889737,
    "lng": 54.56074828
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.43653442,
    "lng": 54.56893532
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42347356,
    "lng": 54.56541587
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.40161884,
    "lng": 54.57282414
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.348914,
    "lng": 54.53758153
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.32441773,
    "lng": 54.53112529
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.42855148,
    "lng": 54.56376543
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.34705301,
    "lng": 54.53228766
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.37047634,
    "lng": 54.5365178
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.44108897,
    "lng": 54.60179635
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45954016,
    "lng": 54.62085258
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45901713,
    "lng": 54.61790592
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.46101277,
    "lng": 54.62205475
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.45827953,
    "lng": 54.61894799
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48347452,
    "lng": 54.39391742
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.489383,
    "lng": 54.3960517
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49176201,
    "lng": 54.39642974
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49185756,
    "lng": 54.403356
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49343655,
    "lng": 54.4028609
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48556265,
    "lng": 54.39545971
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.48739418,
    "lng": 54.39618799
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49480787,
    "lng": 54.39423321
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49466154,
    "lng": 54.39619726
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49376306,
    "lng": 54.39952335
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49828538,
    "lng": 54.39448853
  },
  {
    "title": "",
    "icon": "/images/lampposts_icon.svg",
    "type": "lampposts",
    "lat": 24.49084836,
    "lng": 54.40382428
  }




  ]
};

const bridgePointsclusterStyles = [
  {
    textColor: 'black',
    url: '/images/bridge.svg',
    height: 50,
    width: 50,
  },
];
const hoardingsPointsclusterStyles = [
  {
    textColor: 'black',
    url: '/images/hoardings_icon2.svg',
    height: 50,
    width: 50,
  },
];
const lamppostsPointsclusterStyles = [
  {
    textColor: 'black',
    url: '/images/lampposts_icon.svg',
    height: 50,
    width: 50,
  },
];


const digitalbridgePointssclusterStyles = [
  {
    textColor: 'black',
    url: '/images/lampposts_icon.svg',
    height: 50,
    width: 50,
  },
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  // get data
  const [points, setPoints] = useState([]);

  // points type
  const [bridgePoints, setBridgePoints] = useState([]);
  const [hoardingsPoints, setHoardingsPoints] = useState([]);
  const [lamppostsPoints, setLamppostsPoints] = useState([]);
  const [digitalbridgePoints, setDigitalbridgePoints] = useState([]);

  useEffect(() => {
    retreveData();
  }, [])


  const retreveData = () => {
    axios.get(`${location_points}`).then((res) => {
      if (res.status === 200) {
        console.log(res.data.data[0].attributes.our_location_icon.data.attributes.Title);

        const bridgePoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "Bridge")
        bridgePoints.map((item) => {
          item.attributes.latitude = parseFloat(item.attributes.latitude);
          console.log(item.attributes.latitude)
        })
        setBridgePoints(bridgePoints);


        const hoardingsPoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "hoardings")
        bridgePoints.map((item) => {
          item.attributes.latitude = parseFloat(item.attributes.latitude);
          console.log(item.attributes.latitude)
        })
        setHoardingsPoints(hoardingsPoints);


        const lamppostsPoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "lampposts")
        console.log(lamppostsPoints.length)
        bridgePoints.map((item) => {
          item.attributes.latitude = parseFloat(item.attributes.latitude);
          console.log(item.attributes.latitude)
        })
        setLamppostsPoints(lamppostsPoints);

        const digitalbridgePoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "Digital Bridge")
        console.log(lamppostsPoints.length)
        bridgePoints.map((item) => {
          item.attributes.latitude = parseFloat(item.attributes.latitude);
          console.log(item.attributes.latitude)
        })
        setDigitalbridgePoints(digitalbridgePoints);

      }
    })
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD92D06n8JxOos1Zkmgyj0Y_YUbpR9cyy4",
  });

  const handleMarkerClick = (item) => {
    console.log(item)
    if (item === activeMarker) {
      return;
    }
    setActiveMarker(item);
  };

  return isLoaded ? (
    <div className="googleMap_map our_locations" id="ourlocation_section">
      <div className="">
        <div className="about_header">
          <h5 className="text-f-9 text-w-700 text-uppercase text-center">
            Our Locations
          </h5>
        </div>

        <div className="map_canvas_parent">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}

            zoom={12.4}
            options={{
              styles: exampleMapStyles,
              streetViewControl: false
            }}
          >
            {bridgePoints.length > 0 && (
              <MarkerClusterer
                gridSize={50}
                averageCenter
                enableRetinaIcons
                zoomOnClick
                maxZoom={20}
                options={{
                  styles: bridgePointsclusterStyles
                }}
              >
                {(clusterer) =>
                  bridgePoints.map((point) => (
                    <>
                      <Marker
                        key={parseFloat(point.attributes.latitude)}
                        position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() => handleMarkerClick(parseFloat(point.attributes.longitude))}
                        clusterer={clusterer}
                      />
                      {activeMarker === parseFloat(point.attributes.longitude) ? (
                        <InfoWindow position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }} anchor={activeMarker} onCloseClick={() => setActiveMarker(null)}>
                          <>
                            <div>{point.attributes.our_location_icon.data.attributes.Title}</div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </>
                  ))
                }
              </MarkerClusterer>
            )}


            {hoardingsPoints.length > 0 && (
              <MarkerClusterer
                gridSize={50}
                averageCenter
                enableRetinaIcons
                maxZoom={20}
                zoomOnClick
                options={{
                  styles: hoardingsPointsclusterStyles
                }}
              >
                {(clusterer) =>
                  hoardingsPoints.map((point) => (
                    <>
                      <Marker
                        key={parseFloat(point.attributes.latitude)}
                        position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() => handleMarkerClick(parseFloat(point.attributes.longitude))}
                        clusterer={clusterer}
                      />
                      {activeMarker === parseFloat(point.attributes.longitude) ? (
                        <InfoWindow position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }} anchor={activeMarker} onCloseClick={() => setActiveMarker(null)}>
                          <>
                            <div>{point.attributes.our_location_icon.data.attributes.Title}</div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </>
                  ))
                }
              </MarkerClusterer>
            )}



            {lamppostsPoints.length > 0 && (
              <MarkerClusterer
                gridSize={50}
                averageCenter
                enableRetinaIcons
                maxZoom={20}
                zoomOnClick
                options={{
                  styles: lamppostsPointsclusterStyles
                }}
              >
                {(clusterer) =>
                  lamppostsPoints.map((point) => (
                    <>
                      <Marker
                        key={parseFloat(point.attributes.latitude)}
                        position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() => handleMarkerClick(parseFloat(point.attributes.longitude))}
                        clusterer={clusterer}
                      />
                      {activeMarker === parseFloat(point.attributes.longitude) ? (
                        <InfoWindow position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }} anchor={activeMarker} onCloseClick={() => setActiveMarker(null)}>
                          <>
                            <div>{point.attributes.our_location_icon.data.attributes.Title}</div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </>
                  ))
                }
              </MarkerClusterer>
            )}

            {digitalbridgePoints.length > 0 && (
              <MarkerClusterer
                gridSize={50}
                averageCenter
                enableRetinaIcons
                maxZoom={20}
                zoomOnClick
                options={{
                  styles: digitalbridgePointssclusterStyles
                }}
              >
                {(clusterer) =>
                  digitalbridgePoints.map((point) => (
                    <>
                      <Marker
                        key={parseFloat(point.attributes.latitude)}
                        position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() => handleMarkerClick(parseFloat(point.attributes.longitude))}
                        clusterer={clusterer}
                      />
                      {activeMarker === parseFloat(point.attributes.longitude) ? (
                        <InfoWindow position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }} anchor={activeMarker} onCloseClick={() => setActiveMarker(null)}>
                          <>
                            <div>{point.attributes.our_location_icon.data.attributes.Title}</div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </>
                  ))
                }
              </MarkerClusterer>
            )}



          </GoogleMap>

          <div class="img_info">
            <img src="/images/infomap_1.svg" alt="" />
          </div>
        </div>

      </div>
    </div>
  ) : (
    <></>
  );
}

export default Map;
