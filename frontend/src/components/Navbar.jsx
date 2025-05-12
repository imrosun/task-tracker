import { useNavigate } from 'react-router-dom'
import { CalendarClock, ChevronDown, LogOut, Settings } from 'lucide-react'
import React, { useState, useRef } from 'react'

const Navbar = ({user={}, onLogout}) => {
    const menuref = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate();

    const handleMenuToggle = () => setMenuOpen((prev) => !prev)

    const handleLogout = () => {
        setMenuOpen(false)
        onLogout()
    }
    return (
        <header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm 
    border-b border-gray-200 fontsans'>
            <div className='flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto'>
                {/* LEFT SIDE - LOGO */}
                <div className='flex items-center gap-2 cursor-pointer group'
                    onClick={() => navigate('/')}>
                    {/* Logo */}
                    <div className='relative w-10 h-10 flex items-center justify-center rounded-xl
                bg-gradient-to-br from-yellow-500 via-amber-500 to-indigo-500 shadow-lg
                group-hover:shadow-purple-300/50 groupd-hover:scale-105 transition-all duration-300'>
                        <CalendarClock className='w-6 h-6 text-white' />
                        <div className='absolute -bottom-1 -middle-1 w-3 h-3 bg-white rounded-full 
                    shadow-md animate-ping'/>
                    </div>

                    {/* BRAND NAME */}
                    <span className='text-2xl font-extrabold bg-gradient-to-r from-yellow-500 via-amber-500 
                to-indigo-500 bg-clip-text text-transparent tracking-wide'>
                        Task Tracker
                    </span>
                </div>

                {/* RIGHT SIDE */}
                <div className='flex items-center gap-4'>
                    <button className='p-2 text-gray-600 hover:text-amber-500 transition-colors duration-300
                hover:bg-amber-50 rounded-full'
                        onClick={() => navigate('/profile')}>
                        <Settings className='w-5 h-5' />
                    </button>

                    {/* USER DROPDOWN MENU */}
                    <div ref={menuref} className='relative'>
                        <button onClick={handleMenuToggle} className='flex items-center gap-2 px-3 py-2 rounded-full
                    cursor-pointer hover:bg-amber-50 transition-colors duration-300 border border-transparent
                    hover:border-amber-200'>
                            <div className='relative'>
                                {user.avatar ? (
                                    <img src={user.avatar} alt="avatar" className='w-9 h-9 rounded-full shadow-sm' />
                                ) : (
                                    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br 
                                from-yellow-500 to-amber-600 text-white font-semibold shadow-md'>
                                        {user.name?.[0]?.toUpperCase() || 'U'}
                                    </div>
                                )}
                                <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full
                                border-2 border-white animate-pulse'/>                                
                            </div>

                            <div className='text-left hidden md:block'>
                                <p className='text-sm font-medium text-gray-800'>{user.name}</p>
                                <p className='text-xs font-normal text-gray-800'>{user.email}</p>
                            </div>

                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300
                            ${menuOpen ? 'rotate-180' : ''}`} />

                            {menuOpen && (
                                <ul className='absolute top-14 right-0 w-56 bg-white rounded-2xl shadow-xl border-yellow-50
                                z-50 overflow-hidden animate-fadeIn'>
                                    <li className='p-2'>
                                        <button onClick={() => {
                                            setMenuOpen(false)
                                            navigate('/profile')
                                        }} 
                                        className='w-full px-4 py-2.5 text-left hover:bg-amber-50 text-sm text-gray-700 
                                        transition-colors flex items-center gap-2 group' role='menuitem'>
                                            <Settings className='w-4 h-4 text-gray-700'/>
                                            Profile Setting
                                        </button>
                                    </li>

                                    <li className='p-2'>
                                        <button onClick={handleLogout} 
                                        className='w-full px-3 py-2 text-left hover:bg-red-50 text-sm text-red-600 
                                        flex items-center gap-2' role='menuitem'>
                                            <LogOut className='w-4 h-4'/>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </button>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Navbar