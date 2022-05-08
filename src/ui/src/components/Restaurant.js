import * as React from 'react';
import { useState, useEffect } from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Restaurant() {
  const paperStyle={padding: '50px 20px', width:600,margin:"20px auto"}
  const [name, setName]=useState('')
  const [address, setAdress]=useState('')
  const [restaurants, setrestaurants]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const restaurant={name, address}
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
  .then(res=>res.json())
  .then((output)=>{
    setrestaurants(output);
  }
)
},[])

  return (
    <Container>
    <Paper elevation={3} style={paperStyle}>
    <h1 style={{color:"purple"}}><u> Add a Restaurant </u></h1>
    <form
      component="form"sx={{
        '& > :not(style)': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAdress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
      </form>
    </Paper>
    <h1>Restaurants</h1>
    <Paper elevation={3} style={paperStyle}>

    {restaurants.map(restaurant=>(
      <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={restaurant.id}>
      Id:{restaurant.id}<br/>
      Name:{restaurant.name}<br/>
      Address:{restaurant.address}<br/>
      </Paper>
    ))
    }
    </Paper>
    </Container>
  );
}
