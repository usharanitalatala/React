
const users = (state = {isAllSelected:false}, action) => {
  
  switch (action.type) {
    case 'FETCH_USERS':  
    let users = state;  
    console.log(state)
    users = action.users;
    console.log(users);
    return users
    case 'ADD_USER':  
    //return Object.assign({}, state.users, action.user);
      //return state.users.push(action.user)         
      return [
        ...state,
        action.user
      ]
    case 'SELECTE_ALL_USERS':{
      return{
        ...state,
        isAllSelected: action.isAllSelected
        }
    }
    case 'SELECTE_USER':
    
    if(action.clickType == 'add'){
      return{
        ...state,
        selectedUser: action.user
        }
    } else{
      return[
        ...state]
    }
    case 'DELETE_USER':
    return[{
      ...state
    }]
       
    default:
      return state
  }
}

export default users
