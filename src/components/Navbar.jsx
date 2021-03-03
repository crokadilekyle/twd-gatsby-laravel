import React, {useState} from 'react'
import NavLink from './NavLink'

function Navbar() {
    const [show, setShow] = useState(false);

    const handleShow = (e) => {
        if (e.keyCode === 13) {
            setShow(!show);
        }
        if (e.type === 'click') {
            setShow(!show);
        }
    }

    return (
        <nav className="bg-twd-purple">
            <div className={`container mx-auto flex content-center text-white w-full py-4 text-left`}>
                <ul className={`${show === false && 'hidden' } flex-col content-end sm:flex sm:flex-row justify-end w-full`}>
                    <NavLink to="/" text="Twin Web Development" className="flex-grow"/>
                    <NavLink to="/blog" text="Blog" />
                    <NavLink to="/projects" text="Projects" />
                    <NavLink to="/contact" text="Hire Me" />
                </ul>
                <i className="ml-auto mr-4 sm:hidden" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" onClick={handleShow} tabIndex="-1" onKeyDown={handleShow}>
                        <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </i>
            </div>
        </nav>
    )
}

export default Navbar
