import axios from 'axios'
import config from '../config'
import store from '../store/index'
import LocalStorage from '../helpers/localstorage'
// import router from '../router/index'

const baseDomain = config.server.url
const baseURL = `${baseDomain}/v1/`

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

httpClient.interceptors.request.use(
  function(config) {
    const token = LocalStorage.getItem('token') || sessionStorage.getItem('token') || ''

    const method = config.method
    const companyId = store.getters['companies/companyId']
    if (companyId) {
      if (method === 'post') {
        config.data.companyId = companyId
      } else if (method === 'get') {
        config.url += `&companyId=${companyId}`
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

// set max timeout for API calls
httpClient.defaults.timeout = 20000

httpClient.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (
      error &&
      error.response &&
      (error.response.status === 401 || error.response.status === '401')
    ) {
      // unauthorized. Take the user to the login page
      // router.push({
      //   path: 'auth/login'
      // })
    }
    return Promise.reject(error)
  }
)

export default httpClient
