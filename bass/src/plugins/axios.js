import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/'
const token = localStorage.getItem('access_token')
if(token){
  axios.defaults.headers.common['Authorization'] = `Token ${token}` //eslint-disable-line
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}


export default axios