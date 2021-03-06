import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import './Login.css'
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userErrorAC, userInitAC } from '../../../redux/ActionCreators/usersAC';

function Login() {

  const dispatch = useDispatch();
  let history = useHistory();
  const error = useSelector(state => state.users.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      phone: data.get('phone'),
      password: data.get('password'),
    };
    fetch('/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          dispatch(userErrorAC(data.error));
        } else {
          dispatch(userInitAC(data.user));
          history.push('/');
        }
      })
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(userErrorAC(''))
    }, 5000);

    return () => {
      clearTimeout(timer);
    }
  }, [error])

  useEffect(() => {
    return () => {
      dispatch(userErrorAC(''))
    }
  }, [])

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline clhassName='jkhjkhkj' />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/fonrega.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
          style={{ backgroundColor: '#E0E0E0' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ??????????????????????
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                id="phone"
                label="??????????????"
                name="phone"
                autoComplete="Phone"
                autoFocus
              />
              <TextField sx={{ marginTop: "20px" }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="????????????"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              {/* <Link to="route" target="_blank">???????????????? ???? ?????????????????? ???????????????????????? ????????????</Link> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ marginTop: '20px' }}
              >
                ??????????
              </Button>
              <Grid container>
                <Grid item sx={{ marginTop: "20px" }}>
                  <Link to="/registration" variant="body2">
                    {"?????? ????????????????? ??????????????????????????????????."}
                  </Link>
                </Grid>
              </Grid>
              {error &&
                <Grid className="authorizeError">
                  {
                    error
                  }
                </Grid>
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}

export default Login;
