import { useEffect, useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../config/api";
import InputUI from "../../components/ui/input/InputUI";
import ButtonUI from "../../components/ui/button/ButtonUI";
import { FaSearch } from "react-icons/fa";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";

const AutoCompleteNearedBranch = ({ location, setLocation }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!query.trim()) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(() => {
            fetchPlaces(query);
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);


    const fetchPlaces = async (input) => {
        if (!input) return;

        const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(
            input
        )}&types=geocode&key=${GOOGLE_MAPS_API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === "OK") {
                setSuggestions(data.predictions);
            } else {
                setSuggestions([]);
            }
        } catch (error) {
            console.error("Lỗi khi gọi API Google Places:", error);
            setSuggestions([]);
        }
    };


    const handleSelect = async (placeId, description) => {
        setLocation(description);
        setQuery(description);
        setSuggestions([]);

        const detailsUrl = `https://maps.gomaps.pro/maps/api/place/details/json?region=vn&place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

        try {
            const response = await fetch(detailsUrl);
            const data = await response.json();
            if (data.status === "OK") {
                console.log("Id địa điểm:", data.result);
                console.log("Chi tiết địa điểm:", data.result.formatted_address);
                console.log("Chi tiết tọa độ", data.result.geometry.location)
            }
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết địa điểm:", error);
        }
    };




    return (
        <div style={{ position: "relative", width: "100%" }}>
            <div className="d-flex ahihi">
                <InputUI
                    placeholder="Tên khu vực..."
                    className={styles.customInput}
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                        setQuery(e.target.value);
                    }}
                />

                <ButtonUI
                    variant="secondary"
                    className={styles.customButton}>
                    <FaSearch />
                </ButtonUI>

            </div>

            {suggestions.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        width: "90%",
                        background: "rgb(235, 209, 135)",
                        border: "1px solid #ccc",
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                        zIndex: 1000,
                    }}
                >
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                borderBottom: "1px solid #ddd",
                            }}
                            onClick={() => handleSelect(suggestion.place_id, suggestion.description)}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

AutoCompleteNearedBranch.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired,
};

export default AutoCompleteNearedBranch;
