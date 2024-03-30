import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/all";

export const getRestCountriesApi = async () => {
    try {
        const response = await axios.get(baseURL);
        return response;
    } catch (error) {
        console.error("Error fetching countries data:", error);
    }
}
