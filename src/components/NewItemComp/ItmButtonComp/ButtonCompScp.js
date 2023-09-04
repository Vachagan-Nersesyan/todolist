import './buttoncompStl.css'

const ItmButtonComp = (props) => {
    return (
        <div className='adding_itm_section'>
            <button onClick={props.isValidFunc}>Click to add</button>  
        </div>
    )
}


export default ItmButtonComp