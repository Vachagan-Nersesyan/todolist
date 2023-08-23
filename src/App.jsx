import React from 'react';
import './App.css';

import HeaderFuncComponent from './components/HeaderComp/HeaderScp'
import SearchFuncComponent from './components/SearchComp/SearchScp'
import TodoListFuncComponent from './components/TodoListComp/TodoListScp'

function App() {
  return (
    <div className="App">
        <HeaderFuncComponent />
        <SearchFuncComponent />
        <TodoListFuncComponent />
    </div>
  );
}

export default App;
