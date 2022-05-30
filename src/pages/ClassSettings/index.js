import React, { Component } from 'react';
import {inject} from 'mobx-react';
import ClassSettingsView from './ClassSettingsView';

@inject(({ClassroomsStore, StudentsStore, TeachersStore}) => {
  return {
    students: StudentsStore.students,
    addStudentInClass: StudentsStore.addStudentInClass,
    teachers: TeachersStore.teachers,
    classrooms: ClassroomsStore.classrooms,
    addTeacherInClass: TeachersStore.addTeacherInClass,
    deleteStudentIntoClass: StudentsStore.deleteStudentIntoClass,
    deleteTeacherIntoClass: TeachersStore.deleteTeacherIntoClass
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
      deleteTeacherIntoClass
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
        />
      </React.Fragment>
    )
  }
}

export default ClassSettings;

