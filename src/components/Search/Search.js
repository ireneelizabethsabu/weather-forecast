import React, { useState } from "react";
import { Navbar, Col, FormControl, Badge } from "react-bootstrap";
import { getCitySuggestion } from "../../api/Api";
import Autocomplete from "react-autocomplete";
import './Search.css'

const Search = ({ setCoor,setLocation }) => {
  const [open, setOpen] = useState(false)
  const [city, setCity] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
    if (city.length > 1) {
      getCitySuggestion(city)
        .then((res) => {
          setOptions([]);
          const suggestions = res.data.features.map((obj) => obj.properties);
          if (suggestions.length === 0) {
            setOpen(false)
          } else {
            setOptions(suggestions);
            setOpen(true)
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = (search) => {
    setCity('');
    setOpen(false)
    setLocation({
      city: search.split(',')[0],
      country: search.split(',')[1],
      statecode: search.split(',')[2]
    })
    setCoor({
      lat: parseInt(search.split(',')[3]),
      lon: parseInt(search.split(',')[4])
    })
  };

  const inputFunc = (props) => {
    return <FormControl {...props}/>
  }

  const renderMenuFunc = (items, value, style) => {
    return <div style={{ ...style, ...menustyle }} children={items}/>
  }

  const menustyle = {
    borderRadius: "0px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "0.5rem 0",
    position: "fixed",
    overflow: "auto",
    maxHeight: "50%",
    marginTop: '8px'
  };

  return (
    <Navbar bg="light" expand="sm" className="px-5">
      <Navbar.Brand>Forecast</Navbar.Brand>
      <Col>
        <Autocomplete
          items={options}
          getItemValue={(item) => (`${item.city || item.name || item.state}, ${item.country}, ${item.state_code || item.country_code}, ${item.lat}, ${item.lon}`)}
          onChange={handleChange}
          value={city}
          renderItem={(item, isHighlighted) => (
            <div
              key={item.place_id}
              style={{
                background: isHighlighted ? "lightgrey" : "white",
                padding: "0.2rem 0.8rem",
              }}
            >
              <span>{item.city || item.name || item.state}</span>
              <br />
              <span className="font_xs">
                {item.state ? `${item.state}, ` : " "}
                {item.country}
              </span>
            </div>
          )}
          onSelect={handleSubmit}
          inputProps={{placeholder: 'Enter city name'}}
          renderInput={inputFunc}
          wrapperStyle={{display: 'block'}}
          renderMenu={renderMenuFunc}
          open={open}
        />
      </Col>
      <Badge variant="dark">Search</Badge>
    </Navbar>
  );
};

export default Search;
