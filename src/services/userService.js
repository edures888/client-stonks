import axios from 'axios';
import authenticationHeader from './authenticationHeader';

const url = `${process.env.REACT_APP_SERVER_URL}/api/v1`;

// API call to access protected route for basic user details
const getUserDetails = () => {
  return axios.get(`${url}/users/details`, { headers: authenticationHeader() });
};

export default getUserDetails;
