import React, { useState } from 'react';

import Divider from './divider';
import './Header.css';
import Logo from './Logo';
import Profile from './Profile';
import Spacer from './Spacer';
import './Header.css';
import Cart from './Cart';

const Header = ({ myCart, setCart, isNarrowScreen }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <header>
                <nav
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {isNarrowScreen ? (
                        <>
                            <div
                                onClick={() => setIsDrawerOpen(true)}
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    paddingTop: '20px',
                                    marginLeft: '20px',
                                }}
                            >
                                <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
                                        fill='#69707D'
                                        fillRule='evenodd'
                                    />
                                </svg>
                            </div>
                        </>
                    ) : null}
                    <Logo isNarrowSize={isNarrowScreen}></Logo>
                    <div
                        className='navigation'
                        style={{
                            display: (!isDrawerOpen && isNarrowScreen) ? 'none' : 'flex',
                            zIndex: 1
                        }}
                    >
                        {isNarrowScreen ? (
                            <div
                                onClick={() => setIsDrawerOpen(false)}
                                style={{
                                    padding: '20px',
                                    cursor: 'pointer',
                                }}
                            >
                                <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                                        fill='#69707D'
                                        fillRule='evenodd'
                                    />
                                </svg>
                            </div>
                        ) : null}
                        <NavItem href='#'>Collections</NavItem>
                        <NavItem href='#'>Men</NavItem>
                        <NavItem href='#'>Women</NavItem>
                        <NavItem href='#'>About</NavItem>
                        <NavItem href='#'>Contact</NavItem>
                    </div>
                    <Spacer></Spacer>
                    <Cart myCart={myCart} setCart={setCart} isNarrowScreen={isNarrowScreen}></Cart>
                    <Profile img={'/images/image-avatar.png'}></Profile>
                </nav>
                {isNarrowScreen ? null : <Divider></Divider>}
            </header>
        </>
    );
};

function NavItem({ children, link }) {
    return (
        <>
            <a href={link} className={'nav-item'}>
                {children}
            </a>
        </>
    );
}

export default Header;
