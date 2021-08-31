import axios from "axios";

export const getWeather = (lat,lon,unit) => {
    return axios.get(process.env.REACT_APP_WEATHER_URL,{
        params: {
          lat: lat,
          lon: lon,
          units: unit,
          appid: process.env.REACT_APP_APIKEY
        }
    });
}

export const getCitySuggestion = async (text) => {
    return await axios.get(process.env.REACT_APP_AUTOCOMPLETE_URL,{
        params: {
            text: text,
            apiKey: process.env.REACT_APP_AUTOCOMPLETE_APIKEY,
            lang: 'en',
            limit: 4
        }
    });
}