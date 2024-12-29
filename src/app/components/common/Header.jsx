'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-[#FF8FAB]">
            <img src='/images/Frame 1597885004.png' className="h-8" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <Link href="/mission" className="text-customGray hover:text-gray-900">
            Mission
          </Link>
          <Link href="/features" className="text-customGray hover:text-gray-900">
            Features
          </Link>
          <Link href="/benefits" className="text-customGray hover:text-gray-900">
            Benefits
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <button className="text-customGray hover:text-gray-900 font-medium">
            Sign up
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get Early Access
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/mission"
              className="block px-3 py-2 text-customGray hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Mission
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 text-customGray hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/benefits"
              className="block px-3 py-2 text-customGray hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <div className="pt-4 space-y-4">
              <button
                className="w-full text-center text-customGray hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </button>
              <button
                className="w-full bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}