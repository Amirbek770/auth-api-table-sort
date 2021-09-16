import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ProductAPI } from "./API/productAPI";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [subdomain, setSubdomain] = useState('')
  
  
  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeSubdomain = (e) => {
    setSubdomain(e.target.value)
  }

  const  loginSubmit = async e =>{
    e.preventDefault()
    const url = `https://${subdomain}.ox-sys.com/security/auth_check`;
    var reqBody = `_username=${username}&_password=${password}&_subdomain=${subdomain}`;
    console.log(reqBody) 
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: reqBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const data = await response.json();
      localStorage.setItem('token', data.token)
      localStorage.setItem('subdomain', subdomain)
      window.location.href = "/home"
    } catch (error) {
      console.error('Error:', error);
    }
}
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={loginSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="username"
            value={username}
            autoComplete="username"
            autoFocus
            onChange={onChangeUsername}
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
            value={password}
            autoComplete="current-password"
            onChange={onChangePassword}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="subdomain"
            label="Subdomain"
            type="text"
            id="subdomain"
            value={subdomain}
            autoComplete="current-password"
            onChange={onChangeSubdomain}
          />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Sign In
            </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
