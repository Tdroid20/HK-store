import axios from 'axios';

export function getUserDetails() {
    console.log(process.env.api);
    return axios.get(`${process.env.REACT_APP_API}/auth`, { withCredentials: true });
}