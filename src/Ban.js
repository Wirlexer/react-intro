import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
var data = require('./data.json');

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image1: {
    backgroundImage: 'url(http://ispv.ru/wp-content/uploads/2016/01/scetchs_last.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing(0, 0, 0)
  },  paper: {
    margin: theme.spacing(0, 0, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    backgroundImage: 'url(https://sun9-49.userapi.com/impf/4IEu2QFBosLNRTUyX8rNZCPilwEjHwrTrn5MFA/3r0AmTbNGHw.jpg?size=810x1080&quality=96&proxy=1&sign=8bd1ded287b3e7ff6187097d9993bfec&type=album)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing(0, 0, 0)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({onSigninSubmit, email, onEmailChange, password, onPasswordChahge}) => {
  const classes = useStyles();
 if (data.userData.isActive) {
     var stroka = "Пользователь в сети";
 }
 else
 var stroka = "Пользователь не в сети";

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={3} md={4} className={classes.image} />
      <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>

        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Дело сделано, капитан.
          </Typography>
          <center>
    <div className="App">
    <div>
      id: {data.userData._id}
    </div>
    <div>
    index: {data.userData.index}
    </div>
    <div>
    guid: {data.userData.guid}
    </div>
    <div>
    isActive: {stroka}
   
    </div>

    <div>
    balance: {data.userData.balance}
    </div>
    <div>
    smallPicture:
    <br/>
    <img src={data.userData.smallPicture}/>
    </div>
    <div>
    bigPicture: 
    <br/>
    <img src={data.userData.bigPicture}/>
    </div>
    <div>
    age: {data.userData.age}
    </div>
    <div>

    <table>
    
      <tr>
      eyeColor:
        <td style = {{backgroundColor: data.userData.eyeColor, width: "20px", height: "20px"}}>
          
        </td>
      </tr>
    </table>
    </div>
    <div>
    name_first: {data.userData.name.first}
    </div>
    <div>
    name_last: {data.userData.name.last}
    </div>
    <div>
    company: {data.userData.company}
    </div>
    <div>
    email: {data.userData.email}
    </div>
    <div>
    phone: {data.userData.phone}
    </div>
    <div>
    address: {data.userData.address}
    </div>
    <div>
    about: {data.userData.about}
    </div>
    <div>
    registered: {data.userData.registered}
    </div>
    <div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62ee8d4104378214ec854b32151bc7f6fce0572ba5fa6a087785ad3bfda0a4c7&amp;source=constructor" width="450" height="250" frameborder="0"/>
    </div>
    <div>
    tags: {"<" + data.userData.tags[0] + "> "}
    {"<" + data.userData.tags[1] + "> "}
    {"<" + data.userData.tags[2] + "> "}
    {"<" + data.userData.tags[3] + "> "}
    {"<" + data.userData.tags[4] + "> "}
    </div>
    </div>
    </center>
        </div>
      </Grid>
      <Grid item xs={false} sm={3} md={4} className={classes.image1} />
    </Grid>
  );
}

export default Login;