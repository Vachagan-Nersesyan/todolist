import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import HeaderComp from './components/HeaderComp'
import SearchComp from './components/SearchComp'
import TodoListComp from './components/TodoListComp'
import NewItemComp from './components/NewItemComp'


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
