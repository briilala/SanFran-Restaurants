import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Grid} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function Restaurant() {
  const paperStyleParent={height:300, width:800,margin:"20px 5px"}
  const paperStyle={height: 600, padding: '20px 20px 0px 20px', width:600,margin:"0px 0px"}
  const [name, setName]=useState('')
  const [address, setAdress]=useState('')
  const [locationDescription, setLocationDescription]=useState('')
  const [foodItems, setFoodItems]=useState('')
  const [latitude, setLatitude]=useState('')
  const [longitude, setLongitude]=useState('')
  const [restaurants, setrestaurants]=useState([])
  // const [showDetailClick, setShowDetailClick] = useState(null);
  // const showDetails = (params) => {
  //   setShowDetailClick(params);
  // }
  const columns = [
    {field: 'name', headerName: 'Name', width:200},
    {field: 'address', headerName: 'Address', width: 300},
    {field: 'locationDescription', headerName: 'Location Description', width:300},
    {field: 'foodItems', headerName: 'Food Items'},
    {field: 'latitude', headerName: 'Latitude'},
    {field: 'longitude', headerName: 'Longitude'},
    {field: 'location', headerName: 'Location'}]


  const [tableData, setTableData]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const restaurant={name, address, locationDescription, foodItems, latitude, longitude}
    console.log(restaurant)
    fetch("http://localhost:8080/restaurant/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(restaurant)
  }).then(()=>{
    console.log("New restaurnat added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/restaurant/getAll")
  .then((res)=>res.json())
  .then((output)=>setTableData(output));
}, [])

console.log(tableData);

  return (
    <div style={{ display: 'flex', height: 700, width: '100%' }}>

      <div style={{ display: 'flex', height: '100%', width: '70%', margin:"20px 5px"}}>

        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={100}
            //onCellClick={showDetails}
            />
            

        </div>
      </div>

      <div style={{ display: 'flex', height: '100%', width: '30%' }}>
        <div style={{ flexGrow: 1 }}>
          <Paper elevation={3} style={{height: '100%'}}>
            <h1 style={{color:"purple"}}><u> Add a Restaurant </u></h1>
              <Grid
                component="form"
                  sx={{'& > :not(style)': { m: 1, width: '25ch' },
                  }}
                noValidate
                autoComplete="off">

            <TextField required id="outlined-basic" label="Name" variant="outlined"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField id="outlined-required" label="Address" variant="outlined"
            value={address}
            onChange={(e)=>setAdress(e.target.value)}
            />
            <TextField required id="outlined-basic" label="Location Description" variant="outlined"
            value={locationDescription}
            onChange={(e)=>setLocationDescription(e.target.value)}
            />
            <TextField id="outlined-basic" label="Food Items" variant="outlined"
            value={foodItems}
            onChange={(e)=>setFoodItems(e.target.value)}
            />
            <TextField id="outlined-basic" label="Latitude" variant="outlined"
            value={latitude}
            onChange={(e)=>setLatitude(e.target.value)}
            />
            <TextField id="outlined-basic" label="Longitude" variant="outlined"
            value={longitude}
            onChange={(e)=>setLongitude(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>ADD</Button>
          </Grid>

        </Paper>
      </div>
      </div>
    </div>
)
}
