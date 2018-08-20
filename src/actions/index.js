import axios from 'axios';

const API_KEY = '332c8a8130133170bd32f622d8374bad';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;
const COUNTRY_CODE = 'GB';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}