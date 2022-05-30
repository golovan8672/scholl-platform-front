import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';
import AuthStore from '../Auth/Auth';

class ChatsStore {
  @observable chats = {}
  @observable chat = {}
  
  
  constructor() {
      makeObservable(this);

      this.AuthStore = new AuthStore({})

      console.log(this.AuthStore)

    //   autorun(() => this.getChat())
    }
    

  @action setChat = (chat) => {
    this.chat = chat
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


//   //register
//   @action registerHandler = async (entity) => {
//     try {
//       const data = await this.request(`${api}/api/auth/${entity}Reg`, 'POST', { ...this.userData })
//     //   this.setMessage(data.message)
//       alert(data.message)
//       this.setUserData({})
//       console.log(this.userData)
//     //   this.setOpen({ openSnack: true, variant: 'success' })
//     //   history.push('/session/signin')
//     } catch (e) {
//       console.log(e)
//       console.error('Что-то пошло не так');
//     }
//   }

//   login = (jwtToken, id) => {
//     if (jwtToken) {
//       this.setToken(jwtToken)
//       this.setUserId(id)
//       this.getAuth(jwtToken)
//     }
//   }

  getChat = async (classNumber) => {
    try {
      console.log(classNumber)
      const data = await this.request(
        `${api}/api/chat/${classNumber}`,
        'GET',
        null
      )

      console.log(data)

      this.setChat(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default ChatsStore