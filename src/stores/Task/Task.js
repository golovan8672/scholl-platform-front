import { action, observable, makeObservable, autorun, toJS } from 'mobx';
import { api } from '../../config';

class TaskStore {
  @observable tasks = []
  
  
  constructor() {
      makeObservable(this);

      autorun(() => this.getTasks())
    }
    

  @action setTasks = (tasks) => {
    this.tasks = tasks
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


  addTask = async (taskData) => {
    console.log(taskData)
    try {
      const data = await this.request(`${api}/api/task/addTask`, 'POST', taskData)
      
      this.getTasks()
      alert(data.message)
    } catch (e) {
      console.log(e)
      console.error('Что-то пошло не так');
    }
  }

  getTasks = async () => {
    try {
      const data = await this.request(
        `${api}/api/task/getTasks`,
        'GET',
        null
      )

      this.setTasks(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default TaskStore