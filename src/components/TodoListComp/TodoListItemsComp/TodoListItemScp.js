 
const TodoListItemFuncComp = ({text,important}) => {

    const style = {
        color : important ? 'red' : 'black'
    }

    return(
        <li style={style}>{text}</li>
    )

}


export default TodoListItemFuncComp