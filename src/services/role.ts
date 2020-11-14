import axios from '../assets/js/api'

interface Role {
  current?: number;
  name?: string;
  size?: number;
}

export const getRolePages = (key: Role) => {
  return axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    url: '/boss/role/getRolePages',
    data: {
      current: key.current,
      name: key.name,
      size: key.size
    }
  })
}
