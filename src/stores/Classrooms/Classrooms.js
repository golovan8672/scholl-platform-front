import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';

class ClassroomsStore {
  @observable classrooms = []
  @observable classNumber = null
  
  
  constructor() {
      makeObservable(this);

      autorun(() => this.getClassrooms())
    }
    

  @action setClassrooms = (classrooms) => {
    this.classrooms = classrooms
  }

  @action setClassNumber = (classNumber) => {
    this.classNumber = classNumber
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

  addClassroom = async () => {
    try {
      const data = await this.request(`${api}/api/classrooms/addClassroom`, 'POST', {classNumber: this.classNumber})
      
      alert(data.message)
      this.setClassNumber(null)
      this.getClassrooms()
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  getClassrooms = async () => {
    try {
      const data = await this.request(
        `${api}/api/classrooms`,
        'GET',
        null
      )

      this.setClassrooms(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default ClassroomsStore