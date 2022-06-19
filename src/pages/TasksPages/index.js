import React, { Component } from 'react';
import {inject} from 'mobx-react';
import TasksStudentView from './TasksStudentView';
import TasksTeacherView from './TasksTeacherView';

@inject(({TasksStore, AuthStore, HomeworksStore}) => {
  return {
    tasks: TasksStore.tasks,
    user: AuthStore.user,
    homeworks: HomeworksStore.homeworks
  }
})


class TasksPage extends Component {
  render() {

    const {user, tasks, homeworks} = this.props

    const tasksPage = () => {
      switch (user.role) {
        case 'student':
          const classTasks = tasks.filter((task) => {
            if (task.classNumber === user.classNumber) {
               return task
            }
           })

           const studentHomeworks = homeworks.filter((homework) => {
            if (homework.student === user.fio) {
               return homework
            }
           })

          return <TasksStudentView tasks={classTasks} homeworks={studentHomeworks} />
        default:
          const teacherTasks = tasks.filter((task) => {
           if (task.teacher === user.fio) {
              return task
           }
          })

          return <TasksTeacherView
                   tasks={teacherTasks}
                 />
      }
    }

    return (
      <React.Fragment>
        {tasksPage()}
      </React.Fragment>
    )
  }
}

export default TasksPage;

