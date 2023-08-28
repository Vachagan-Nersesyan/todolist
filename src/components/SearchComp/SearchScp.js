import {ButtonComp} from './ButtonComp/ButtonComp'


const SearchFuncComponent = (props) => {
    return (
        <div>
            <input type='text' placeholder='Type text for search ...' />
            

            <div>
                <ButtonComp color='red' btnText='Click to search'   />
            </div>
        
        </div>
    )
}


export default SearchFuncComponent