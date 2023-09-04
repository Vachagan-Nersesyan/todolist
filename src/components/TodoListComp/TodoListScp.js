import { Component } from 'react'
import TodoListItemComp from './TodoListItemsComp/TodoListItemScp'
import './todolistStl.css'

class TodoListComp extends Component {


    render() {

        const { items , removeItem } = this.props

        

        const data = items.map((val,ind) => {
            return <TodoListItemComp key={val.id} id={ind} removeItem={removeItem} valueid={ind} text={val.text} important={val.important}  />

        })

        return (
            <div className='to_do_list_section'>
                {data}
            </div>
        )
    }
}


export default TodoListComp