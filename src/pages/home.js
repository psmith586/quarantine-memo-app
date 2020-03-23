import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Memo from '../components/Memo'

class home extends Component{
  state = {
    memos: null
  }
  componentDidMount(){
    axios.get('/memos')
      .then(res => {
        console.log(res.data);
        this.setState({
          memos: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render () {
    let recentMemosMarkup = this.state.memos ? (
      this.state.memos.map((memo) => <Memo memo={memo} />)
    ) : <p>loading...</p>
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentMemosMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    )
  }
}

export default home
