import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Index';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Body from './component/Body';
import { Countries } from './component/Countries/Index/Countries';
import { Filter } from './component/Filter/Filter';
import { Routes,Route } from 'react-router';
import Country from './component/Country/Country';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Body/>
        <Navbar/>
        <Routes>
          <Route element={<Countries/>} path='/'/>
          <Route element={<Country/>} path='/country'/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
