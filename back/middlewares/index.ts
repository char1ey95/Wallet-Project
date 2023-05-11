import jsonParser from './bodyParser/jsonParser'
import setCookieParser from './cookieParser'
import setCors from './cors'


const middleWares = {
    jsonParser,
    setCookieParser,
    setCors,
}

export default middleWares