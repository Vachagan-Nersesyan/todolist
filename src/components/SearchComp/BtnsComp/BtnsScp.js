import './BtnsStl.css'


const BtnsComp = (props) => {
    return (
        <div className='btns_section_content'>
            <div className='btns_section_content_frst_btn btns_section_content_container_in_item_stl'>
                <button>All</button>
            </div>
            <div className='btns_section_content_scnd_btn btns_section_content_container_in_item_stl'>
                <button>Done</button>
            </div>
            <div className='btns_section_content_thrd_btn btns_section_content_container_in_item_stl'>
                <button>Important</button>
            </div>

        </div>
    )
}


export default BtnsComp