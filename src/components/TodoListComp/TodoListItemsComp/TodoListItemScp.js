import { FaTrashCan, FaInfo, FaCheck } from 'react-icons/fa6'
import './todolistitemStl.css'
import { Component } from 'react'

class TodoListItemComp extends Component {

    // constructor(props){
    //     super(props)
    //     debugger
    // }


    state = {
        isDone : false, 
        isImportant : this.props.important
    }

    onDone(){
        this.setState({
            isDone : !this.state.isDone,
        })
    }


    isImportant(){
        
        
        this.setState({
            isImportant : !this.state.isImportant
        })
    }

    

    render() {
         
        const { text , removeItem ,id } = this.props

        const textStyle = {
            textDecoration : this.state.isDone ? 'line-through' : 'none',
            color : this.state.isDone ? 'white' : this.state.isImportant ? '#f4a261' : 'black',
        }

        const textBckColorStyle = {
            backgroundColor : this.state.isDone ? '#c44536' : this.state.isImportant ? '#2a9d8f' : '#edddd4'
        }


        return (
            <div style={textBckColorStyle} className='to_do_list_item_section_content' >
                <div className='to_do_list_item_section_content_first_item'>
                    <div className='to_do_list_item_section_content_first_item_in_item'  style={textStyle}>{text}</div>

                </div>
                <div className='to_do_list_item_section_content_secibd_item'>
                    <div className='to_do_list_item_section_content_secibd_item_in_1_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button  onClick={() => removeItem(id)} > <FaTrashCan /></button>
                    </div>
                    <div className='to_do_list_item_section_content_secibd_item_in_2_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button><FaInfo onClick={() => this.isImportant()} /></button>
                    </div>

                    <div className='to_do_list_item_section_content_secibd_item_in_3_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button onClick={() => this.onDone(text)}><FaCheck /></button>
                    </div>

                </div>

            </div>
        )
    }

}


export default TodoListItemComp