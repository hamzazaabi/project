import React, { Component } from "react";
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Select,MenuItem,Button } from '@material-ui/core';
class Formulaire extends Component {
    render() {
        const  mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
           
          };
         
          
      return (
          
        <div >
        <h1 style={mystyle}>Formulaire</h1>
    <FormControl  >
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
    <br></br>
    <FormControl>
      <InputLabel htmlFor="my-input">Name</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">Your name.</FormHelperText>
    </FormControl>
    <br></br>
    <FormControl>
      <InputLabel htmlFor="my-input">Email</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">Your adreess email.</FormHelperText>
    </FormControl>

    <div>
    <br></br>
    <FormControl>  
    <br></br>
    <InputLabel htmlFor="my-input" >langue</InputLabel>
    <br></br>
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
<InputLabel htmlFor="my-input">langue</InputLabel>
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
</FormControl>
<InputLabel id="label">SEXE</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">HOMME</MenuItem>
  <MenuItem value="20">FEMME</MenuItem>
</Select>
</div>
<br></br>
<Button variant="contained" color="secondary">
  Secondary
</Button>
</div>
      );
    }
  }
  export default Formulaire;