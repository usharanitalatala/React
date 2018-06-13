import React, {Component}from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/actions'
import {bindActionCreators} from 'redux'

class DeleteUser extends Component {
  render() {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
         
         this.props.deleteUser();
         
        }}
      >
        
        <button type="submit">
          Delete User
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
  return bindActionCreators({deleteUser: deleteUser}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteUser)