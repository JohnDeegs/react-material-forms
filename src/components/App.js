import React, { Component } from 'react';
import FormContainer from '../containers/FormContainer';
import Navbar from '../containers/Navbar';
import Grid from 'material-ui/Grid';
import {MuiThemeProvider} from 'material-ui/styles';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Grid container gutter={24} id="nav">
            <Grid item xs={12}>
              <Navbar />
            </Grid>
          </Grid>
          <Grid container gutter={24} id="form">
            <Grid item xs={12}>
              <FormContainer />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
