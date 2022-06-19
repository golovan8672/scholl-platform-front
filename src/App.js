import React from 'react'
import { Routes, Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react';
import Menu from './pages/Menu';
import Login from './auth/';
import configureStore from './core/configureStore'
import StyleContext from 'isomorphic-style-loader/StyleContext';
import AllUsersPage from './pages/AllUsersPage'
import ClassSettings from './pages/ClassSettings'
import ClassChat from './pages/ClassChat';
import Tasks from './pages/TasksPages'
import Schedule from './pages/SchedulePage'
import AddTaskView from './pages/TasksPages/AddTask';
import Task from './pages/TasksPages/TaskItem'
import TaskGrade from './pages/TasksPages/TaskGrade';

const App = () => {
  const { stores } = configureStore();
const AppContext = {
  insertCss: (...styles) => {
    const removeCss = styles.map((style) => style._insertCss());

    return () => removeCss.forEach((dispose) => dispose());
  }
};



  return (
    <StyleContext.Provider value={AppContext}>
      <Provider {...stores}>
          <BrowserRouter>
            <Routes>
                  <Route path={'/'} element={<Login />} />
                  <Route path={'/menu'} element={<Menu />} />
                  <Route path={'/classSettings'} element={<ClassSettings />} />
                  <Route path={'/allUsers'} element={<AllUsersPage />} />
                  <Route path={'/classChat'} element={<ClassChat />} />
                  <Route path={'/schedule'} element={<Schedule />} />
                  <Route path={'/tasks'} element={<Tasks />} />
                  <Route path={'/addTask'} element={<AddTaskView />} />
                  <Route path={'/task/:tasksId'} element={<Task />} />
                  <Route path={'/homework/:homeworkId'} element={<TaskGrade />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  )
}

export default App