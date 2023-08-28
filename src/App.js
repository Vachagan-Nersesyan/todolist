import React from 'react';
import './App.css';

import HeaderComp from './components/HeaderComp/HeaderScp'
import SearchComp from './components/SearchComp/SearchScp'
import TodoListComp from './components/TodoListComp/TodoListScp'
import NewItemComp from './components/NewItemComp/NewItemCompScp'

function App() {


  return (
    <div className="App">
      <HeaderComp />
      <SearchComp />
      <TodoListComp />
      <NewItemComp />
    </div>
  );
}




export default App;
