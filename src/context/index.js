import React, {createContext,useContext,useState,useEffect} from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [coor,setCoor] = useState({
        lat: "51.509865",
        lon: "-0.118092"
    })
    const [weather, setWeather] = useState({});
  
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coor.lat}&lon=${coor.lon}&appid=${process.env.REACT_APP_APIKEY}`;
  
    useEffect(() => { 
        async function fetchWeatherData () {
            try{
                const response = await fetch(url, {
                method: 'GET'
                })
                setWeather(await response.json());
            }  catch (e){
                console.log(e)
            }
        } 
        fetchWeatherData();
    }, [url]);
    
    return (
        <WeatherContext.Provider value={{weather,setCoor}}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherDetails = () => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}