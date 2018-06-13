import React, { Component } from 'react';
import './App.css';
import AddUser from './containers/AddUser'
import {connect} from 'react-redux'

class App extends Component {
  render() {    
     var rows = [];
     this.props.users.forEach(function(obj){
      rows.push(<tr>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
      </tr>)
    });
    return (
      <div className="App">
        <AddUser />
        <table border='1'>        
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            </tr>
          </thead>
          {rows}
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    users: state.users
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({selectContact: selectContact}, dispatch);
// }

export default connect(mapStateToProps)(App)
//export default App;
