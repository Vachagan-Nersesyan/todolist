import './NumbersCompStle.css'


const HeaderNumberComp = ({done,important}) =>{
    
    return (
        <div className='header_number_content_section'>
            <div className='header_number_content_section_container'>
                <div className='header_number_content_section_container_in_item_1'>
                    Done : {done.length}
                </div>
                <div className='header_number_content_section_container_in_item_1'>
                    Important : {important.length}
                </div>
            </div>
        </div>
    )
}

export default HeaderNumberComp