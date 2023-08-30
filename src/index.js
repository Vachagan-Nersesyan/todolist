import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import HeaderComp from './components/HeaderComp/HeaderScp'
import SearchComp from './components/SearchComp/SearchScp'
import TodoListComp from './components/TodoListComp/TodoListScp'
import NewItemComp from './components/NewItemComp/NewItemCompScp'


function App() {


  const items = [
    { id: 1, text: 'Learn JS', important: true },
    { id: 2, text: 'Learn React', important: false },


  ]

  return (
    <div className="App">
      <HeaderComp />
      <SearchComp />
      <TodoListComp items={items} />
      <NewItemComp />
    </div>
  );
}




export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
