import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import HeaderComp from './components/HeaderComp'
import SearchComp from './components/SearchComp'
import TodoListComp from './components/TodoListComp'
import NewItemComp from './components/NewItemComp'



class App extends Component {

  state = {

    items: [
      { id: 1, text: 'Learn JS', important: true, isDone: false, isError: false },
      { id: 2, text: 'Learn React', important: false, isDone: false, isError: false },


    ],

    term: '',
    filterTpText : ''
  }

  functionsObj = {
    onDoneFunc: (id) => {



      let copyState = { ...this.state }

      copyState.items[id].isDone = (copyState.items[id].isDone) ? false : true

      this.setState({
        items: copyState.items
      })

    },
    isImportantFunc: (id) => {


      let copyState = { ...this.state }

      copyState.items[id].important = (copyState.items[id].important) ? false : true

      this.setState({
        items: copyState.items
      })
    },
    onAddItem: (str) => {


      const id = this.state.items.length ? this.state.items[this.state.items.length - 1].id + 1 : 1

      const newItem = {
        text: str,
        important: false,
        id
      }

      this.setState((prevState) => {
        return {
          items: [...prevState.items, newItem],
        }
      })

    },

    removeItem: (id) => {

      let itemsClone = [...this.state.items]
      itemsClone.splice(id, 1)
      this.setState({
        items: itemsClone,
        origArr: itemsClone

      })
    },
    changeTextFunc: (str, id) => {

      let itemCloneArr = [...this.state.items]
      itemCloneArr[id].text = str
      this.setState({
        items: itemCloneArr
      })
    },

    handleSearch: (items, term) => {



      if (term.trim().length === 0) {
        return items

      }

      return items.filter((val) => {
        return val.text.toLowerCase().indexOf(term.toLowerCase()) > -1
      })




    },

    onSearch: (term) => {

      this.setState({
        term,
      })

    },

    filterTpFunc : (filterTpText) => {
      this.setState({
        filterTpText
      })
    },

    filterItemsFunc: (filterItmsArr,filterTp) => {


      switch (filterTp) {
        case 'all': {
          return filterItmsArr.filter((val) => val)
        }

        case 'isDone': {
          return filterItmsArr.filter((val) => val.isDone === true)
        }

        case 'important': {
          return filterItmsArr.filter((val) => val.important === true)
        }

        default : {return filterItmsArr}
      }

    },

  }




  render() {

    const { items, term } = this.state



    const visibleItems = this.functionsObj.handleSearch(items, term)
    const visibleItemsOrig = this.functionsObj.filterItemsFunc(visibleItems,this.state.filterTpText)



    let doneItems = this.state.items.filter((val) => val.isDone === true )
    let importantItems = this.state.items.filter((val) => val.important === true && val.isDone === false)

    return (
      <div className="App">
        <HeaderComp done={doneItems} important={importantItems} />
        <SearchComp functionsObj={this.functionsObj} />
        <TodoListComp functionsObj={this.functionsObj} items={visibleItemsOrig} />
        <NewItemComp functionsObj={this.functionsObj} />
      </div>
    );
  }
}




export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
