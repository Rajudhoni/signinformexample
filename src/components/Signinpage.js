// import React from 'react'
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import signbg from './images/signbg.png';


// const useStyles = makeStyles((theme) => ({
//     root: {flexGrow: 1},
//     paperStyle:{padding: 20, height: '80vh', width: 300, margin: '20px auto' },

//     grid2bg: {
         
//         backgroundImage: `url(${signbg})`,
//         height: "100vh",
//         backgroundSize:  "cover",
//         backgroundPosition : "center", 
//         // padding: "40px",
//         // display: "flex",
//         // alignItems: "flex-end"
//     },
//     gridoneContainer: {
       
//         paddingTop: "20px",
//         paddingRight: "40px",
//         paddingLeft: "40px"

//     },
//     gridoneInside: {
//          width: '100%',
//         paddingTop: "20px",
//         paddingRight: "70px",
//         paddingLeft: "20px",
//         paddingRight: "20px",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center"

//     }
    
//   }));

// const Signinpage = () => {
//     const classes = useStyles();
//     return (
//       <div className={classes.root}>
//             <Grid
//             container
//             direction="row"
//             justify="flex-start"
//             alignItems="flex-start"
//             className={classes.gridContainer}
//             >
//                 <Grid item xs={6} className={classes.gridoneContainer}>
//                 <Grid item container xs={12} className={classes.gridoneContainer}>
//                 <Paper elevation={10} className={classes.paperStyle}>
//                     <Grid container item xs={12} className={classes.gridoneInside} >

                    
//                     <Grid align="center">
                            
//                             <h2>Account Recovery</h2>
//                     </Grid>

//                     </Grid>
//                 </Paper>
//                 </Grid>
//                 </Grid>
//                 <Grid item xs={6} className={classes.grid2bg} >
//                         grid2
//                 </Grid>
                
//             </Grid>

//             </div>
       
//     )
// }

// export default Signinpage




/// exmple2



import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FacebookIcon from '@material-ui/icons/Facebook';
import SmsIcon from '@material-ui/icons/Sms';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import {UserContext} from '../context/index'


const useStyles = makeStyles((theme) => ({
    paperStyle:{padding: 20, height: '80vh', width: 300, margin: '20px auto' },
    avatar:{backgroundColor: "#1bbd7e"} ,
    margin: {margin: theme.spacing(2)},
    fpasswd: {color: 'red'},
    button: {margin: theme.spacing(1)},
  


  }));


const Signinpage = () => {
    const classes = useStyles();
    const [token, setToken] = useState();
    const history = useHistory();
  const [userToken,setUserToken]=useContext(UserContext);
  const usertoken =  localStorage.getItem("token");
 


  console.log(userToken,"value token.......")
    const responseGoogle = async (response) => {
        
        const tokenid = await response.accessToken;
        
        console.log("token Id ", tokenid);
        let token = localStorage.getItem("token");
        console.log("already have token id", token)
        if(token){
                
                
                history.push("/profile")
        }else{
                localStorage.setItem("token",tokenid)
                setUserToken(tokenid)
                alert("Please Login Again!!")
        }
   }
   const onfailResponse = (res) => {
           console.log(res);
   }

   const responseFacebook = async (response) => {
        const tokenid = await response.accessToken;
        console.log("fb token id", tokenid);
        if(tokenid){
                history.push("/profile");
        }else{
                alert("please login again!!")
        }
      }

    return(
        <Grid >
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align="center">
                        <Avatar className={classes.avatar}><LockIcon /></Avatar>
                        <h2>Sign In</h2>
                </Grid>
                {/* <label></label> */}
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Email or Phone"
                    placeholder="*Email or Phone Number*"
                    fullWidth
                    required
                   
                    
                  />
                  <div className={classes.margin} />
                  <Button variant="contained" color="primary" fullWidth>
                           Login
                  </Button>
                  <Typography variant="h6" align="right" className={classes.fpasswd}>Forgot Password</Typography>
                  <div className={classes.margin} />
                  <Grid align="center">
                        <h4>Or</h4>
                        <h3>SignUp With</h3>
                </Grid>



                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                 >
                 
                        
                        {/* <Button variant="contained" size="small" 
                                color="secondary"  
                                startIcon={<MailOutlineIcon/>}
                                style={{backgroundColor: "#e66357"}}
                         >
                                Gmail
                        </Button> */}

                        <GoogleLogin
                        clientId="383103237717-afkqsqagomqs4i159septrk5cjeahjc1.apps.googleusercontent.com"
                        render={renderProps => (
                                <Button variant="contained" size="small" color="secondary" startIcon={<MailOutlineIcon/>}  style={{backgroundColor: "#e66357"}}
                                        onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        Gmail</Button>
                              )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={onfailResponse}
                        cookiePolicy={'single_host_origin'}
                        />



                       
                       
                        {/* <Button variant="contained" 
                                size="small" color="primary" 
                                startIcon={<FacebookIcon />} 
                                // style={{width:"105px"}}
                        >
                                Facebook
                        </Button> */}
                        <FacebookLogin
                                appId="165016625278519"
                                
                                callback={responseFacebook}
                                render={renderProps => (
                                      
                                        <Button variant="contained" size="small" color="primary" 
                                                startIcon={<FacebookIcon />} style={{width:"105px"}}  
                                                onClick={renderProps.onClick} disabled={renderProps.disabled}>Facebook</Button>
                                )}
                         />
                      

                     
                        <Button variant="contained" size="small"  startIcon={<SmsIcon />} >
                                SMS
                        </Button>
                       
                    
                </Grid>
                <br></br>
                <hr></hr>
                <Grid align="center">
                        
                        <h3>New to ECorfy</h3>
                </Grid>
                <Button variant="contained" color="primary" fullWidth>
                          Create Your ECorfy Account
                  </Button>

               
                   
            </Paper>
           

        </Grid>
        )
        
                                
    
}

export default Signinpage;