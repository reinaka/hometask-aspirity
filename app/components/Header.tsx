'use client';

import { Logo } from './Logo';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from './DropdownMenu';

import currentUserData from '../../public/mockData/currentUserData';

export const Header = () => {
    const [isBurgerOpen, setisBurgerOpen] = useState(false);
    const avatarSrc = currentUserData.avatarSrc;

    return (
        <header className="py-6 flex flex-row justify-between">
            <Logo size="big"/>
            <DropdownMenu>
                <div className="flex flex-row items-center">
                    <DropdownMenuTrigger>
                        <div className="py-[6px] px-[16px] border border-border-primary rounded-[18px] flex flex-row">
                        <Avatar size="mini" avatarSrc={avatarSrc}/>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#E1E3E6"/>
                            </svg>
                        </div>
                    </DropdownMenuTrigger>
                    <Hamburger toggled={isBurgerOpen} toggle={setisBurgerOpen} size={24}/>
                </div>
            </DropdownMenu>
        </header>
    )
}