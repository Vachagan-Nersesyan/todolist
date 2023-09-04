import { Component } from 'react'

import './newitemcompStl.css'
import ItmButtonComp from './ItmButtonComp/ButtonCompScp'

import ValidatorsComp from '../ValidatosComp/ValidatorsCompScp'


class NewItemComp extends Component {

    state = {
        valueStr : '',
        isValid : true,
        messageTp : ''
    }
    
    valueChangeFunc(str){

        this.setState({
            valueStr : str.target.value
        })

    }

    isValidFunc(){

        
        if(!this.state.valueStr){
            this.setState({
                isValid : false,
                messageTp : 'errortp'
            })
        }else{
            this.setState({
                isValid : true,
            })

            this.props.onAddItem(this.state.valueStr)
            this.setState({valueStr : ''})

        }

        
    }

    


    render() {

        

        return (
            <div className='item_section_content_in_ovrl'>
                <div className='item_section_content'>
                    <div className='item_section_content_in_item_1'>
                        <input onChange={(e) => this.valueChangeFunc(e)} value={this.state.valueStr} placeholder='Write text...' />

                    </div>
                    <div className='item_section_content_in_item_2'>
                        <ItmButtonComp isValidFunc={() => this.isValidFunc()} />
                    </div>

                </div>
                <div className='item_section_in_sec_content'>
                    
                    {this.state.isValid ? null : <ValidatorsComp messageText='error'  />}
                </div>
            </div>
        )
    }
}

export default NewItemComp