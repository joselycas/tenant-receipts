import React, { Component } from 'react';
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import User from '../components/User'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import {Route} from 'react-router-dom'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(

      <div>
        <Route path='/users/new' component={UserInput}/>
        <Route path='/users/:id' render={(routerProps) => <User {...routerProps} users={this.props.users}/>} />
        <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>


      </div>


    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UserContainer);
