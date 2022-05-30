import {configure} from 'mobx';
import Auth from '../stores/Auth/Auth';
import Chats from '../stores/Chat/Chat';
import Classrooms from '../stores/Classrooms/Classrooms';
import Moderators from '../stores/Moderators/Moderators';
import Students from '../stores/Students/Students'
import Teachers from '../stores/Teachers/Teachers';

configure({enforceActions: 'observed'});

export default function configureStore() {
  const AuthStore = new Auth();
  const StudentsStore = new Students()
  const TeachersStore = new Teachers()
  const ModeratorsStore = new Moderators()
  const ClassroomsStore = new Classrooms()
  const ChatsStore = new Chats()

  return {
    stores: {
      AuthStore,
      StudentsStore,
      TeachersStore,
      ModeratorsStore,
      ClassroomsStore,
      ChatsStore
    }
  };
}