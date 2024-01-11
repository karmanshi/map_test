import MapComponent from "./MapComponent";
function App() {
  const data = [
    { id: 1, region: "US", data: 290, lat: 37.7749, lng: -122.4194 },
    { id: 2, region: "US", data: 490, lat: 34.0522, lng: -118.2437 },
    { id: 3, region: "AT", data: 790, lat: 35.0522, lng: -118.2437 },
    { id: 4, region: "SE", data: 590, lat: 36.0522, lng: -118.2437 },
    { id: 5, region: "AT", data: 290, lat: 37.0522, lng: -118.2437 },
    { id: 6, region: "SE", data: 390, lat: 38.0522, lng: -118.2437 },
    { id: 7, region: "SE", data: 590, lat: 39.0522, lng: -118.2437 },
    { id: 8, region: "AT", data: 290, lat: 40.0522, lng: -118.2437 },
    { id: 9, region: "SE", data: 390, lat: 41.0522, lng: -118.2437 },
    { id: 10, region: "SE", data: 590, lat: 42.0522, lng: -118.2437 },
    { id: 11, region: "AT", data: 290, lat: 43.0522, lng: -118.2437 },
    { id: 12, region: "SE", data: 390, lat: 44.0522, lng: -118.2437 },
  ];
  return <MapComponent data={data} />;
}

export default App;
