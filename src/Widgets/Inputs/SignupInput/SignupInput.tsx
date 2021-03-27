import React from 'react'
import './SignupInput.css'
const SignupInput = (props: any) => {
    const { onChange, value, placeholder, name, type, errors, label } = props
    return (
        <div className='form-inputs'>
            <label className='form-label'>{label}</label>
            <input
                className='form-input'
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {errors && <p>{errors}</p>}
        </div>
    )
}

export default SignupInput
