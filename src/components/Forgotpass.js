import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Recaptcha from 'react-recaptcha';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    
    paperStyle:{padding: 20, height: '80vh', width: 400, margin: '150px auto' },
    label: {fontSize: '16px', fontWeight: "bold"},
    gridItem: {  width: "100%"},
    margin: {margin: theme.spacing(2)},
    marginf: {margin: theme.spacing(1)},
    p_signtle: {fontSize: "38px", textAlign: "center", marginBottom: "20px", fontWeight: 500},
    p_signsubtitle: {fontSize: "16px", textAlign: "center", fontWeight: "normal", marginTop: "10px", marginBottom: "20"},
    submitbtn: {backgroundColor: "#FFAB08", textTransform: "capitalize", height: "56px", color: "white",  fontSize: "17px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "27px", paddingLeft: "27px"},
    logo: {width: "180px", position: "absolute", top: "40px", left:"40px",zIndex: 999 },
    sign_link: {color: "#8F8F8F", textDecoration: "underline", fontSize: "16px", fontWeight: 500, }

    
  }));




const Forgotpass = () => {
    const classes = useStyles();
    const [verified, setVerified] = useState(false);



    const recaptchaLoaded = () => {
        console.log("Captacha loaded successfully")
}
const verifyCallback = (response) => {
        if(response){
                setVerified(true);
        }else{
                alert("please verify before sumbit");
        }
}
const handleVerify = () => {
        if(verified){
                alert("you have successfully verified");
        }else{
                alert("please verify that you are a human!")
        }
}
    return (
        


        <Grid item  xs={6} md={6} lg={6} >
                
                
                        
        <Paper elevation={0} className={classes.paperStyle}>
               <Grid item 
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                >
                        <Grid item xs={12}  className={classes.gridItem}>
                        <div style={{display: "block"}}>
                                <p className={classes.p_signtle}>Account recovery</p>
                                <p className={classes.p_signsubtitle}>Start your 7-day free trial. No strings attached.</p>
                        </div>
                        </Grid>
                        <div className={classes.margin} />
                                <Grid item xs={12} className={classes.gridItem}>
                                <label className={classes.label}>Email: </label>
                                        <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                             
                                                placeholder="*Email or Phone Number*"
                                                fullWidth
                                                required
                                                size="small"
                                                
                                                
                                         />
                                         </Grid>
                                        <Grid item container spacing={1}  className={classes.gridItem}>
                                        <Grid item xs={9}>
                                         <label className={classes.label}>Domain: </label>
                                        <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                             
                                                placeholder="*Domain*"
                                                fullWidth
                                                required
                                                size="small"
                                                
                                                
                                         /></Grid>
                                         <Grid item xs={2} align="center" style={{marginTop: "20px"}}>
                                                        <p className={classes.label}>ecorfy.com</p>
                                         </Grid>
                                         </Grid>
                                         <Grid item xs={12} className={classes.gridItem}>
                                         <Recaptcha
                                                sitekey="6LeK6WYaAAAAABPwqG5Ty_hNpttK2hZ8LjMFWpxl"
                                                render="explicit"
                                                onloadCallback={recaptchaLoaded}
                                                verifyCallback={verifyCallback}
                                        />
                                        </Grid>
                                        <Grid item xs={12}  className={classes.gridItem}>
                                                
                                        <Button onClick={handleVerify} variant="contained" size="large"  fullWidth className={classes.submitbtn}>
                                                Send Email <ArrowRightAltIcon/>
                                        </Button>

                                        </Grid>
                                        <div className={classes.margin} />


                                        <Grid item container spacing={1}  className={classes.gridItem}
                                                        direction="row"
                                                        justify="space-between"
                                                        alignItems="flex-start"
                                        >
                                                <Grid item xs={6}>
                                                 <Link className={classes.sign_link} to="/signup">Don't have an account?</Link>

                                                </Grid>
                                                <Grid item xs={6} style={{textAlign: "right"}}>
                                                     
                                                    <Link className={classes.sign_link} to="/login">Log In ?</Link>
                                                </Grid>
                                                
                                        </Grid>


                             
                                

                      
                </Grid>
        </Paper>
        


</Grid>
    )
}

export default Forgotpass
