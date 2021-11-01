import * as React from 'react';
import {useState} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [location, setLocation] = useState('')

  // const handleChange = (event) => {
  //   setLocation(event.target.value);
  // };

  return (
    <div >
      <h1 className='title'>Select Route</h1>
      <Box className='box' sx={{ maxWidth: 280 }}>
      <FormControl fullWidth>
        
        <InputLabel className='route' id="demo-simple-select-label">Select Route</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Age"
          onChange={e => setLocation(e.target.value)}
        >
          <MenuItem value='BOS2_3AM'>BOS2_3@AM</MenuItem>
          <MenuItem value='BOS2_3@PM'>BOS2_3@PM</MenuItem>
          <MenuItem value='BOS2_5@AM'>BOS2_5@AM</MenuItem>
          <MenuItem value='BOS2_6@AM'>BOS2_6@AM</MenuItem>
          <MenuItem value='BOS3_1@AM'>BOS3_1@AM</MenuItem>
          <MenuItem value='BOS2_5@PM'>BOS2_5@PM</MenuItem>
          <MenuItem value='SEA1_2@AM'>SEA1_2@AM</MenuItem>
          <MenuItem value='SEA1_1@AM'>SEA1_1@AM</MenuItem>
          <MenuItem value='SEA1_2@PM'>SEA1_2@PM</MenuItem>
          <MenuItem value='SEA1_1@PM'>SEA1_1@PM</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    </div>
    
  );
}