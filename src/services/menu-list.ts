import api from '../assets/js/api'

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

export const createOrUpdateMenu = (key: Menu) => {
  const URL = '/boss/menu/saveOrUpdate'
  const data = {
    id: key.id,
    name: key.name,
    href: key.href,
    parentId: key.parentId,
    description: key.description,
    icon: key.icon,
    shown: key.shown,
    orderNum: key.orderNum
  }
  return api.post(URL, data)
}
