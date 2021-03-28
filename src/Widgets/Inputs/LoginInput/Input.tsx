import React from 'react'
import './Input.css'

const LoginInput = ({ type, placeholder, icon, onChange, value, name, errors }: any) => {
    return (
        <div className="input-group input-group-icon">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} />
            <div className="input-icon"><i className={icon}></i></div>
            {errors && <p>{errors}</p>}
        </div>
    )
}

export default LoginInput