import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Logo from '../Images/Logo.png';
import userLogo from '../Images/userLogo.svg';
import hamburger from '../Images/hamLogo.svg';


export default function Header() {
    const [showSideBar, setSideBarShow] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const handleChange = () => {
        setSideBarShow(prevState => !prevState);
        console.log(showUser);
    };

    const handleDisplayEnter = () => {
        setShowUser(prevState => !prevState);
    };

    const handleDisplayExit = () => {
        setShowUser(prevState => !prevState);
    };

    return (
        <div className='flex'>
            <div className={`relative inset-y-0 left-0 transition ease-in-out transform ${showSideBar ? "translate-x-0" : "-translate-x-full"}`}>
                {showSideBar && <Sidebar sideBar={showSideBar} setSideBarShow={setSideBarShow} />}
            </div>
            <div className={`w-full transform ${showSideBar ? "ml-auto" : "ml-0"} transition delay-200 ease-in-out duration-1000`}>
                <header className="flex items-center justify-between max-h-16 bg-neutral-100 drop-shadow-lg pe-2 ps-0 py-2">
                    {!showSideBar && <img
                        src={hamburger}
                        alt='Sidebar Menu'
                        className='h-10 hover:bg-neutral-200'
                        onClick={handleChange}
                    />}                    
                    <div className="flex justify-center items-center gap-1">
                        <img src={Logo} alt='Logo for the APP' className='h-10' />
                        <span className=''>A Notes Collaborator</span>
                    </div>
                    <div className={`flex justify-center items-center gap-1 bg-gray-300 p-2 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 ${showUser ? "min-w-32" : "min-w-10"}`} onMouseEnter={handleDisplayEnter} onMouseLeave={handleDisplayExit} style={{ transition: 'width 0.5s ease-in-out' }}>
                        <img src={userLogo} alt='User' className='h-6' />
                        {showUser && <span className='text-md'>UserName</span>}
                    </div>
                </header>
            </div>
        </div>
    );
}
