import React, { Component } from 'react';
import {inject} from 'mobx-react';
import ClassChatView from './ClassChatView';
import { toJS } from 'mobx';

@inject(({StudentsStore, TeachersStore, AuthStore, ChatsStore}) => {
  return {
    students: StudentsStore.students,
    teachers: TeachersStore.teachers,
    user: AuthStore.user,
    getChat: ChatsStore.getChat,
    chat: ChatsStore.chat
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
      chat 
    } = this.props;


    console.log(toJS(chat))

    return (
      <React.Fragment>
        <ClassChatView
          students={students}
          teachers={teachers}
          user={user}
          chat={chat}
        />
      </React.Fragment>
    )
  }
}

export default ClassChat;

