import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const Header = () => {
    let navitems = [{
        to: "/",
        text:"Task1"
    },{
        to: '/task2',
        text: 'Task2',

    },
    {
        to: '/template',
        text: 'Template',

    }]
    return (
        <div className="layout" >
            {navitems.map((nav, i) => {
                const { to, text } = nav
                return (
                    <div key={i} className="layout__item" >
                        <Link to={to}>{text}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Header
