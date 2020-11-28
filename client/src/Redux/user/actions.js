import { POST_USER } from './constants';
import axios from 'axios';


export function postUser(categorias) {
    return {
      type: POST_USER,
      payload: categorias
    }
  }
  export function postUserRequest(user) {
    return (dispatch) => {
      axios.post('http://localhost:3001/api/user', user)
        .then(response => { dispatch(postUser(response.data)) })
        .catch(err => { console.log(err) })
    }
  }
