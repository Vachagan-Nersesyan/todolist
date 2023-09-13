import { Component } from 'react'
import BtnsComp from './BtnsComp/BtnsScp'

import './searchStl.css'

class SearchComp extends Component {

    

    
    state = {
        term : ''
    }

    onSearchChange = (e) => {
        this.setState({
            term : e.target.value
        })

        this.props.functionsObj.onSearch(e.target.value)
    }



    

    render(){
        return (
            <div className='search_content_section'>
                <div className='search_content_section_first_content'>
                    <input onChange={this.onSearchChange} type='text' value={this.state.term} placeholder='Type text for search ...' />
    
                </div>
                <div className='search_content_section_item_3'>
                    <BtnsComp functionsObj={this.props.functionsObj} />
                </div>
                
    
            </div>
        )
    }
}


export default SearchComp