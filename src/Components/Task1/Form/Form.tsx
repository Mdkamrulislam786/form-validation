import React from 'react'
import './Form.css'
const Form = ({ onSubmit, children }: any) => {
    return (
        <form onSubmit={onSubmit} className='form' noValidate>
            {children}
        </form>
    )
}

export default Form
