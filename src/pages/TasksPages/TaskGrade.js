import React, { Component } from 'react';
import {inject} from 'mobx-react';
import TaskGradeView from './TaskGradeView';

@inject(({HomeworksStore}) => {
  return {
    homeworks: HomeworksStore.homeworks,
    setMark: HomeworksStore.setMark
  }
})


class AddTask extends Component {
  render() {

    const {homeworks, setMark} = this.props
    
    return (
      <React.Fragment>
        <TaskGradeView setMark={setMark} homeworks={homeworks} />
      </React.Fragment>
    )
  }
}

export default AddTask;

