import axios from "axios";
import Cookie from "js-cookie";

export function getUserDetails() {
  console.log(document.cookie.includes("Authentication"));
  return axios.get(`${process.env.REACT_APP_API}/auth`, {
    withCredentials: true,
    headers: {
      Authentication: Cookie.get("Authentication"),
    },
  });
}

export function findUserById(id) {
  return axios.get(`${process.env.REACT_APP_API}/api/users/${id}`, {
    withCredentials: true,
    headers: {
      Authentication: Cookie.get("Authentication"),
    },
  });
}

export function getLeaderboardDetails() {
  return axios.get(`${process.env.REACT_APP_API}/api/rank`, {
    withCredentials: true,
    headers: {
      Authentication: Cookie.get("Authentication"),
    },
  });
}

export function getImageAvatar(avatar) {
  const res = axios.get(avatar);
  console.log(res);
  return res;
}
