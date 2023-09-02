import { Component } from 'react'
import HeaderNumberComp from './HeaderNumbersComp/NumbersCompScp'

import './headerStl.css'


class HeaderComp extends Component{
    render(){
        return (
            <div className='header_section'>
                <div className='header_section_title'>
                    My Todo List
                </div>
    
                <div className='header_section_numbers'>
                    <HeaderNumberComp {...this.props} />
                </div>
            </div>
        )
    }
}


export default HeaderComp