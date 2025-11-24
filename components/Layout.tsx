import React, { useState } from 'react';
import { Page } from '../types';
import { Button } from './UI';
import { Truck, Menu, X, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: Page.HOME },
    { label: 'Services', page: Page.SERVICES },
    { label: 'Industries', page: Page.INDUSTRIES },
    { label: 'Tech Stack', page: Page.TECHNOLOGIES },
    { label: 'Products', page: Page.PRODUCTS },
    { label: 'Company', page: Page.ABOUT },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-brand-dark text-gray-300 py-2 text-xs hidden md:block border-b border-gray-700">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center hover:text-brand-orange cursor-pointer"><Phone className="w-3 h-3 mr-2" /> +1 (800) 555-TRUCK</span>
            <span className="flex items-center hover:text-brand-orange cursor-pointer"><Mail className="w-3 h-3 mr-2" /> solutions@logitech.com</span>
          </div>
          <div className="flex space-x-4">
             <span className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.CAREERS)}>Careers</span>
             <span className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.BLOG)}>Blog</span>
             <span className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.LOGIN)}>Client Portal</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNav(Page.HOME)}>
            <div className="bg-brand-orange p-2 rounded mr-3 group-hover:bg-orange-700 transition-colors">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-brand-dark tracking-tighter leading-none">LOGI<span className="text-brand-orange">TECH</span></h1>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Solutions</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.page)}
                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  currentPage === item.page ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button size="sm" onClick={() => handleNav(Page.CONTACT)} className="hidden md:inline-flex">
              Get A Quote
            </Button>
            <button 
              className="lg:hidden text-brand-dark hover:text-brand-orange"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.page)}
                  className="text-left font-bold text-gray-800 hover:text-brand-orange py-3 border-b border-gray-50 text-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                 <Button onClick={() => handleNav(Page.CONTACT)} className="w-full">Get A Quote</Button>
                 <Button variant="outline" onClick={() => handleNav(Page.LOGIN)} className="w-full">Client Login</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-orange">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1 */}
            <div>
              <div className="flex items-center mb-6">
                <Truck className="w-6 h-6 text-brand-orange mr-2" />
                <span className="text-xl font-black">LOGI<span className="text-brand-orange">TECH</span></span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The #1 Technology Partner for the Trucking & Logistics Industry. Building software that moves the world forward.
              </p>
              <div className="flex space-x-4">
                <div className="p-2 bg-gray-800 rounded-full hover:bg-brand-orange cursor-pointer transition"><Linkedin className="w-5 h-5" /></div>
                <div className="p-2 bg-gray-800 rounded-full hover:bg-brand-orange cursor-pointer transition"><Twitter className="w-5 h-5" /></div>
                <div className="p-2 bg-gray-800 rounded-full hover:bg-brand-orange cursor-pointer transition"><Facebook className="w-5 h-5" /></div>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-orange">Services</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.SERVICES)}>Transportation TMS</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.SERVICES)}>Fleet Management</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.SERVICES)}>Driver Mobile Apps</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.SERVICES)}>Freight Brokerage Web</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.SERVICES)}>Logistics ERP</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-orange">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.ABOUT)}>About Us</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.CAREERS)}>Careers <span className="text-xs bg-brand-orange text-white px-1 ml-1 rounded">Hiring</span></li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.BLOG)}>Industry Insights</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.CONTACT)}>Contact Support</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNav(Page.LOGIN)}>Client Portal</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-orange">Contact</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-brand-orange shrink-0" />
                  <span>100 Logistics Way, Suite 500<br/>Freight City, TX 75001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-brand-orange shrink-0" />
                  <span>+1 (800) 555-TRUCK</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-brand-orange shrink-0" />
                  <span>sales@logitech.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 LogiTech Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms of Service</span>
              <span className="cursor-pointer hover:text-white">SLA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
