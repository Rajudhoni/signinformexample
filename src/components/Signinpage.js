import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import signbg from './images/signbg.png';


const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    paperStyle:{padding: 20, height: '80vh', width: 400, margin: '60px auto' },
    label: {fontSize: '16px', fontWeight: "bold"},
    gridItem: {  width: "100%"},
    margin: {margin: theme.spacing(2)},
    marginf: {margin: theme.spacing(1)},
    p_signtle: {fontSize: "38px", textAlign: "center", marginBottom: "20px", fontWeight: 500},
    p_signsubtitle: {fontSize: "16px", textAlign: "center", fontWeight: "normal", marginTop: "10px", marginBottom: "20"},
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
                <Grid item  xs={12} md={6} lg={6} >
                
                
                        
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

                                             
                                                

                                      
                                </Grid>
                        </Paper>
                        
           
                
                </Grid>
                <Grid item xs={12} md={6} lg={6} className={classes.grid2bg} >
                        grid2
                </Grid>
                
            </Grid>

            </div>
       
    )
}

export default Signinpage







