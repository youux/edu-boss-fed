import axios from 'axios'
import store from '@/store'
import router from '@/router'

axios.defaults.baseURL = '/'
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

const getApiUtils = (data: any) => {
  return data
}

const get = async (url: string, params: any) => {
  return await axios({
    url,
    method: 'get',
    params: getApiUtils(params)
  })
}

const post = async (url: string, data: any) => {
  return await axios({
    url,
    method: 'post',
    data: getApiUtils(data),
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

const redirectLogin = () => {
  router.push({
    name: 'Login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

const refreshToken = () => {
  return axios({
    url: '/front/user/refresh_token',
    method: 'POST',
    data: {
      refreshtoken: store.state.user.access_token
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

// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.headers.Authorization = store.state.user.access_token
    }
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截器
let isRfreshing = false
let requests: any[] = []
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const { status } = error.response
      if (status === 400) {
        console.log('请求参数错误')
      } else if (status === 401) {
        if (!store.state.user) {
          redirectLogin()
          return Promise.reject(error)
        }

        // 刷新token
        if (!isRfreshing) {
          isRfreshing = true
          return refreshToken()
            .then(res => {
              if (!res.data.success) {
                throw new Error('刷新 Token 失败')
              }
              // 刷新token成功
              store.commit('setUser', res.data.content)
              // 把requests中的请求发出去
              requests.forEach(cb => cb())
              // 重置requests数组
              requests = []
              return axios(error.config)
            })
            .catch(error => {
              console.log(error)
              store.commit('setUser', null)
              redirectLogin()
              return Promise.reject(error)
            })
            .finally(() => {
              isRfreshing = false
            })
        }
        // 刷新状态下，把请求挂起到requests数组中
        return new Promise(resolve => {
          requests.push(() => {
            resolve(axios(error.config))
          })
        })
      } else if (status === 403) {
        console.log('没有权限，请联系管理员')
      } else if (status === 404) {
        console.log('请求资源不存在')
      } else if (status >= 500) {
        console.log('服务端错误，请联系管理员')
      }
    } else if (error.request) {
      console.log('请求超时')
    } else {
      console.log(`请求失败：${error.message}`)
    }
    return Promise.reject(error)
  }
)

export default { get, post }
