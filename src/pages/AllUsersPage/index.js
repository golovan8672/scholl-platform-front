import React, { Component } from 'react';
import {inject} from 'mobx-react';
import AllUsersPageView from './AllUsersPageView';

@inject(({StudentsStore, ModeratorsStore, TeachersStore}) => {
  return {
    students: StudentsStore.students,
    teachers: TeachersStore.teachers,
    moderators: ModeratorsStore.moderators
  }
})

class AllUsersPage extends Component {
  render() {
    const {
      students,
      teachers,
      moderators
    } = this.props;

    return (
      <React.Fragment>
        <AllUsersPageView
          students={students}
          teachers={teachers}
          moderators={moderators}
        />
      </React.Fragment>
    )
  }
}

export default AllUsersPage;

