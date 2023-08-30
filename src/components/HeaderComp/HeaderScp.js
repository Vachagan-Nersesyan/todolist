import HeaderNumberComp from './HeaderNumbersComp/NumbersCompScp'

import './headerStl.css'


function HeaderComp(props){
    return (
        <div className='header_section'>
            <div className='header_section_title'>
                My Todo List
            </div>

            <div className='header_section_numbers'>
                <HeaderNumberComp />
            </div>
        </div>
    )
}


export default HeaderComp