import React, { Component } from 'react';
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import User from '../components/User'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import {Route, Switch} from 'react-router-dom'
import Review from '../components/Review'


class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(

      < Switch >
          <Route path='/users/new' component={UserInput}/>
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users}/>} />
          <Route path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
          <Route exact path='/' render = {() => null} />
          <Route path='/review' render={(routerProps) => <Review {...routerProps} users={this.props.users}/>} />
      < /Switch >

    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UserContainer);
