import React, { Component } from 'react';
import Receipt from './Receipt'
import User from './User'
import Review from './Review'

class Home extends Component {

// functional components add a navbar in component

  render() {
    return(

      <div>
        <User />
        <Receipt />
        <Review />
      </div>


    )
  }
}

export default Home;
