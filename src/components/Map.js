import "./Map.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2xhZGc5MiIsImEiOiJjbGFjazVqNmIwYWpnM29xdGRyeDZvdTZkIn0.Z1V3YqlfsYN-de5OVtvmQw";

function Map() {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [14.046695644432686, 42.011543773189715],
        zoom: 14,
      });
      setMap(map);
    }
  }, [ref, map]);
  return (
    <div className="Map" id="mappa">
      <div className="map-container" ref={ref} />;
    </div>
  );
}

export default Map;
