import { Link } from 'gatsby'
import React from 'react'

function NavLink({to, text, className}) {
    return (
        <li className={`py-2 my-2 text-center sm:text-left sm:py-0 sm:mx-2 ${className && className}`}>
            <Link className='focus:border-0' to={ to }>{text}</Link>
        </li>
    )
}

export default NavLink
