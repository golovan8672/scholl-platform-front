import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';

class ScheduleStore {
  @observable schedule = []
  
  
  constructor() {
      makeObservable(this);

      autorun(() => this.getSchedules())
    }
    

  @action setSchedules= (schedule) => {
    this.schedule = schedule
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

  addSchedule = async (classNumber) => {
    try {
      const data = await this.request(`${api}/api/schedule/addSchedule`, 'POST', {classNumber})
      
      alert(data.message)
      this.getSchedules()
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  updateSchedule = async (scheduleId, day, subjects) => {
      console.log(day)
    try {
      const data = await this.request(`${api}/api/schedule/updateSchedule/${scheduleId}`, 'PUT', {day, subjects})
      
      alert(data.message)
      this.getSchedules()
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  getSchedules = async () => {
    try {
      const data = await this.request(
        `${api}/api/schedule/getSchedules`,
        'GET',
        null
      )

      console.log(data)

      this.setSchedules(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default ScheduleStore