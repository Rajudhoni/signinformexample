import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Recaptcha from 'react-recaptcha';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Link} from 'react-router-dom';



import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { GoogleLogin } from 'react-google-login';
import googlelogo from './images/googlelogo.png';

const useStyles = makeStyles((theme) => ({
    
    paperStyle:{padding: 20, height: '80vh', width: 400, margin: '80px auto' },
    label: {fontSize: '16px', fontWeight: "bold"},
    gridItem: {  width: "100%"},
    margin: {margin: theme.spacing(2)},
    marginf: {margin: theme.spacing(1)},
    p_signtle: {fontSize: "38px", textAlign: "center", marginBottom: "20px", fontWeight: 500},
    p_signsubtitle: {fontSize: "16px", textAlign: "center", fontWeight: "normal", marginTop: "10px", marginBottom: "20"},
    submitbtn: {backgroundColor: "#FFAB08", textTransform: "capitalize", height: "56px", color: "white",  fontSize: "17px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "27px", paddingLeft: "27px"},
    googlebtn: {backgroundColor: "white", textTransform: "capitalize", height: "56px", color: "black",  fontSize: "17px", paddingTop: "12px", paddingBottom: "12px", paddingRight: "27px", paddingLeft: "27px"},
    logo: {width: "180px", position: "absolute", top: "40px", left:"40px",zIndex: 999 },
    sign_link: {color: "#8F8F8F", textDecoration: "underline", fontSize: "16px", fontWeight: 500, }, 
    outlineinput: {height: "40px"},
    signconditions: {color: "#8F8F8F", fontSize:"16px", fontWeight: 500, },
    signCheckbox: {borderRadius: "6px", border: "1px solid none", backgroundColor: "white", boxShadow: "none"},
    sign_or_line: {height: "1px", width: "100%", backgroundColor: "#8F8F8F", textAlign: "center"},
    sign_or: {fontSize: "20px", fontWeight: 500, textAlign: "center",  }
  }));




const Signup = () => {
    const classes = useStyles();
    const [verified, setVerified] = useState(false);
    const [values, setValues] = useState({
        password: '',
        showPassword: false
    })

    const [state, setState] = useState({
        checkedA: true,
        
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleCheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };



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

const responseGoogle = (response) => {
    console.log("google Response: ", response)
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
                                <p className={classes.p_signtle}>Sign up</p>
                                <p className={classes.p_signsubtitle}>Start your 7-day free trial. No strings attached.</p>
                        </div>
                        </Grid>
                        <div className={classes.margin} />
                                <Grid item xs={12} className={classes.gridItem}>
                                <label className={classes.label}>Your name: </label>
                                        <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                             
                                                placeholder="Enter your name:"
                                                fullWidth
                                                required
                                                size="small"
                                                
                                                
                                         />
                                         </Grid>

                                         <Grid item xs={12} className={classes.gridItem}>
                                         <label className={classes.label}>Email: </label>
                                        <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                             
                                                placeholder="Your email"
                                                fullWidth
                                                required
                                                size="small"
                                                type="email"
                                                
                                                
                                         />
                                         </Grid>
                                         <Grid item xs={12} className={classes.gridItem}>
                                         <label className={classes.label}>Password: </label>
                                        <OutlinedInput
                                                id="outlined-basic"
                                                variant="outlined"
                                             
                                                placeholder="6 symbos minimum"
                                                fullWidth
                                                required
                                                size="small"
                                                type="password"
                                                className={classes.outlineinput}





                                                id="filled-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>}





                                                
                                                
                                                
                                         />

                                         </Grid>


                                         <Grid item container spacing={1}  className={classes.gridItem}>
                                        <Grid item xs={2}>
                                        <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleCheck}
                                                    name="checkedB"
                                                    color="primary"
                                                    className={classes.signCheckbox}
                                                />
                                                }
                                                
                                            />
                                                                                </Grid>
                                         <Grid item xs={10} >
                                                        <p className={classes.signconditions}>I agree to the Terms of Use and Privacy Policy</p>
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
                                                Start Your free trial <ArrowRightAltIcon/>
                                        </Button>

                                        </Grid>
                                        <div className={classes.margin} />
                                        <Grid item container spacing={1}  className={classes.gridItem}>
                                          
                                        <Grid item xs={5}>
                                            <span className={classes.sign_or_line}><hr/></span>
                                         </Grid>
                                         <Grid item xs={2}>
                                                        <p className={classes.sign_or}>or</p>
                                         </Grid>
                                         <Grid item xs={5}>

                                         <span className={classes.sign_or_line}><hr/></span>
                                         </Grid>
                                        
                                   
                                         
                                         </Grid>
                                        <div className={classes.margin} />


                                        <Grid item xs={12}  className={classes.gridItem}>
                                        
                                        <GoogleLogin
                                        clientId="383103237717-afkqsqagomqs4i159septrk5cjeahjc1.apps.googleusercontent.com"
                                        buttonText="Login with google"
                                        render={renderProps => (
                                            <Button  variant="contained" size="large" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} className={classes.googlebtn}><img src={googlelogo} width="40px" height="40px" />Continue with google</Button>
                                          )}
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        style={{width: "100%"}}
                                    />
                                        </Grid>


                             
                                

                      
                </Grid>
        </Paper>
        


</Grid>
    )
}



export default Signup
