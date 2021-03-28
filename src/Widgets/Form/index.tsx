import React from 'react'

const Form = ({ children, onSubmit }: any) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            {children}
        </form>
    )
}

export default Form
