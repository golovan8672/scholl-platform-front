import React, { Component } from 'react';
import {inject} from 'mobx-react';
import ClassChatView from './ClassChatView';
import { toJS } from 'mobx';
import { Navigate } from 'react-router-dom';

@inject(({StudentsStore, TeachersStore, AuthStore, ChatsStore}) => {
  return {
    students: StudentsStore.students,
    teachers: TeachersStore.teachers,
    user: AuthStore.user,
    getChat: ChatsStore.getChat,
    chat: ChatsStore.chat,
    addMessage: ChatsStore.addMessage
  }
})

class ClassChat extends Component {

  componentDidMount() {
      this.props.getChat(this.props.user.classNumber)
  }  

  render() {
    const {
      students,
      teachers,
      user,
      chat,
      addMessage
    } = this.props;

    if (!user.classNumber) return <Navigate to={'/'} />

    return (
      <React.Fragment>
        <ClassChatView
          students={students}
          teachers={teachers}
          user={user}
          chat={chat}
          addMessage={addMessage}
        />
      </React.Fragment>
    )
  }
}

export default ClassChat;

