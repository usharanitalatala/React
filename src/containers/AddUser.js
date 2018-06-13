import React, {Component}from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'
import {bindActionCreators} from 'redux'

class AddUser extends Component {
  render() {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
         
         this.props.addUser({name:'NEW'});
         
        }}
      >
        
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser: addUser}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AddUser)