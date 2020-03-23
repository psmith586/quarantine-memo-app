import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  Image: {
    minWidth: 200,
    objectFit: 'cover',
  },
  Content: {
    padding: 25,
  }
};

class Memo extends Component{
  render () {
    const {
      classes,
      memo : {
        body,
        createAt,
        userImage,
        userHandle,
        memoID
      }
    } = this.props;

    console.log(this.props);

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="textPrimary"
            >
              {userHandle}
            </Typography>
          <Typography variant="body2" color="textSecondary">{createAt.seconds}</Typography>
          <Typography varaint="body1">{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Memo);
