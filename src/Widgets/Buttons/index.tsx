import React from 'react'
import './index.css'
interface Props {
    size: string,
    text: string,
    marginTop: string,
}

const SubmitButton = ({ size, text, marginTop }: Props) => {
    return (
        <button style={{ width: size, marginTop: marginTop }} className='form-input-btn' type='submit'>
            {text}
        </button>
    )
}

export default SubmitButton
