import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

function CustomNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='px-4 py-5 shadow-lg lg:shadow-sm lg:px-8'>
			<div className='flex items-center justify-between'>
				{/* Logo */}
				<div className='w-28'>
					<NavLink to={'/'}><img src={logo} alt="Logo" /></NavLink>
				</div>

				{/* Menu Icon for Small Screens */}
				<button onClick={toggleMenu} className='lg:hidden'>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>

				{/* Navigation Links for Large Screens */}
				<div className='items-center justify-center flex-grow hidden lg:flex'>
					<ul className='flex space-x-8 text-md'>
						<li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>Home</NavLink></li>
						<li><NavLink to="/PromotionalContent" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>Promotional Content</NavLink></li>
						<li><NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>Contact Us</NavLink></li>
						<li><NavLink to="/About" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>About Us</NavLink></li>
					</ul>
				</div>

				{/* Login and Create Account Buttons */}
				<div className='items-center hidden space-x-4 lg:flex'>
					<button className='text-[#3E8982]'>Login</button>
					<button className='px-4 py-2 text-white bg-[#3E8982] rounded-full hover:bg-[#26625c]'>Create Account</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className='mt-4 lg:hidden'>
					<ul className='flex flex-col space-y-4 text-md'>
						<li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>Home</NavLink></li>
						<li><NavLink to="/PromotionalContent" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>Promotional Content</NavLink></li>
						<li><NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>Contact Us</NavLink></li>
						<li><NavLink to="/About" className={({ isActive }) => isActive ? 'text-[#3E8982] font-semibold border-b-2 border-[#3E8982]' : 'text-black'}>About</NavLink></li>
					</ul>
					<div className='mt-4 space-y-2'>
						<button className='block w-full text-left text-[#3E8982]'>Login</button>
						<button className='block w-full px-4 py-2 text-white bg-[#3E8982] rounded-full hover:bg-[#26625c]'>Create Account</button>
					</div>
				</div>
			)}
		</nav>
	);
}

export default CustomNavbar;
