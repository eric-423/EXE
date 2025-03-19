import { useState, useEffect } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../config/api";



export const AutoCompleteLocation = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        if (!query) {
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
        setQuery(description);
        setSuggestions([]);

        const detailsUrl = `https://maps.gomaps.pro/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

        try {
            const response = await fetch(detailsUrl);
            const data = await response.json();
            if (data.status === "OK") {
                console.log("Chi tiết địa điểm:", data.result);
            }
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết địa điểm:", error);
        }
    };

    return (
        <div style={{ position: "relative", width: "300px" }}>
            <input
                type="text"
                value={query}
                placeholder="Nhập địa chỉ..."
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                }}
            />
            {suggestions.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        width: "100%",
                        background: "white",
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
