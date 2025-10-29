import { useState } from 'react';
import { navLinks } from '../constants';
const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
          <a href={link.href} className="text-lg hover:text-white transition-colors">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85">
      <div className="max-w-7xl mx-auto rounded">
        <div className="flex sm:justify-around justify-between items-center mx-auto py-5 sm:px-10 px-5">
          <a
            href="/"
            className="font-bold uppercase text-xl text-neutral-400 hover:text-white transition-colors"
            aria-label="Logo"
            role="navigation">
            Ashraf Sada
          </a>
          <button className="sm:hidden cursor-pointer hover:animate-pulse" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? 'assets/menu.svg' : 'assets/close.svg'}
              alt="menu icon"
              aria-label="menu-toggle"
              role="menu"
              title="nav-menu"
              className="w-8 h-8"
            />
          </button>
          <nav className="sm:flex hidden transition-colors">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
