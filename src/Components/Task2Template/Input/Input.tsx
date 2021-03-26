import React from 'react'

interface InputProps {
    type: string, placeholder: string, icon: string
}

const Input = ({ type, placeholder, icon }: InputProps) => {
    return (
        <div className="input-group input-group-icon">
            <input type={type} placeholder={placeholder} />
            <div className="input-icon"><i className={icon}></i></div>
        </div>
    )
}

export default Input
