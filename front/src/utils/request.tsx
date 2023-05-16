import axios from "axios";
import config from "../config";

const request = axios.create({
	baseURL: `${config.dev.PROTOCOL}://${config.dev.HOST}:${config.dev.PORT}`,
	withCredentials: true,
	headers: { "Content-type": "application/json" },
});

export default request;
