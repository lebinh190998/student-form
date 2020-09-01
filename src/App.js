import React, { Fragment } from 'react';
import InputForm from './components/InputForm';
import StudentList from './components/StudentList';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <InputForm />
        <StudentList />
      </Fragment>
    </Provider>
  );
}

export default App;
