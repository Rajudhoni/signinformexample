import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import signbg from './images/signbg.png';
import logo from './images/1.png';
import Forgotpass from './Forgotpass';
import {Switch , Route} from "react-router-dom";
import Signup from './Signup';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    paperStyle:{padding: 20, height: '80vh', width: 400, margin: '200px auto' },
    label: {fontSize: '16px', fontWeight: "bold"},
    gridItem: {  width: "100%"},
    margin: {margin: theme.spacing(2)},
    marginf: {margin: theme.spacing(1)},
    p_signtle: {fontSize: "38px", textAlign: "center", marginBottom: "20px", fontWeight: 500},
    p_signsubtitle: {fontSize: "16px", textAlign: "center", fontWeight: "normal", marginTop: "10px", marginBottom: "20"},
    submitbtn: {backgroundColor: "#FFAB08", textTransform: "capitalize", height: "56px", color: "white",  fontSize: "17px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "27px", paddingLeft: "27px"},
    logo: {width: "180px", position: "absolute", top: "40px", left:"40px",zIndex: 999 },
    grid2bg: {
         
        backgroundImage: `url(${signbg})`,
        height: "100vh",
        backgroundSize:  "cover",
        backgroundPosition : "center", 
        // padding: "40px",
        // display: "flex",
        // alignItems: "flex-end"
    },
    

    
  }));

const Signinpage = () => {
    const classes = useStyles();



    return (
      <div className={classes.root}>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.gridContainer}
            >

        <Grid item xs={6} md={6} lg={6} className={classes.grid2bg} >
                        <div>
                        <img src={logo} className={classes.logo}  />

                        </div>
                </Grid>
        <Switch>
            <Route exact path="/" component={Forgotpass} />
            <Route  path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </Switch>
                
                
            </Grid>

            </div>
       
    )
}

export default Signinpage







