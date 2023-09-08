import { FaTrashCan, FaInfo, FaCheck ,FaArrowRotateLeft} from 'react-icons/fa6'
import './todolistitemStl.css'
import { Component } from 'react'

class TodoListItemComp extends Component {

    // constructor(props){
    //     super(props)
    //     debugger
    // }


    state = {
        text: '',
        inpTp : true
    }

    

    editItemFunc(e){
        
        this.setState({
            text : e.target.value

        })
    }

    changeStlFunc(boolTp,id){
        this.setState({
            inpTp : !boolTp,
        })
        if(this.state.inpTp === false ){
            this.props.functionsObj.changeTextFunc(this.state.text,id)
        }
    }



    render() {

        
        const { id, val , functionsObj} = this.props

        const textStyle = {
            textDecoration: val.isDone ? 'line-through' : 'none',
            color: val.isDone ? 'white' : val.important ? '#f4a261' : 'black',
        }

        const textBckColorStyle = {
            backgroundColor: val.isDone ? '#c44536' : val.important ? '#2a9d8f' : '#edddd4'
        }


        return (
            <div style={textBckColorStyle} className='to_do_list_item_section_content' >
                <div className='to_do_list_item_section_content_first_item'>
                    {
                        this.state.inpTp ? <div className='to_do_list_item_section_content_first_item_in_item' style={textStyle}>{val.text}</div>  : <div>
                            <input className='to_do_list_item_section_content_first_itm_inp' onChange={(e) => this.editItemFunc(e)} />
                        </div>

                    }

                </div>
                <div className='to_do_list_item_section_content_secibd_item'>
                    <div className='to_do_list_item_section_content_secibd_item_in_1_0_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button  onClick={() => this.changeStlFunc(this.state.inpTp,id)}> <FaArrowRotateLeft /></button>
                    </div>

                    
                    <div className='to_do_list_item_section_content_secibd_item_in_1_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button onClick={() => functionsObj.removeItem(id)} > <FaTrashCan /></button>
                    </div>
                    <div className='to_do_list_item_section_content_secibd_item_in_2_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button><FaInfo onClick={() => functionsObj.isImportantFunc(id)} /></button>
                    </div>

                    <div className='to_do_list_item_section_content_secibd_item_in_3_item to_do_list_item_section_content_secibd_item_in_item'>
                        <button onClick={() => functionsObj.onDoneFunc(id)}><FaCheck /></button>
                    </div>

                </div>

            </div>
        )
    }

}


export default TodoListItemComp