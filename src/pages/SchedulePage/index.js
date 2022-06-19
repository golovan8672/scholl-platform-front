import React, { Component } from 'react';
import {inject} from 'mobx-react';
import ScheduleView from './ScheduleView';
import ScheduleViewStudent from './ScheduleViewStudent'

@inject(({AuthStore, ScheduleStore}) => {
  return {
    user: AuthStore.user,
    schedules: ScheduleStore.schedule
  }
})

class ClassSettings extends Component {
  render() {
    const {
      user,
      schedules
    } = this.props;

    const schedule = schedules.find(({classNumber}) => classNumber === user.classNumber)

    const schedulePage = () => {
      switch (user.role) {
        case 'student':
          return <ScheduleViewStudent schedule={schedule} />
        default:
          return <ScheduleView schedule={schedule} />
      }
    }

    return (
      <React.Fragment>
        {schedulePage()}
      </React.Fragment>
    )
  }
}

export default ClassSettings;

