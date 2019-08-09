import React, { Component } from 'react';
import UserInput from '../components/UserInput'
import Users from '../components/Users'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(

      <div>
        <Users users={this.props.users}/>
        <UserInput/>
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
