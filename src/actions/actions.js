import Axios from 'axios';
const apiUrl = '/data.json';

// Sync Action
export const fetchUsersSucess = (users) => {
  console.log(users)
  return {
    type: 'FETCH_USERS',
    users  }
};

export const deleteUser = () => {
  return {
    type: 'DELETE_USER'
  }
};

export const selectUser = ( user, clickTpe) => {
  return {
    type: 'SELECTE_USER',
    clickTpe: clickTpe,
    user: user
  }
};
export const selectAllUser = ( isAllSelected ) => {
  return {
    type: 'SELECTE_ALL_USERS',
    isAllSelected: isAllSelected
  }
};
//Async Action
export const fetchUsers = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchUsersSucess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};