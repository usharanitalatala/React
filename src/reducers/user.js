import data from '../data.json';
const users = (state = [], action) => {
  console.log(state,action)
  switch (action.type) {
    case 'ADD_USER':  
    //return Object.assign({}, state.users, action.user);
      //return state.users.push(action.user)   
      console.log(state,action)
      return [
        ...state,
        action.user
      ]
    default:
      return state
  }
}

export default users
