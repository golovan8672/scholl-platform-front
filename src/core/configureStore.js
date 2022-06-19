import {configure} from 'mobx';
import Auth from '../stores/Auth/Auth';
import Chats from '../stores/Chat/Chat';
import Classrooms from '../stores/Classrooms/Classrooms';
import Moderators from '../stores/Moderators/Moderators';
import Students from '../stores/Students/Students'
import Teachers from '../stores/Teachers/Teachers';
import Schedule from '../stores/Shedule/Schedule'
import Tasks from '../stores/Task/Task'
import Homeworks from '../stores/Homework/Homework'

configure({enforceActions: 'observed'});

export default function configureStore() {
  const AuthStore = new Auth();
  const StudentsStore = new Students()
  const TeachersStore = new Teachers()
  const ModeratorsStore = new Moderators()
  const ClassroomsStore = new Classrooms()
  const ChatsStore = new Chats()
  const ScheduleStore = new Schedule()
  const TasksStore = new Tasks()
  const HomeworksStore = new Homeworks()

  return {
    stores: {
      AuthStore,
      StudentsStore,
      TeachersStore,
      ModeratorsStore,
      ClassroomsStore,
      ChatsStore,
      ScheduleStore,
      TasksStore,
      HomeworksStore
    }
  };
}