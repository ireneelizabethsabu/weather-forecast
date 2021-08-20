import React, { useState } from "react";
import { Navbar,FormControl} from "react-bootstrap";

const Search = () => {
  const [city,setCity] = useState('London');
  
  const handleChange = (e) => {
    setCity(e.target.value);
  }
  
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand>Forecast</Navbar.Brand>                    
      <FormControl type="text" placeholder="Enter city" value={city} onChange={handleChange} className="mr-sm-2"/>
      {/* <Button onClick={handleSubmit}>Search</Button> */}
    </Navbar>
  );
};

export default Search;