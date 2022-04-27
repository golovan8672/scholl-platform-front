import { action, observable, makeObservable } from 'mobx';
import { api } from '../../config';

class AuthStore {
  @observable message = null

  @observable token = null
  @observable userId = null

  @observable isAuthenticated = false

  @observable userData = {}

  @observable user = {}

//   ProjectStore = {}
  storageName = 'userData'

  constructor() {
    makeObservable(this);
  }
 

  @action setUserData = (userData) => {
    this.userData = userData
  }

  @action setToken = (token) => {
    this.token = token
  }

  @action setUserId = (userId) => {
    this.userId = userId
  }

  @action setAuth = (auth) => {
    this.isAuthenticated = auth
  }

  @action setUser = (user) => {
    this.user = user
  }

  clearError = () => {
    this.setMessage(null)
  }

  request = async (url, method = 'GET', body = null, headers = {}, mode = 'no-cors') => {
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-type'] = 'application/json'
      }

      const response = await fetch(url, { method, body, headers })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      return data
    } catch (e) {
      throw e
    }
  }

  //login 
  @action changeHandler = (event) => {
    this.setUserData({ ...this.userData, [event.target.name]: event.target.value })
  }

  @action loginHandler = async () => {
    try {
      const data = await this.request(`${api}/api/auth/login`, 'POST', { ...this.userData })
      this.login(data.token, data.userId)
    } catch (e) {
      console.error('Что-то пошло не так')
    }
  }

  //register
  @action registerHandler = async (entity) => {
    try {
      const data = await this.request(`${api}/api/auth/${entity}Reg`, 'POST', { ...this.userData })
    //   this.setMessage(data.message)
      alert(date.message)
    //   this.setOpen({ openSnack: true, variant: 'success' })
    //   history.push('/session/signin')
    } catch (e) {
      console.error('Что-то пошло не так');
    }
  }

  login = (jwtToken, id) => {
    if (jwtToken) {
      this.setToken(jwtToken)
      this.setUserId(id)
      this.getAuth(jwtToken)
    }
  }

  logout = () => {
    this.setToken(null)
    this.setUserId(null)
    this.setAuth(false)
  }

  getAuth = async (token) => {
    try {
      const data = await this.request(
        `${api}/api/auth/me`,
        'GET',
        null,
        { 'Authorization': `Bearer ${token}` }
      )

      this.setUser(data.user)
      this.setUserData({})
    //   this.setMessage(data.message)
      this.setAuth(data.isAuth)
    } catch (e) {
      console.log(e)
    }
  }
}

export default AuthStore