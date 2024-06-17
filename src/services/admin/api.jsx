import axios from "axios";
import apiKey from "../../utils/apikey"

const baseURL = apiKey + "/" + "admin";

export const createAdmin = (AdminItem) => axios.post(baseURL + "/" + "create", AdminItem);
export const validateCredentials = (username, password) => axios.post(baseURL + "/" + "login", username, password);
export const validateToken = (token) => axios.post(baseURL + "/" + "validateToken", token)
