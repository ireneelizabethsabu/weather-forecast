import React, { useState } from "react";
import { Navbar,FormControl,Button } from "react-bootstrap";
import { useWeatherinfo } from "../../hooks";

export const Search = () => {
  const [city,setCity] = useState('London');
  const {weather} = useWeatherinfo();
  const handleChange = (e) => {
    setCity(e.target.value);
  }
  const handleSubmit = (e) => {
    //console.log(weather);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Forecast</Navbar.Brand>                    
      <FormControl type="text" placeholder="Enter city" value={city} onChange={handleChange} className="mr-sm-2"/>
      <Button onClick={handleSubmit}>Search</Button>
    </Navbar>
  );
};
