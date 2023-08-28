import React from 'react';
import './App.css';

import HeaderFuncComponent from './components/HeaderComp/HeaderScp'
import SearchFuncComponent from './components/SearchComp/SearchScp'
import TodoListFuncComponent from './components/TodoListComp/TodoListScp'
import UserFuncComponent from './components/UsersComp/UserCompScp'


function App() {

  const users = [
    { name: 'John', age: 25, status: true },
    { name: 'Bob', age: 30, status: false },
    { name: 'Tom', age: 20, status: true },
    { name: 'Sam', age: 28, status: false },
    { name: 'Ann', age: 24, status: true },
  ]



  return (
    <div className="App">
        <HeaderFuncComponent />
        <SearchFuncComponent />
        <TodoListFuncComponent />
        <UserFuncComponent usersComp={users} />
    </div>
  );
}




export default App;
