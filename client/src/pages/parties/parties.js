import React, { useState } from 'react';
import { makeStyles, Grid, TextField, Typography, Button, Checkbox } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  textField: {
    maxWidth: "400px",
    display: "block"
  },
  span: {position: "relative",
        top: "10px",
        left: "45px"},
  Typography: {marginTop: "0.7em"}
}));

export default function Parties() {
  const classes = useStyles();
  const [numExtraTenants, setNumExtraTenants] = useState(0);
  const [state, setState] = useState({phone: false, email: false})

  const createExtraTenants = () => {
      const fields = [];
      for (let i = 2; i < numExtraTenants+2; i++) {
        fields.push(
          <Grid container xs={12} justify="flex-end">
            <Grid item xs={12} sm={5}>
              <TextField
                  fullWidth={true}
                  margin="none"
                  className={classes.textField}
                  label={`Legal Name of Tenant ${i}`}
                />
            </Grid>
          </Grid>
        );
      }
      return fields
    }
  const toggleCheckbox = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item xs={9}>
      <Typography variant="h4" gutterBottom> Parties </Typography>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined">PREVIEW LEASE</Button>
      </Grid>

      {/*Legal names block */}

      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom className={classes.Typography}> Legal Names </Typography>
      </Grid>
      <Grid item xs={5}>
        <TextField
          fullWidth={true}
          margin="none"
          className={classes.textField}
          label={"Legal Name of Landlord"}
        />
      </Grid>
      <Grid item xs={2}>
        <span className={classes.span}> and </span>
      </Grid>
      <Grid item xs={5}>
      <TextField
          fullWidth={true}
          margin="none"
          className={classes.textField}
          label={"Legal Name of Tenant"}
        />
      </Grid>
      <Grid container justify="flex-end" alignItems="flex-end">
        {createExtraTenants()}
        <Grid item xs={12} sm={5}>
          <Button variant="outlined" color="primary" size="small"   
          onClick={() => setNumExtraTenants(numExtraTenants + 1)}>
            <AddIcon />
          </Button>
          <span> Add Tenant </span>
        </Grid>
      </Grid>

      {/* Landlord contact info block */}

      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom className={classes.Typography}>
           Landlord contact information
        </Typography>
      </Grid>
      <Grid item xs={8}>
        < TextField
          fullWidth={true}           
          margin="none"
          className={classes.textField}
          label={"Address"}/>
      </Grid>
      <Grid item xs={3}>
      < TextField     
          fullWidth={true}      
          margin="none"
          className={classes.textField}
          label={"Unit"}/>
      </Grid>
      <Grid item xs={7}>
        < TextField
          fullWidth={true}           
          margin="none"
          className={classes.textField}
          label={"City/Town"}/>
      </Grid>
      <Grid item xs={4}>
        < TextField
          fullWidth={true}           
          margin="none"
          className={classes.textField}
          label={"Postal Code"}/>
      </Grid>
      <Grid item xs={4}>
        < TextField
          fullWidth={true}           
          margin="none"
          className={classes.textField}
          label={"Phone Number"}/>
      </Grid>
      <Grid item xs={7}>
        <Checkbox checked={state.phone}  color={"primary"} 
        onChange={toggleCheckbox('phone')}/>
        <span> The tenant can contact you by phone </span>
      </Grid>
      <Grid item xs={4}>
        < TextField
          fullWidth={true}           
          margin="none"
          className={classes.textField}
          label={"Email"}/>
      </Grid>
      <Grid item xs={7}>
        <Checkbox checked={state.email}  color={"primary"}
        onChange={toggleCheckbox('email')}/>
        <span> The tenant can contact you by email </span>
      </Grid>

      {/* These buttons are non functional currently. */}
      <Grid item xs={7}>
        <Button variant="outlined" color="primary" size="small">
            <AddIcon />
        </Button>
        <span> Add Building Manager </span>
      </Grid>
      <Grid item xs={4}>
      <Button variant="outlined" color="primary" size="small">
            <AddIcon />
        </Button>
        <span> Add Landlord </span>
      </Grid>

      {/* Tenant emergency contact block */}

      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom className={classes.Typography}>
          Tenant Emergency Contact 
        </Typography>
      </Grid>

      <Grid item xs={5}>
        < TextField
          fullWidth={true}           
          className={classes.textField}
          label={"Name of Emergency Contact"}/>
      </Grid>
      <Grid item xs={1}/>
      <Grid item xs={5}>
        < TextField
          fullWidth={true}         
          className={classes.textField}
          label={"Relationship to Tenant"}/>
      </Grid>
      <Grid item xs={7}>
        < TextField
          fullWidth={true}           
          className={classes.textField}
          label={"Email Address"}/>
      </Grid>
      <Grid item xs={5}>
        < TextField
          fullWidth={true}           
          className={classes.textField}
          label={"Phone Number"}/>
      </Grid>
    </Grid>
  );
}
