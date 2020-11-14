import axios from '../assets/js/api'

interface User {
  phone?: string;
  password?: string;
  Authorization?: string;
}

export const loginTo = (key: User) => {
  return axios({
    method: 'post',
    url: '/front/user/login',
    data: {
      phone: key.phone,
      password: key.password
    }
  })
}

export const getUserInfo = (key: User) => {
  return axios({
    method: 'get',
    url: '/front/user/getInfo',
    data: {}
  })
}
