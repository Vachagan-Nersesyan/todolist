import BtnsComp from './BtnsComp/BtnsScp'
import './searchStl.css'

const SearchComp = (props) => {
    return (
        <div className='search_content_section'>
            <div className='search_content_section_first_content'>
                <input type='text' placeholder='Type text for search ...' />

            </div>
            <div className='search_content_section_item_3'>
                <BtnsComp />
            </div>

        </div>
    )
}


export default SearchComp