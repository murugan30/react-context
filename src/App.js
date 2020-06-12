import React from 'react';
import Nav from './components/Nav';
import List from './components/List';
import UserContext from './contexts/User';

class App extends React.Component {
  state = {
    name: 'Murugan',
    address: 'Bangalore'
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={{user: this.state}}>
          <Nav />
        </UserContext.Provider>
        {/* address shows how props works */}
        <List address={this.state.address} />
      </div>
    );
  }
}

export default App;