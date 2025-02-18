import { useState, useEffect } from "react";
import { getCities, getDistricts } from "../utils/commonAPI";

const useSelectLocation = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      if (cities.length === 0) {
        const response = await getCities();
        setCities(response.data.data);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (city?.id) {
        const response = await getDistricts(city.id);
        setDistricts(response.data.data);
      }
    };
    fetchDistricts();
  }, [city]);

  const onSelectCity = (cityId) => {
    const selectedCity = cities.find((city) => city.id === cityId);
    setCity(selectedCity);
  };

  const onSelectDistrict = (districtId) => {
    const selectedDistrict = districts.find(
      (district) => district.id === districtId
    );
    setDistrict(selectedDistrict);
  };

  return {
    cities,
    city,
    districts,
    district,
    onSelectCity,
    onSelectDistrict,
  };
};

export default useSelectLocation;
