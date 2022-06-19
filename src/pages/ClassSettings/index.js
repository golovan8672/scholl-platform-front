import React, { Component } from 'react';
import {inject} from 'mobx-react';
import ClassSettingsView from './ClassSettingsView';

@inject(({ClassroomsStore, StudentsStore, TeachersStore, ScheduleStore}) => {
  return {
    students: StudentsStore.students,
    addStudentInClass: StudentsStore.addStudentInClass,
    teachers: TeachersStore.teachers,
    classrooms: ClassroomsStore.classrooms,
    addTeacherInClass: TeachersStore.addTeacherInClass,
    deleteStudentIntoClass: StudentsStore.deleteStudentIntoClass,
    deleteTeacherIntoClass: TeachersStore.deleteTeacherIntoClass,
    schedule: ScheduleStore.schedule,
    addSchedule: ScheduleStore.addSchedule,
    updateSchedule: ScheduleStore.updateSchedule
  }
})

class ClassSettings extends Component {
  render() {
    const {
      students,
      teachers,
      classrooms,
      addStudentInClass,
      addTeacherInClass,
      deleteStudentIntoClass,
      deleteTeacherIntoClass,
      schedule,
      addSchedule,
      updateSchedule
    } = this.props;

    return (
      <React.Fragment>
        <ClassSettingsView
          students={students}
          teachers={teachers}
          classrooms={classrooms}
          addStudentInClass={addStudentInClass}
          addTeacherInClass={addTeacherInClass}
          deleteStudentIntoClass={deleteStudentIntoClass}
          deleteTeacherIntoClass={deleteTeacherIntoClass}
          schedules={schedule}
          addSchedule={addSchedule}
          updateSchedule={updateSchedule}
        />
      </React.Fragment>
    )
  }
}

export default ClassSettings;

