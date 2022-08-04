import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {useActions} from "../../hooks/useActions";

export default function Header() {

    const { setBurgerActive } = useActions();

    const burgerOpen = () => {
        setBurgerActive(true)
    }

    return (
        <div className="header-container">
            <div className="nav">
                <a href="https://igo4-darwin-test.mbspreview.com/">
                    <img className='image'
                         src="https://igo4-darwin-test.mbspreview.com/app/dlg/assets/addons/dlg/dlg/darwin-theme/resources/img/logo.svg?v=1658754823"
                         alt="Logo"/></a>
                <ul className='nav-list'>
                    <CustomLink to='/'>Get a quote</CustomLink>
                    <CustomLink to='/make-a-claim'>Make a claim</CustomLink>
                    <CustomLink to='/faqs'>FAQs</CustomLink>
                    <CustomLink to='/contact-us'>Contact Us</CustomLink>
                    <CustomLink to='/account'>My Account</CustomLink>
                </ul>
                <FiMenu onClick={burgerOpen} size='35px' className='burger-icon'/>
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
