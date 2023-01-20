import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// googleMap - It allows you to render any React component on the Google Map.
// LoadScript - Loads the Google Maps API script.
// A marker identifies a location on a map.

const MapContainer = () => {
  const item = {
    name: "Location 1",
    location: {
      // lat: 40.60785,
      // lng: 10.96899,
      lat: 6.465422,
      lng: 3.406448,
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    // lat: 40.60785,
    // lng: 20.96899,
    lat: 6.465422,
    lng: 3.406448,
  };

  return (
    <div className="aboutUsElement">
      <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker key={item.name} position={item.location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default MapContainer;
