import React from 'react'
import "./index.css"

const FormContainer = ({ children }: any) => {
    return (
        <div className='form-container'>
            {children}
        </div>
    )
}

export default FormContainer
