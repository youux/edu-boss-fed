import axios from '../assets/js/api'

interface User {
  phone?: string;
  password?: string;
  Authorization?: string;
}

export const loginTo = (key: User) => {
  return axios({
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: '/front/user/login',
    data: {
      phone: key.phone,
      password: key.password
    },
    transformRequest: [
      data => {
        let ret = ''
        for (const key in data) {
          ret += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
        }
        return ret.slice(0, -1)
      }
    ]
  })
}

export const getUserInfo = (key: User) => {
  return axios({
    method: 'get',
    url: '/front/user/getInfo',
    data: {}
  })
}
