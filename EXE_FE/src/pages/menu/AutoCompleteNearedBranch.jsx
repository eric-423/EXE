import { useEffect, useState } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../config/api";
import InputUI from "../../components/ui/input/InputUI";
import ButtonUI from "../../components/ui/button/ButtonUI";
import { FaSearch } from "react-icons/fa";
import styles from "./Menu.module.css";
import PropTypes from "prop-types";
import { BASE_URL } from './../../config/api';

const AutoCompleteNearedBranch = ({ location, setLocation, setBranches, branches }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [destination, setDestination] = useState('');

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

        const detailsUrl = `https://maps.gomaps.pro/maps/api/place/details/json?language=vi&place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

        try {
            const response = await fetch(detailsUrl);
            const data = await response.json();
            if (data.status === "OK") {
                setDestination(data.result.formatted_address + ", Việt Nam")
            }
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết địa điểm:", error);
        }
    };

    const fetchBranhNear = async () => {
        try {
            const response = await fetch(`${BASE_URL}/branches/distance?destination=${destination}`);
            const data = await response.json();
            if (branches.length > 0) {
                setBranches(data.data)
            }
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết địa điểm:", error);
        }
    }

    useEffect(() => {
        fetchBranhNear()
    }, [destination])



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
                    onClick={() => {
                        fetchBranhNear()
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && suggestions.length > 0) {
                            handleSelect(suggestions[0].place_id, suggestions[0].description);
                        }
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
    setBranches: PropTypes.func.isRequired,
    branches: PropTypes.array.isRequired,
};

export default AutoCompleteNearedBranch;
