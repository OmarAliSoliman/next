import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState, useMemo } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerF,
  InfoWindow,
  MarkerClusterer,
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
    textColor: "black",
    url: "/images/bridge.svg",
    height: 50,
    width: 50,
  },
];
const hoardingsPointsclusterStyles = [
  {
    textColor: "black",
    url: "/images/hoardings_icon2.svg",
    height: 50,
    width: 50,
  },
];
const lamppostsPointsclusterStyles = [
  {
    textColor: "black",
    url: "/images/lampposts_icon.svg",
    height: 50,
    width: 50,
  },
];

const digitalbridgePointssclusterStyles = [
  {
    textColor: "black",
    url: "/images/lampposts_icon.svg",
    height: 50,
    width: 50,
  },
];

const digitalbridgePointssNullclusterStyles = [
  {
    textColor: "black",
    url: "/images/default.svg",
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
  }, []);

  const retreveData = () => {
    axios.get(`${location_points}`).then((res) => {
      // if (res.status === 200) {
      res.data.data.map((item, index) => {
        if (item.attributes.our_location_icon.data === null) {
          // bridgePointsNull.push(item);
          setBridgePointsNull([...bridgePointsNull, item]);
        } else {
          if (
            item.attributes.our_location_icon.data.attributes.Title == "Bridge"
          ) {
            // bridgePoints.push(item);
            setBridgePoints((prev)=>[...prev, item]);
            // console.log("item")
          }
          if (
            item.attributes.our_location_icon.data.attributes.Title ==
            "hoardings"
          ) {
            // hoardingsPoints.push(item);
            setHoardingsPoints((prev)=>[...prev, item]);
          }
          if (
            item.attributes.our_location_icon.data.attributes.Title ==
            "lampposts"
          ) {
            // lamppostsPoints.push(item);
            setLamppostsPoints((prev)=>[...prev, item]);
          }
          if (
            item.attributes.our_location_icon.data.attributes.Title ==
            "Digital Bridge"
          ) {
            // digitalbridgePoints.push(item);
            setDigitalbridgePoints((prev)=>[...prev, item]);
          }
        }
      });
      // }
    });
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD92D06n8JxOos1Zkmgyj0Y_YUbpR9cyy4",
  });

  const handleMarkerClick = (item) => {
    // console.log(item);
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
              streetViewControl: false,
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
                  styles: bridgePointsclusterStyles,
                }}
              >
                {(clusterer) =>
                  bridgePoints.map((point, index) => (
                    <React.Fragment key={index}>
                      <Marker
                        key={parseFloat(point.attributes.latitude)}
                        position={{
                          lat: parseFloat(point.attributes.latitude),
                          lng: parseFloat(point.attributes.longitude),
                        }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() =>
                          handleMarkerClick(
                            parseFloat(point.attributes.longitude)
                          )
                        }
                        clusterer={clusterer}
                      />
                      {activeMarker ===
                      parseFloat(point.attributes.longitude) ? (
                        <InfoWindow
                          position={{
                            lat: parseFloat(point.attributes.latitude),
                            lng: parseFloat(point.attributes.longitude),
                          }}
                          anchor={activeMarker}
                          onCloseClick={() => setActiveMarker(null)}
                        >
                          <>
                            <div>
                              {
                                point.attributes.our_location_icon.data
                                  .attributes.Title
                              }
                            </div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </React.Fragment>
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
                  styles: hoardingsPointsclusterStyles,
                }}
              >
                {(clusterer) =>
                  hoardingsPoints.map((point, index) => (
                    <React.Fragment key={index}>
                      <Marker
                        
                        position={{
                          lat: parseFloat(point.attributes.latitude),
                          lng: parseFloat(point.attributes.longitude),
                        }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() =>
                          handleMarkerClick(
                            parseFloat(point.attributes.longitude)
                          )
                        }
                        clusterer={clusterer}
                      />
                      {activeMarker ===
                      parseFloat(point.attributes.longitude) ? (
                        <InfoWindow
                          position={{
                            lat: parseFloat(point.attributes.latitude),
                            lng: parseFloat(point.attributes.longitude),
                          }}
                          anchor={activeMarker}
                          onCloseClick={() => setActiveMarker(null)}
                        >
                          <>
                            <div>
                              {
                                point.attributes.our_location_icon.data
                                  .attributes.Title
                              }
                            </div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </React.Fragment>
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
                  styles: lamppostsPointsclusterStyles,
                }}
              >
                {(clusterer) =>
                  lamppostsPoints.map((point, index) => (
                    <React.Fragment key={index}>
                      <Marker
                        
                        position={{
                          lat: parseFloat(point.attributes.latitude),
                          lng: parseFloat(point.attributes.longitude),
                        }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() =>
                          handleMarkerClick(
                            parseFloat(point.attributes.longitude)
                          )
                        }
                        clusterer={clusterer}
                      />
                      {activeMarker ===
                      parseFloat(point.attributes.longitude) ? (
                        <InfoWindow
                          position={{
                            lat: parseFloat(point.attributes.latitude),
                            lng: parseFloat(point.attributes.longitude),
                          }}
                          anchor={activeMarker}
                          onCloseClick={() => setActiveMarker(null)}
                        >
                          <>
                            <div>
                              {
                                point.attributes.our_location_icon.data
                                  .attributes.Title
                              }
                            </div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </React.Fragment>
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
                  styles: digitalbridgePointssclusterStyles,
                }}
              >
                {(clusterer) =>
                  digitalbridgePoints.map((point, index) => (
                    <React.Fragment key={index}>
                      <Marker
                        
                        position={{
                          lat: parseFloat(point.attributes.latitude),
                          lng: parseFloat(point.attributes.longitude),
                        }}
                        icon={{
                          url: `${bublic_url}${point.attributes.our_location_icon.data.attributes.Icon.data.attributes.url}`,
                          scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() =>
                          handleMarkerClick(
                            parseFloat(point.attributes.longitude)
                          )
                        }
                        clusterer={clusterer}
                      />
                      {activeMarker ===
                      parseFloat(point.attributes.longitude) ? (
                        <InfoWindow
                          position={{
                            lat: parseFloat(point.attributes.latitude),
                            lng: parseFloat(point.attributes.longitude),
                          }}
                          anchor={activeMarker}
                          onCloseClick={() => setActiveMarker(null)}
                        >
                          <>
                            <div>
                              {
                                point.attributes.our_location_icon.data
                                  .attributes.Title
                              }
                            </div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </React.Fragment>
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
                  styles: digitalbridgePointssNullclusterStyles,
                }}
              >
                {(clusterer) =>
                  bridgePointsNull.map((point, index) => (
                    <React.Fragment key={index}>
                      <Marker
                        
                        position={{
                          lat: parseFloat(point.attributes.latitude),
                          lng: parseFloat(point.attributes.longitude),
                        }}
                        icon={{
                          url: `/images/default.svg`,
                          scaledSize: new window.google.maps.Size(30, 30),
                        }}
                        onClick={() =>
                          handleMarkerClick(
                            parseFloat(point.attributes.longitude)
                          )
                        }
                        clusterer={clusterer}
                      />
                      {activeMarker ===
                      parseFloat(point.attributes.longitude) ? (
                        <InfoWindow
                          position={{
                            lat: parseFloat(point.attributes.latitude),
                            lng: parseFloat(point.attributes.longitude),
                          }}
                          anchor={activeMarker}
                          onCloseClick={() => setActiveMarker(null)}
                        >
                          <>
                            <div>title</div>
                            {/* <p> {point.phone} </p> */}
                          </>
                        </InfoWindow>
                      ) : null}
                    </React.Fragment>
                  ))
                }
              </MarkerClusterer>
            )}
          </GoogleMap>

          <div className="img_info">
            <img src="/images/infomap_3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Map;
