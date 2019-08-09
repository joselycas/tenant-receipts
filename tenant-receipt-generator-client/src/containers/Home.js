import React, { Component } from 'react';
import ReceiptContainer from './ReceiptContainer'
import UserContainer from './UserContainer'
import Review from './Review'

class Home extends Component {

// functional components add a navbar in component



  render() {
    return(

      <div>
        <UserContainer />
        <ReceiptContainer />
        <Review />
      </div>


    )
  }
}

export default Home;
