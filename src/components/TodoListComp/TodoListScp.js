import { Component } from 'react'
import TodoListItemComp from './TodoListItemsComp/TodoListItemScp'
import './todolistStl.css'

class TodoListComp extends Component {


    render() {

        const { items } = this.props

        const data = items.map((val) => {
            return <TodoListItemComp key={val.id} text={val.text} important={val.important} />

        })

        return (
            <div className='to_do_list_section'>
                {data}
            </div>
        )
    }
}


export default TodoListComp