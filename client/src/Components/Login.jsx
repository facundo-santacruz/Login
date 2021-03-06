import React, { useState } from 'react';
import Avatar from '../../node_modules/@material-ui/core/Avatar';
import Button from '../../node_modules/@material-ui/core/Button';
import CssBaseline from '../../node_modules/@material-ui/core/CssBaseline';
import TextField from '../../node_modules/@material-ui/core/TextField';
import FormControlLabel from '../../node_modules/@material-ui/core/FormControlLabel';
import Checkbox from '../../node_modules/@material-ui/core/Checkbox';
import Link from '../../node_modules/@material-ui/core/Link';
import Paper from '../../node_modules/@material-ui/core/Paper';
import Box from '../../node_modules/@material-ui/core/Box';
import Grid from '../../node_modules/@material-ui/core/Grid';
import LockOutlinedIcon from '../../node_modules/@material-ui/icons/LockOutlined';
import Typography from '../../node_modules/@material-ui/core/Typography';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

   function handleChangeEmail(event) {
     console.log(event.target.value);
     setEmail(event.target.value)
   }
   function handleChangePassword(event) {
    setPassword(event.target.value)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value= {email}
              onChange= {handleChangeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

              value= {password}
              onChange= {handleChangePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="createUser" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

// const mapStateToProps = state => {
//   return {
//     user: state.reducer.users
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     ...bindActionCreators({ getUser, postAdmin }, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Usuarios)
