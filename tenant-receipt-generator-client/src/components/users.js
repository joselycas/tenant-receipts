import React from 'react'
import User from './User'
import {Route, Link} from 'react-router-dom'


class Users extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        votes: {},
        usersList: [],
        buttonClicked: false
      };
    }


    handleOnCLick = (userId) => {
      this.setState((state) => {
        let newVotes = 1
        if (this.state.votes[userId]){
          newVotes = this.state.votes[userId] + 1
        }
        return {votes:{
          ...this.state.votes,
          [userId]:newVotes
        }

       }

    });

    }

    sortUsers = () => {
    let originalProps = [...this.props.users]
    let sortedUsers = originalProps.sort((a, b) => {

      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      usersList:sortedUsers,
      buttonClicked:!this.state.buttonClicked
    })
    }


  render() {

    console.log("button", this.state.buttonClicked)
    console.log("users state", this.state.usersList)
    console.log("users props", this.props.users)
    return (
      <div >
        <button onClick={this.sortUsers}>Sort</button>
        {this.state.buttonClicked ? this.state.usersList.map(user =>
        <div  key={user.id}><Link to={`/users/${user.id}`}>
        <strong>{user.name}</strong></Link> - <button onClick={() => this.handleOnCLick(user.id)}>vote</button>
        {this.state.votes[user.id]}</div>) : this.props.users.map(user =>
        <div  key={user.id}><Link to={`/users/${user.id}`}>
        <strong>{user.name}</strong></Link> - <button onClick={() => this.handleOnCLick(user.id)}>vote</button>
        {this.state.votes[user.id]}</div>)}
     </div>
  )
  }
}

export default Users;
