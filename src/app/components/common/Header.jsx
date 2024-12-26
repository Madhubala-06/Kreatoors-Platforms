'use client';
import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-[#FF8FAB]">
           <img src='/images/Frame 1597885004.png' className=' h-8'>
           </img>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center justify-center gap-8">
          <Link href="/mission" className="  text-customGray hover:text-gray-900">
            Mission
          </Link>
          <Link href="/features" className="text-customGray hover:text-gray-900">
            Features
          </Link>
          <Link href="/benefits" className="text-customGray hover:text-gray-900">
            Benefits
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <button className="text-customGray hover:text-gray-900 font-medium">
            Sign up
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get Early Access
          </button>
        </div>
      </nav>
    </header>
  );
}