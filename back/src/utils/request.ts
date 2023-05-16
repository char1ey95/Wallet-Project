import axios from 'axios'
import config from '../../config'

const request = axios.create({
    baseURL: `${config.api_protocol}://${config.api_host}:${config.api_port}`,
    withCredentials: true,
    headers: {"Content-type":"application/json"}
})

export default request