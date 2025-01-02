"use client"
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo-white.svg';
import Image from 'next/image';
import CustomSidebar from './Sidebar';

const Navbar = () => {


    return (
        <nav className="absolute top-0 z-50 w-full text-white py-5 bg-custom-primary lg:bg-transparent">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
                {/* Logo and Contact */}
                <div className="flex items-center gap-8">
                    <Image src={logo} alt='logo' width={110} height={50} />
                    <p className="hidden lg:block text-sm">+75 123 456 789</p>
                </div>

                {/* Navigation Links */}
                <div className='hidden lg:block'>
                    <ul className="flex gap-8 items-center">
                        {/* Home */}
                        <li className="relative group flex items-center h-8">
                            <a href="#" className="flex items-center gap-1 hover:underline">
                                Home <ChevronDown className='size-5' />
                            </a>
                            <div className="absolute hidden group-hover:flex flex-wrap justify-around min-w-60 bg-white text-black shadow-lg py-8 px-6 rounded-2xl gap-4 top-8 left-0 z-50">
                                <a href="#" className="block hover:underline">Home 1</a>
                                <a href="#" className="block hover:underline">Home 2</a>
                                <a href="#" className="block hover:underline">Home 3</a>
                                <a href="#" className="block hover:underline text-blue-500">Home 4</a>
                            </div>
                        </li>

                        {/* Listings */}
                        <li className="relative group flex items-center h-8">
                            <a href="#" className="flex items-center gap-1 hover:underline">
                                Listings <ChevronDown className='size-5' />
                            </a>
                            <div className="absolute hidden group-hover:flex justify-around min-w-60 bg-white text-black shadow-lg py-8 px-6 rounded-2xl gap-12 top-8 left-0 z-50 whitespace-nowrap">
                                <div className="">
                                    <h3 className='text-lg'>Listing Styles</h3>
                                    <a href="#" className="block hover:underline">Car Listings</a>
                                    <a href="#" className="block hover:underline">Bike Listings</a>
                                    <a href="#" className="block hover:underline">Rental Options</a>
                                    <a href="#" className="block hover:underline">Luxury Cars</a>
                                </div>

                                <div className="">
                                    <h3 className='text-lg'>Listing Details</h3>
                                    <a href="#" className="block hover:underline">Car Listings</a>
                                    <a href="#" className="block hover:underline">Bike Listings</a>
                                    <a href="#" className="block hover:underline">Rental Options</a>
                                    <a href="#" className="block hover:underline">Luxury Cars</a>
                                </div>
                            </div>
                        </li>

                        {/* Blog */}
                        <li className="relative group flex items-center h-8">
                            <a href="#" className="flex items-center gap-1 hover:underline">
                                Blog <ChevronDown className='size-5' />
                            </a>
                            <div className="absolute hidden group-hover:flex justify-around min-w-60 flex-col bg-white text-black shadow-lg py-8 px-6 rounded-2xl gap-2 top-8 left-0 z-50">
                                <a href="#" className="block hover:underline">Latest News</a>
                                <a href="#" className="block hover:underline">Industry Trends</a>
                                <a href="#" className="block hover:underline">Buying Guides</a>
                                <a href="#" className="block hover:underline">Tips & Tricks</a>
                            </div>
                        </li>

                        {/* Pages */}
                        <li className="relative group flex items-center h-8">
                            <a href="#" className="flex items-center gap-1 hover:underline">
                                Pages <ChevronDown className='size-5' />
                            </a>
                            <div className="absolute hidden group-hover:flex justify-around min-w-60 flex-col bg-white text-black shadow-lg py-8 px-6 rounded-2xl gap-2 top-8 left-0 z-50">
                                <a href="#" className="block hover:underline">About Us</a>
                                <a href="#" className="block hover:underline">Services</a>
                                <a href="#" className="block hover:underline">FAQs</a>
                                <a href="#" className="block hover:underline">Contact Page</a>
                            </div>
                        </li>

                        {/* About */}
                        <li>
                            <a href="#" className="hover:underline">
                                About
                            </a>
                        </li>

                        {/* Contact */}
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Sign In and Submit Button */}
                <div className="hidden lg:flex gap-8 items-center">
                    <a href="#" className="hover:underline">
                        Sign in
                    </a>
                    <Link href=''>
                        <p className="border hover:border-transparent hover:bg-custom-blue text-white px-5 py-3 rounded-xl">Submit Listing</p>
                    </Link>
                </div>

                {/* for mobile secreen  */}
                <div className="lg:hidden">
                    <CustomSidebar />
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
