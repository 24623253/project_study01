import { get, post } from './http'

const Login = (params) => {post('/auth/login'),params}

// export const api = ({
//   Login,
//   get,
//   post
// })