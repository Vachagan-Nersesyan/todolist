import { Component } from 'react'

import './newitemcompStl.css'
import ItmButtonComp from './ItmButtonComp/ButtonCompScp'

import { ErrorMessagesFuncComp } from '../ErrorMessageComp/ErrorMessageScp'

import { validateInput } from '../../utils/validator'


class NewItemComp extends Component {

    state = {
        valueStr: '',
        messageTp: '',

        isErrorOrNot: false
    }

    valueChangeFunc(str) {

        this.setState({
            valueStr: str.target.value
        })

    }

    isValidFunc() {


        if (validateInput(this.state.valueStr)) {
            this.setState({ isErrorOrNot: true })
            return
        } else {
            this.setState({
                isErrorOrNot: false,
                valueStr: ''
            })
            this.props.functionsObj.onAddItem(this.state.valueStr)

        }


    }




    render() {



        return (
            <div className='item_section_content_in_ovrl'>
                {
                    this.state.isErrorOrNot ? <ErrorMessagesFuncComp /> : null
                }
                <div className='item_section_content'>

                    <div className='item_section_content_in_item_1'>
                        <input onChange={(e) => this.valueChangeFunc(e)} value={this.state.valueStr} placeholder='Write text...' />

                    </div>
                    <div className='item_section_content_in_item_2'>
                        <ItmButtonComp isValidFunc={() => this.isValidFunc()} />
                    </div>

                </div>
            </div>
        )
    }
}

export default NewItemComp