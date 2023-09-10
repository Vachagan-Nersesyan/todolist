import { Component } from 'react'
import TodoListItemComp from './TodoListItemsComp/TodoListItemScp'
import './todolistStl.css'

class TodoListComp extends Component {


    render() {

        const { items ,functionsObj} = this.props

        

        const data = items.map((val, ind) => {
            return <TodoListItemComp
                key={val.id}
                val={val}
                id={ind}
                functionsObj={functionsObj}
            />

        })

        return (
            <div className='to_do_list_section'>
                {data}
            </div>
        )
    }
}


export default TodoListComp