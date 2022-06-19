import React, { Component } from 'react';
import {inject} from 'mobx-react';
import AddTaskView from './AddTaskView';

@inject(({ClassroomsStore, AuthStore, TasksStore}) => {
  return {
    classrooms: ClassroomsStore.classrooms,
    user: AuthStore.user,
    addTask: TasksStore.addTask
  }
})


class AddTask extends Component {
  render() {

    const {user, classrooms, addTask} = this.props
    
    const classNumbers = classrooms.map(({classNumber}) => classNumber)

    return (
      <React.Fragment>
        <AddTaskView classNumbers={classNumbers} user={user} addTask={addTask} />
      </React.Fragment>
    )
  }
}

export default AddTask;

