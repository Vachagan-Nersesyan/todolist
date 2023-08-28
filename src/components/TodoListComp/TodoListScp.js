import TodoListItemComp from './TodoListItemsComp/TodoListItemScp'
import './todolistStl.css'

function TodoListComp(props){

    const items = [
        {id:1,text:'Learn JS',important:true},
        {id:2,text:'Learn React',important:false},
        

    ]

    const data = items.map((val) => {
        return <TodoListItemComp key={val.id} text={val.text} important={val.important} />

    })

    return (
        <div className='to_do_list_section'>
            {data}
        </div>
    )
}


export default TodoListComp