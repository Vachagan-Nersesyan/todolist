import React from 'react';
import './App.css';

import HeaderFuncComponent from './components/HeaderComp/HeaderScp'
import SearchFuncComponent from './components/SearchComp/SearchScp'
import TodoListFuncComponent from './components/TodoListComp/TodoListScp'
import NewItemFuncComp from './components/NewItemComp/NewItemCompScp'

function App() {


  return (
    <div className="App">
        <HeaderFuncComponent />
        <SearchFuncComponent />
        <TodoListFuncComponent />
        <NewItemFuncComp />
    </div>
  );
}




export default App;
