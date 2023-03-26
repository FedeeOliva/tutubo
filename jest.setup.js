import 'whatwg-fetch';
import dotenv from 'dotenv'

dotenv.config({
    path: '.env'
})

jest.mock('./src/config/getEnviroments',()=>({
    getEnviroments: () => ({...process.env})
}))