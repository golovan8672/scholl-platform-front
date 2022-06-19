import React, { Component } from 'react';
import {inject} from 'mobx-react';
import TasksStudentItem from './TaskStudentItemView'; 
import TaskTeacherItemView from './TaskTeacherItemView'

@inject(({AuthStore, TasksStore, HomeworksStore, StudentsStore}) => {
    return {
        user: AuthStore.user,
        tasks: TasksStore.tasks,
        addHomework: HomeworksStore.addHomework,
        homeworks: HomeworksStore.homeworks,
        students: StudentsStore.students
    }
})
class TaskItem extends Component {
    render() {
        
    const {user, tasks, addHomework, homeworks, students} = this.props

    const homeworkPage = () => {
        switch (user.role) {
          case 'student':
          return <TasksStudentItem tasks={tasks} user={user} addHomework={addHomework} homeworks={homeworks} />
          default:
          return <TaskTeacherItemView tasks={tasks} students={students} homeworks={homeworks} />
        }
      }
    

    return (
      <React.Fragment>
        {homeworkPage()}
      </React.Fragment>
    )
  }
}

export default TaskItem;

