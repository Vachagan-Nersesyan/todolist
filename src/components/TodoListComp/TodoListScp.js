import TodoListItemFuncComp from './TodoListItemsComp/TodoListItemScp'

function TodoListFuncComponent(props){

    const items = [
        {text:'Learn JS',important:true},
        {text:'Learn React',important:false},

    ]

    const data = items.map((val) => {
        return <TodoListItemFuncComp text={val.text} important={val.important} />

    })

    return (
        <div>
            <ul>
                {data}
            </ul>
        </div>
    )
}


export default TodoListFuncComponent