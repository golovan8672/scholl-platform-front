import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';

class StudentsStore {
  @observable students = {}
  
  
  constructor() {
      makeObservable(this);

      autorun(() => this.getStudents())
    }
    

  @action setStudents = (students) => {
    this.students = students
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


  addStudentInClass = async (id, classNumber) => {
    console.log(id, classNumber)
    try {
      console.log(id, classNumber)
      await this.request(`${api}/api/student/${id}/addStudentInClassroom`, 'POST', {classNumber})
      
      this.getStudents()
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  deleteStudentIntoClass = async (id) => {
    try {
      await this.request(`${api}/api/student/${id}/deleteStudentIntoClass`, 'DELETE')
      
      this.getStudents()
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  getStudents = async () => {
    try {
      const data = await this.request(
        `${api}/api/users/students`,
        'GET',
        null
      )

      this.setStudents(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default StudentsStore