import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import HeaderComp from './components/HeaderComp'
import SearchComp from './components/SearchComp'
import TodoListComp from './components/TodoListComp'
import NewItemComp from './components/NewItemComp'


class App extends Component {

  state = {
    items : [
      { id: 1, text: 'Learn JS', important: true },
      { id: 2, text: 'Learn React', important: false },
  
  
    ]
  }

  onAddItem = (str) =>{
    const newItem = {
      text : str,
      important : false,
      id : this.state.items[this.state.items.length - 1].id + 1
    }

    this.setState((prevState) => {
      return {
        items : [...prevState.items,newItem]
      }
    })

  }

  removeItem = (id) => {
    
    let itemsClone = [...this.state.items]
    itemsClone.splice(id,1)
    this.setState({
        items : itemsClone
      
    })
  }

  render(){
    
    return (
      <div className="App">
        <HeaderComp done={16} important={25} />
        <SearchComp />
        <TodoListComp removeItem={this.removeItem} items={this.state.items}  />
        <NewItemComp onAddItem={this.onAddItem} />
      </div>
    );
  }
}




export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
