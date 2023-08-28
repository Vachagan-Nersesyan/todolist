import './newitemcompStl.css'
import ItmButtonComp from './ItmButtonComp/ButtonCompScp'


const NewItemComp = (props) => {
    return (
        <div className='item_section_content'>
            <div className='item_section_content_in_item_1'>
                <input placeholder='Write text...'/>

            </div>
            <div className='item_section_content_in_item_2'>
                <ItmButtonComp />
            </div>
        </div>
    )
}

export default NewItemComp