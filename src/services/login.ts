import api from '../assets/js/api'

interface User {
  phone?: string;
  password?: string;
  Authorization?: string;
}

export const loginTo = (key: User) => {
  const URL = '/front/user/login'
  const data = {
    phone: key.phone,
    password: key.password
  }
  return api.post(URL, data)
}

export const getUserInfo = (key: User) => {
  const URL = '/front/user/getInfo'
  const data = {}
  return api.get(URL, data)
}
