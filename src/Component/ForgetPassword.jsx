// import React from "react";
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import { Typography } from "@material-ui/core";
// const ForgotPassword = () => {
//     return (<>

//         <Typography className="h3">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</Typography>
//         <FormControl>
//             <InputLabel htmlFor="my-input">Email address</InputLabel>
//             <Input id="my-input" aria-describedby="my-helper-text" />
//             <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
//         </FormControl>    
//     </>);
// }
// export default ForgotPassword;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));

export default function ForgetPassword() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{marginTop:"10%"}}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    <b>Forgot Password ?</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                                </Typography>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                    <FormHelperText id="my-helper-text">We'll share an otp to your email.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
