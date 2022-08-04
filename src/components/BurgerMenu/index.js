import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import {useActions} from "../../hooks/useActions";

export default function BurgerMenu () {
    const { setBurgerActive } = useActions();
    const burgerClose = () => {
        setBurgerActive(false)
    }
    return (
        <div className='burger-container'>
            <IoCloseOutline onClick={burgerClose} className='icon-close' size='40px' color='white'/>
            <div className='burger-wrapper'>
                <ul className='burger-nav'>
                    <CustomLink to='/'>Get a quote</CustomLink>
                    <CustomLink to='/make-a-claim'>Make a claim</CustomLink>
                    <CustomLink to='/faqs'>FAQs</CustomLink>
                    <CustomLink to='/contact-us'>Contact Us</CustomLink>
                    <CustomLink to='/account'>My Account</CustomLink>
                </ul>
            </div>
        </div>
    );
};

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const isAccount = resolvedPath.pathname === '/account'
    return (
        <li className='nav-list__item'>
            <Link className={`nav-list__item ${isActive && !isAccount ? 'active' : ''} ${isAccount ? 'account' : 'link'} `} to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}