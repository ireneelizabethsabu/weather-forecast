import React, { useState } from "react";
import { Navbar, Col, FormControl, Button } from "react-bootstrap";
import { getCitySuggestion, getCoordinates } from "../../api/Api";
import Autocomplete from "react-autocomplete";
import './Search.css'
import logo from '../../assets/logo.png'

const Search = ({ setCoor,setLocation,setLoading }) => {
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

  const handleSearch = () => {
    if(city.length ){
      setOpen(false)
      getCoordinates(city).then(res => {
          const data = res.data.features[0].properties;
          setCity('')
          setLocation({
            city: data.city || data.formatted.split(',')[0],
            country: data.state || data.country || data.formatted.split(',')[1],
            statecode: data.state_code
          })
          setCoor({
            lat: parseInt(data.lat),
            lon: parseInt(data.lon)
          })
          setLoading(true)
        })
    }
  }

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
      setLoading(true)
  };

  const handleCancel = () => {
    setOpen(false)
    setCity('')
  }

  const inputFunc = (props) => {
    return <FormControl {...props} required/>
  }

  const renderMenuFunc = (items, value, style) => {
    return <div style={{ ...style, ...menustyle }} children={items} />
  }

  const menustyle = {
    borderRadius: "0px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    background: "rgba(223, 230, 233)",
    position: "fixed",
    overflow: "auto",
    maxHeight: "50%",
    marginTop: '8px'
  };

  return (
    <Navbar expand="sm" className="px-5 search-bar fixed-top" >
      <Navbar.Brand><img src={logo} alt="logo" width="24"/> Forecast</Navbar.Brand>
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
                background: isHighlighted ? "#f2f2f2" : '#dfe6e99c',
                color: '#015691',
                padding: "0.2rem 0.8rem",
              }}
            >
              <span>{item.city || item.name || item.state}</span>
              <br />
              <span className="font_xs "  style={{color: '#015691'}}>
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
      <Button variant="outline-primary" className="search-btn px-4 mr-2" onClick={() => handleSearch()}>Search</Button>
      <Button variant="outline-primary" className="search-btn px-4 " onClick={handleCancel}>Cancel</Button>
      
    </Navbar>
  );
};

export default Search;
