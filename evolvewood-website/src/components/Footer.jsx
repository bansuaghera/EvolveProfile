import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-evolve-brown text-white pt-16 pb-8 rounded-t-[3rem] mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="block">
                            <img src="/images/logo.png" alt="EvolveWood" className="h-16 w-auto object-contain brightness-0 invert opacity-90" />
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Evolve Profile Industries is engaged in manufacturing of plastic packaging materials.
                            Dedicated to innovation and sustainability from start to finish.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-evolve-green transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-evolve-green transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-evolve-green transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-display text-evolve-light-green">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            {['Home', 'About Us', 'Products', 'Industries', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-evolve-light-green transition-colors flex items-center">
                                        <span className="mr-2">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-display text-evolve-light-green">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-white/80">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-evolve-green" />
                                <span>Sr No. 262/1 P3 And 262/4 P2, Plot No-10, Dhanagood Industrial Estate, Rajkot Highway, At- Sofat Sanala Pin-363641<br />Ta- Morbi, Dist-Morbi</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-evolve-green" />
                                <span>+91 81415 14311 | +91 97378 35434</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-evolve-green" />
                                <span>evolveprofileindustries@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Initiatives */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-display text-evolve-light-green">Initiatives</h3>
                        <div className="space-y-4">
                            <div className="bg-white/10 p-4 rounded-xl flex items-center space-x-4">
                                <div className="text-evolve-light-green font-bold text-2xl">Clean<br />India</div>
                                <div className="text-xs text-white/70">Supporting the national mission for a cleaner environment.</div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-white/70 italic">
                                <span>"West to Best"</span>
                            </div>
                            <div className="text-3xl font-display font-bold text-evolve-light-green mt-4">Go Green</div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
                    <p>© {new Date().getFullYear()} Evolve Profile Industries. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
