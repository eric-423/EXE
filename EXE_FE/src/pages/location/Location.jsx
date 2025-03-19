import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AutoCompleteLocation } from "./AutoCompleteLocation";
import { GOOGLE_MAPS_API_KEY } from "../../config/api";
const Location = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [addressCoords, setAddressCoords] = useState(null);

  useEffect(() => {
    // Lấy vị trí hiện tại
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(position)
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },

      );
    }

  }, []);

  useEffect(() => {
    if (!currentLocation) return;

    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.gomaps.pro/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    };

    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        const map = new window.google.maps.Map(mapElement, {
          center: currentLocation,
          zoom: 13,
        });
        // || { lat: 10.8230989, lng: 106.6296638 }
        new window.google.maps.Marker({
          position: currentLocation,
          map: map,
          title: "Vị trí của bạn"
        });
      }
    };

    loadGoogleMaps();
  }, [currentLocation]);



  // tìm vj trí

  // Utility function
  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`
      );

      const data = await response.json();

      if (data.status === 'OK') {
        return data.results[0].geometry.location;
      }
      throw new Error(data.error_message || 'Geocoding failed');
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  };


  useEffect(() => {
    const fetchCoords = async () => {
      const coords = await geocodeAddress('1600 Amphitheatre Parkway, Mountain View, CA');
      if (coords) setAddressCoords(coords);
    };
    fetchCoords();
  }, []);

  const handleSelect = (place) => {
    console.log("Địa điểm đã chọn:", place);
  };


  return (
    <section className="section mt-5 pb-5">
      <Container>
        <Row>
          <Col md={12} className="text-center pb-5">
            <h2 className="mb-5">Vị trí của chúng tôi</h2>
            <div
              id="map"
              style={{ height: "40rem", width: "100%" }}
            ></div>

            <div style={{ padding: "20px" }}>
              <h2>Google Places Autocomplete API</h2>
              <AutoCompleteLocation onSelect={handleSelect} />
            </div>


          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;
