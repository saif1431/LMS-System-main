import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react"; // Renamed import
import { FiLayers } from "react-icons/fi";
import logo from "../assets/logo.png";


function CustomNavbar() { // Renamed component
    return (
        <>
            {/* Small Navbar using Flowbite Components */}
           <div className='flex items-center justify-between w-full mr-3 space-x-4 bg-red-500'>
           <FlowbiteNavbar className='flex items-center justify-between w-full lg:hidden' fluid rounded>
                <FlowbiteNavbar.Brand className='mr-28' href="https://flowbite-react.com">
                    <img src={logo} className="h-8 mr-3 sm:h-9" alt="Flowbite React Logo" />
                    
                </FlowbiteNavbar.Brand>
                <div className="flex space-x-2 ">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                              
                              <span className='flex items-center space-x-3 '>
                                    <FiLayers className='text-2xl hover:text-neutral-400' />
                                    <BsBagDash className='text-2xl hover:text-neutral-400' /></span>
                        }
                    >
                     
                        {/* <Dropdown.Header>
                        <span><BsBagDash className='text-3xl hover:text-neutral-400' /></span>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block text-sm font-medium truncate">name@flowbite.com</span>
                        </Dropdown.Header> */}
                        {/* <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item> */}
                    </Dropdown>
                    <FlowbiteNavbar.Toggle />
                </div>
                <FlowbiteNavbar.Collapse>
                <div className='flex items-center justify-between w-full px-4 py-2 mb-4 space-x-4 border rounded-md rounded-tl-2xl border-neutral-300'>
                        <IoSearchOutline className='text-xl text-neutral-500' />
                        <input className='border-none outline-none bg-none' type="text" placeholder='ابحث في المواد التدريبية' />
                    </div>
                    <FlowbiteNavbar.Link href="#" active>الرئيسية   
                    </FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link href="#">قائمة 1</FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link href="#">قائمة ٢</FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link href="#">قائمة ٣</FlowbiteNavbar.Link>
                    {/* <FlowbiteNavbar.Link href="#"> */}
                    <div className='flex items-center space-x-8'>
                        <button className='px-4 py-3 bg-[#3E8992] rounded-md text-white hover:bg-white hover:border border-[#3E8992] hover:text-black transition-all ease-in duration-300'>
                            حساب جديد
                        </button>
                        <button className='px-4 py-3 border border-[#3E8992] rounded-md hover:bg-[#3E8992] hover:text-white transition-all ease-in duration-300'>
                            تسجيل دخول
                        </button>
                    </div>
                    {/* </FlowbiteNavbar.Link> */}
                </FlowbiteNavbar.Collapse>
            </FlowbiteNavbar>
           </div>
            
            {/* Custom Navbar for Large Screens */}
            <nav className='hidden lg:block'>
                <div className='flex items-center justify-between px-12 py-4 nav1'>
                    <div className='flex items-center space-x-2'>
                        <Link className='font-semibold hover:text-neutral-400'>العربية</Link>
                        <FaArrowDown />
                    </div>
                    <div className='flex items-center space-x-8 font-semibold'>
                        <Link className='hover:text-neutral-400'>قائمة ٣</Link>
                        <Link className='hover:text-neutral-400'>قائمة ٢</Link>
                        <Link className='hover:text-neutral-400'>قائمة 1</Link>
                        <Link className='hover:text-neutral-400'>الرئيسية</Link>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between px-12 py-4 nav2'>
                <div className='flex items-center space-x-8'>
                        <button className='px-4 py-3 bg-[#3E8992] rounded-md text-white hover:bg-white hover:border border-[#3E8992] hover:text-black transition-all ease-in duration-300'>
                            حساب جديد
                        </button>
                        <button className='px-4 py-3 border border-[#3E8992] rounded-md hover:bg-[#3E8992] hover:text-white transition-all ease-in duration-300'>
                            تسجيل دخول
                        </button>
                    </div>
                    <span><BsBagDash className='text-3xl hover:text-neutral-400' /></span>
                    <div className='flex items-center justify-between w-1/2 px-4 py-2 space-x-4 border rounded-md rounded-tl-2xl border-neutral-300'>
                        <IoSearchOutline className='text-xl text-neutral-500' />
                        <input className='w-full border-none outline-none text-end bg-none' type="text" placeholder='ابحث في المواد التدريبية' />
                    </div>
                    <FiLayers className='text-3xl hover:text-neutral-400' />
                    <img className='w-36' src={logo} alt="Logo" />
                </div>
            </nav>
        </>
    );
}

export default CustomNavbar; // Updated export
