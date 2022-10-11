
import axios from 'axios';


export function getUserDetails() {
    return axios.get(`${process.env.api}/auth`, { withCredentials: true });
}