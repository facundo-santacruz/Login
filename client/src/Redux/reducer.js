import { POST_USER, GET_USER} from '../constantesOrden'

export const initialState = {
  users: [],
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    //--------------------------------------------------usuarios
    case POST_USER:  //agrega un usuario
      return {
        ...state,
        users: state.users.concat(action.payload)
      }

    case GET_USER:
      return {
        ...state,
        users: action.payload
      }

    
   
    default: return state
  }

};
