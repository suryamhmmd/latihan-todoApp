import React, { Component } from 'react'
import Button from './Button'
import '../styles/EditModal.css'

class DeleteModal extends Component {
    
    render() {  
        const delById = id => {
            this.props.del(id)
        }
        if(this.props.delete){ 
            return (
                <div className='modal-container'>
                    <div className='modal-box'>
                        <h3>Are you sure?</h3>
                        <div className='btn-group'>
                            <Button text='Yes' variant='primary' action={() => delById}/>
                            <Button text='Cancel' variant='warning' action={this.props.close}/>
                        </div>
                    </div>   
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default DeleteModal
