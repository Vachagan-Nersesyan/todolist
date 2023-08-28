import {SearchButtonComp} from './SearchButtonComp/ButtonComp'
import './searchStl.css'

const SearchComp = (props) => {
    return (
        <div className='search_content_section'>
            <div className='search_content_section_item_1'>
                <input type='text' placeholder='Type text for search ...' />

            </div>
            

            <div className='search_content_section_item_2'>
                <SearchButtonComp btnText='Click to search'   />
            </div>
        
        </div>
    )
}


export default SearchComp