import { useEffect, useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../config/api";
import PropTypes from "prop-types";

const AutoCompleteNearedBranch = ({ location, setLocation, setUserAddress }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!query.trim()) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(() => {
            fetchPlaces(query);
        }, 300);

        return () => clearTimeout(timeout);
    }, [query]);


    const fetchPlaces = async (input) => {
        if (!input) return;

        const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?language=vi&input=${encodeURIComponent(
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
        setUserAddress(description); // Thêm dòng này để cập nhật userAddress khi chọn địa chỉ

        const detailsUrl = `https://maps.gomaps.pro/maps/api/place/details/json?language=vi&place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

        try {
            const response = await fetch(detailsUrl);
            const data = await response.json();
            if (data.status === "OK") {
                const formattedAddress = data.result.formatted_address;
                setUserAddress(formattedAddress); // Cập nhật userAddress với địa chỉ đầy đủ
            }
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết địa điểm:", error);
        }
    };

    return (
        <div style={{ position: "relative", width: "100%" }}>

            <div className="d-flex ahihi">

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tên khu vực..."
                    value={location}
                    style={{
                        backgroundColor: "transparent",
                        border: "1px solid black",
                        color: "black",
                    }}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        setLocation(newValue);
                        setQuery(newValue);
                        setUserAddress(newValue);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && suggestions.length > 0) {
                            handleSelect(suggestions[0].place_id, suggestions[0].description);
                        }
                    }}
                />

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
    setUserAddress: PropTypes.func.isRequired
};

export default AutoCompleteNearedBranch;
