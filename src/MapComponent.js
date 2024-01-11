import React from "react";
import Map, { Marker, Popup } from "react-map-gl";

const MapComponent = ({ data }) => {
  const [selectedPoint, setSelectedPoint] = React.useState(null);

  const getTransparency = (value) => {
    if (value <= 100) {
      return 0.1;
    } else if (value <= 200) {
      return 0.2;
    } else if (value <= 300) {
      return 0.3;
    } else if (value <= 400) {
      return 0.4;
    } else if (value <= 500) {
      return 0.5;
    } else if (value <= 600) {
      return 0.6;
    } else {
      return 0.8;
    }
  };
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_API_KEY}
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/standard"
    >
      {data.map((point) => (
        <Marker
          key={point.id}
          latitude={point.lat}
          longitude={point.lng}
          closeOnClick={true}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedPoint(point);
          }}
        >
          <div
            style={{
              height: "25px",
              width: "25px",
              backgroundColor: "blue",
              borderRadius: "50%",
              
              opacity: getTransparency(point.data),
            }}
          ></div>
        </Marker>
      ))}
      {selectedPoint && (
        <Popup
          anchor="bottom"
          latitude={selectedPoint.lat}
          longitude={selectedPoint.lng}
          onClose={() => setSelectedPoint(null)}
        >
          <div>
            <h2>ID: {selectedPoint.id}</h2>
            <p>Region: {selectedPoint.region}</p>
            <p>Data: {selectedPoint.data}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default MapComponent;
