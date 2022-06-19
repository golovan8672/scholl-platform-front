import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';

class HomeworkStore {
  @observable homeworks = []
  
  
  constructor() {
      makeObservable(this);

      autorun(() => this.getHomeworks())
    }
    

  @action setHomeworks = (homeworks) => {
    this.homeworks = homeworks
  }


  request = async (url, method = 'GET', body = null, headers = {}, mode = 'no-cors') => {
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-type'] = 'application/json'
      }

      
      const response = await fetch(url, { method, body, headers })

      const data = await response.json()

      console.log(data)

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      return data
    } catch (e) {
      throw e
    }
  }


  addHomework = async (homeworkData) => {
    try {
      const data = await this.request(`${api}/api/homework/addHomework`, 'POST', homeworkData)
      
      this.getHomeworks()
      alert(data.message)
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  setMark = async (id, markData) => {
    try {
        const data = await this.request(`${api}/api/homework/setMark/${id}`, 'PUT', {markData})
        
        this.getHomeworks()
        alert(data.message)
      } catch (e) {
        console.log(e)
        console.error('Что-то пошло не так');
      }
  }

  getHomeworks = async () => {
    try {
      const data = await this.request(
        `${api}/api/homework/getHomeworks`,
        'GET',
        null
      )

      this.setHomeworks(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default HomeworkStore