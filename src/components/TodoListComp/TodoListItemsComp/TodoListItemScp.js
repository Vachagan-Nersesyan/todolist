import './todolistitemStl.css'

const TodoListItemComp = ({ text, important }) => {

    return (
        <div className='to_do_list_item_section_content'>
            <div className='to_do_list_item_section_content_first_item'>
                <div className='to_do_list_item_section_content_first_item_in_item'>{text}</div>

            </div>
            <div className='to_do_list_item_section_content_secibd_item'>
                <div className='to_do_list_item_section_content_secibd_item_in_1_item to_do_list_item_section_content_secibd_item_in_item'>
                    <button>remove</button>
                </div>
                <div className='to_do_list_item_section_content_secibd_item_in_2_item to_do_list_item_section_content_secibd_item_in_item'>
                    <button>important</button>
                </div>

                <div className='to_do_list_item_section_content_secibd_item_in_3_item to_do_list_item_section_content_secibd_item_in_item'>
                    <button>change</button>
                </div>

            </div>

        </div>
    )

}


export default TodoListItemComp