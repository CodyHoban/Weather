import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';
import {Provider} from 'react-redux';
import store from './Components/store';


function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
