import axios from '../assets/js/api'

interface Menu {
  id?: number;
  name?: string;
  href?: string;
  parentId?: number;
  description?: string;
  icon?: string;
  shown?: string;
  orderNum?: number;
}

export const getUserPermissions = (key: Menu) => {
  return axios({
    method: 'get',
    url: '/boss/permission/getUserPermissions',
    data: {}
  })
}
export const getPermissionsAll = (key: Menu) => {
  return axios({
    method: 'get',
    url: '/boss/menu/getAll',
    data: {}
  })
}
