import axios from 'axios';

export function getUserDetails() {
    return axios.get(`${process.env.REACT_APP_API}/auth`, { withCredentials: true });
}