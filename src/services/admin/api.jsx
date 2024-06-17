import axios from "axios";
import { apiKey } from "../../utils/apikey"

const baseURL = apiKey + "/" + "admin";
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};
export const createAdmin = (AdminItem) => axios.post(baseURL + "/" + "create", AdminItem);
export const validateCredentials = (username, password) => {
  const body = {
    username: username,
    password: password
  };
  console.log(body);
  return axios.post(baseURL + "/" + "login", body, config);
}
export const validateToken = (token) => axios.post(baseURL + "/" + "validateToken", token)
