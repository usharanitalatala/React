import React, { Component } from 'react';
import './App.css';
import AddUser from './containers/AddUser'
import DeleteUser from './containers/DeleteUser'
import { selectUser,selectAllUser } from './actions/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types';

class App extends Component {
  render() {    
     var rows = [], self = this;
     this.props.users.forEach(function(obj){
      rows.push(<tr key={obj.id}>
        <td><input type='checkbox'  checked='{self.props.isAllSelected}' onChange={ e => {self.props.selectAllUser(obj,'add')}} /></td>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
      </tr>)
    });
    return (
      <div className="App">
        <AddUser />
        <DeleteUser />
        <table border='1'>        
          <thead>
            <tr>
            <th>isAllSelected:{self.props.isAllSelected}<input type='checkbox' onChange={ e => {console.log(e);self.props.selectAllUser( true )}} /></th>
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
  console.log(state)
  return {
    users: state.users,
    isAllSelected: false
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser,
    selectAllUser:selectAllUser}, dispatch);
}
// App.propTypes = {
//   isAllSelected: PropTypes.boolean
// };
export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App;
