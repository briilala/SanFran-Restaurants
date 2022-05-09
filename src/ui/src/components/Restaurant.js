import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Grid} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function Restaurant() {
  const paperStyleParent={height:300, width:800,margin:"20px 5px"}
  const paperStyle={height: 600, padding: '20px 20px 0px 20px', width:600,margin:"0px 0px"}
  const detailStyle={whiteSpace: "pre-wrap", margin: "20px", textAlign:"left", color:"#d9bb5a"}
  const detailPaperStyle={}
  const [name, setName]=useState('')
  const [address, setAdress]=useState('')
  const [foodItems, setFoodItems]=useState('')
  const [restaurants, setRestaurants]=useState([])
  const [showDetailClick, setShowDetailClick] = useState(null);
  const showDetails = (params) => {
    setShowDetailClick(params);
  }
  const columns = [
    {field: 'name', headerName: 'Name', width:300},
    {field: 'address', headerName: 'Address', width: 300},
    {field: 'foodItems', headerName: 'Food Items', width: 300}]


  const [tableData, setTableData]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const restaurant={name, address, foodItems}
    fetch("http://localhost:8080/restaurant/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(restaurant)
  }).then(()=>{
  })
  window.location.reload(false);
}

useEffect(()=>{
  fetch("http://localhost:8080/restaurant/getAll")
  .then((res)=>res.json())
  .then((output)=>setTableData(output.reverse()));
}, [])

  return (

    <div style={{ display: 'flex', height: 700, width: '100%' }}>

      <div style={{ display: 'flex', height: '100%', width: '70%', margin:"20px 5px"}}>

        <div style={{ flexGrow: 1, flexDirection: "row-reverse"}}>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={100}
            onCellClick={showDetails}
            />
        </div>
      </div>

      <div style={{ display: 'flex', height: '100%', width: '30%' }}>
        <div style={{ flexGrow: 1 }}>

          <Paper elevation={3} style={{height: '50%'}}>
          <h1 style={{color:'#2E3B55'}}><u> Restaurant Details</u></h1>
          <h3 style = {{color:"black"}}>

          <div style={detailStyle}>
          <Paper elevation={1} style={detailStyle}>
          {showDetailClick &&
          `Name: ${showDetailClick.row.name}`}
          </Paper>
          </div>

          <div style={detailStyle}>
          <Paper elevation={1} style={detailStyle}>
          {showDetailClick &&
          `Address: ${showDetailClick.row.address}`}
          </Paper>
          </div>

          <div style={detailStyle}>
          <Paper elevation={1} style={detailStyle}>
          {showDetailClick &&
          `Food Items: ${showDetailClick.row.foodItems}`}</Paper>
          </div>

    {!showDetailClick && `Click on a restaurant`}
    </h3>
    </Paper>
    <Paper elevation={3} style={{height: '50%'}}>
            <h1 style={{color:'#2E3B55'}}><u> Add Restaurant </u></h1>
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

            <TextField id="outlined-basic" label="Food Items" variant="outlined"
            value={foodItems}
            onChange={(e)=>setFoodItems(e.target.value)}
            />

            <Button variant="contained" color="secondary" style={{background:"#d9bb5a", color:"#2E3B55", fontWeight:"bold"}} onClick={handleClick}>ADD</Button>
          </Grid>

        </Paper>
      </div>
      </div>
    </div>
)
}
