import { Component } from 'react'
import './ValidatorsCompStl.css'




class ValidatorsComp extends Component {


    render() {

        let {messageText} = this.props

        return (
            <div className='validator_content'>
                {messageText}
            </div>
        )
    }
}

export default ValidatorsComp