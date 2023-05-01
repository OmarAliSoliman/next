import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState, useMemo } from "react";

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


const digitalbridgePointssNullclusterStyles = [
  {
    textColor: 'black',
    url: '/images/default.svg',
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

  // --------------------------------------

  const [bridgePointsNull, setBridgePointsNull] = useState([]);

  useEffect(() => {
    retreveData();
  }, [bridgePoints, hoardingsPoints, lamppostsPoints, digitalbridgePoints, bridgePointsNull])


  const retreveData = () => {
    axios.get(`${location_points}`).then((res) => {
      if (res.status === 200) {
        res.data.data.map((item, index) => {
          if (item.attributes.our_location_icon.data === null) {
            bridgePointsNull.push(item)
          } else {
            if (item.attributes.our_location_icon.data.attributes.Title == "Bridge") {
              bridgePoints.push(item);
            }
            if (item.attributes.our_location_icon.data.attributes.Title == "hoardings") {
              hoardingsPoints.push(item);
            }
            if (item.attributes.our_location_icon.data.attributes.Title == "lampposts") {
              lamppostsPoints.push(item);
            }
            if (item.attributes.our_location_icon.data.attributes.Title == "Digital Bridge") {
              digitalbridgePoints.push(item);
            }
            // const bridgePoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "Bridge")
            // bridgePoints.map((item) => {
            //   item.attributes.latitude = parseFloat(item.attributes.latitude);
            // })
            // setBridgePoints(bridgePoints);


            // const hoardingsPoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "hoardings")
            // bridgePoints.map((item) => {
            //   item.attributes.latitude = parseFloat(item.attributes.latitude);
            // })
            // setHoardingsPoints(hoardingsPoints);


            // const lamppostsPoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "lampposts")
            // console.log(lamppostsPoints.length)
            // bridgePoints.map((item) => {
            //   item.attributes.latitude = parseFloat(item.attributes.latitude);
            // })
            // setLamppostsPoints(lamppostsPoints);

            // const digitalbridgePoints = res.data.data.filter((item) => item.attributes.our_location_icon.data.attributes.Title == "Digital Bridge")
            // console.log(lamppostsPoints.length)
            // bridgePoints.map((item) => {
            //   item.attributes.latitude = parseFloat(item.attributes.latitude);
            // })
            // setDigitalbridgePoints(digitalbridgePoints);
          }
        })

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


            {bridgePointsNull.length > 0 && (
              <MarkerClusterer
                gridSize={50}
                averageCenter
                enableRetinaIcons
                maxZoom={20}
                zoomOnClick
                options={{
                  styles: digitalbridgePointssNullclusterStyles
                }}
              >
                {(clusterer) =>
                  bridgePointsNull.map((point) => (
                    <>
                      <Marker
                        key={parseFloat(point.attributes.latitude)}
                        position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }}
                        icon={{
                          url: `/images/default.svg`,
                          scaledSize: new window.google.maps.Size(30, 30),
                        }}
                        onClick={() => handleMarkerClick(parseFloat(point.attributes.longitude))}
                        clusterer={clusterer}
                      />
                      {activeMarker === parseFloat(point.attributes.longitude) ? (
                        <InfoWindow position={{ lat: parseFloat(point.attributes.latitude), lng: parseFloat(point.attributes.longitude) }} anchor={activeMarker} onCloseClick={() => setActiveMarker(null)}>
                          <>
                            <div>title</div>
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
