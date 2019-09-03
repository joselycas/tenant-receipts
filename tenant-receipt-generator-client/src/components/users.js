import React from 'react'
import User from './User'
import {Route, Link} from 'react-router-dom'


class Users extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        votes: {},
        usersList: []
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
      let sortedUsers = this.props.users.sort((a,b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
           return -1;
         }
         if (nameA > nameB) {
           return 1;
         }
         return 0;
     });
     this.setState({
       usersList:sortedUsers
     });
   };


  render() {

    return (
      <div >
            <button onClick={this.sortUsers}>sort users</button>
    {this.props.users.map(user =>
      <div  key={user.id}><Link to={`/users/${user.id}`}>

      <strong>{user.name}</strong></Link> - <button onClick={() => this.handleOnCLick(user.id)}>vote</button>
      {this.state.votes[user.id]}</div>)}
     </div>
  )
  }
}

export default Users;
