import { Component } from 'react'
import BtnsComp from './BtnsComp/BtnsScp'

import './searchStl.css'

class SearchComp extends Component {

    // props.functionsObj={this.functionsObj}

  


    searchInpValFunc(str){
        this.props.functionsObj.handleSearch(str.target.value)
    }

    

    render(){
        return (
            <div className='search_content_section'>
                <div className='search_content_section_first_content'>
                    <input onChange={(e) => this.searchInpValFunc(e)} type='text'  placeholder='Type text for search ...' />
    
                </div>
                <div className='search_content_section_item_3'>
                    <BtnsComp functionsObj={this.props.functionsObj} />
                </div>
                
    
            </div>
        )
    }
}


export default SearchComp