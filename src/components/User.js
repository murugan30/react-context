import React from 'react';
import UserContext from '../contexts/User';

class User extends React.Component {
  static contextType = UserContext;
  
  render() {
    let user = this.context;
    console.log(user)
    return (
      <UserContext.Consumer>
        {props => {
          return (
            <h4 style={{color: 'red'}}>User: {props.user.name}</h4>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default User;