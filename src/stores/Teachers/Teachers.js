import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';

class TeachersStore {
  @observable teachers = {}
  
  
  constructor() {
      makeObservable(this);

      autorun(() => this.getTeachers())
    }
    

  @action setTeachers = (teachers) => {
    this.teachers = teachers
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
addTeacherInClass = async (id, classNumber) => {
  try {
    await this.request(`${api}/api/teacher/${id}/addTeacherInClassroom`, 'POST', {classNumber})
    
    this.getTeachers()
  } catch (e) {
    console.log(e)
    console.error('Что-то пошло не так');
  }
}

deleteTeacherIntoClass = async (id) => {
  try {
    await this.request(`${api}/api/teacher/${id}/deleteTeacherIntoClass`, 'DELETE')
    
    this.getTeachers()
  } catch (e) {
    console.log(e)
    console.error('Что-то пошло не так');
  }
}

  getTeachers = async () => {
    try {
      const data = await this.request(
        `${api}/api/users/teachers`,
        'GET',
        null
      )

      this.setTeachers(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default TeachersStore