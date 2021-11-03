import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import VectorExit from '../../assets/VectorExit.svg';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    backgroundColor: '#134563',
  }

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" noWrap className={classes.title}>
            KONTACTS
          </Typography>
          <img src={VectorExit} alt="botao logout" />
        </Toolbar>
      </AppBar>
    </div>
  );
}