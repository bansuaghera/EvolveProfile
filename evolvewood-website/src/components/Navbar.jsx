import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/content';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-evolve-cream/95 backdrop-blur-md border-b border-evolve-brown/10 shadow-sm h-20 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/images/logo.png" alt="EvolveWood" className="h-12 lg:h-14 w-auto object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) => cn(
                                    "text-evolve-text text-sm font-medium uppercase tracking-wide hover:text-evolve-green transition-colors py-2 border-b-2 border-transparent",
                                    isActive && "text-evolve-green border-evolve-green"
                                )}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-evolve-brown p-2 hover:bg-evolve-brown/5 rounded-md focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-evolve-cream border-t border-evolve-brown/10 shadow-lg py-4 px-4 flex flex-col space-y-2">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => cn(
                                "block px-4 py-3 rounded-lg text-base font-medium text-evolve-text hover:bg-evolve-green/10 hover:text-evolve-green transition-colors",
                                isActive && "text-evolve-green bg-evolve-green/10"
                            )}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
