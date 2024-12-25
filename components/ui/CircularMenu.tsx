"use client";

import { useState, useEffect } from "react";
import { Menu, Home, Mail, Settings, User } from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { icon: <Home className="w-6 h-6" />, href: "/home", label: "Inicio" },
  { icon: <Mail className="w-6 h-6" />, href: "/contact", label: "Contacto" },
  { icon: <Settings className="w-6 h-6" />, href: "/settings", label: "Ajustes" },
  { icon: <User className="w-6 h-6" />, href: "/profile", label: "Perfil" }
];

const CircularMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuButton = document.getElementById("menu-button");
      if (menuButton && !menuButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="relative">
        {/* Menú Items */}
        <div 
          className={`
            absolute bottom-0 right-0 
            flex flex-col-reverse items-center gap-4
            transition-all duration-500 ease-in-out
            ${isOpen || isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          style={{
            transform: `translateY(-27%)`
          }}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleItemClick}
              className={`
                bg-white dark:bg-gray-800 shadow-lg rounded-full p-3
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition-transform duration-300 ease-in-out
                transform hover:scale-125
                ${isOpen || isHovered ? 'scale-100 translate-y-0' : 'scale-0 translate-y-16'}
              `}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Botón principal */}
        <button
          id="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative
            bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3
            shadow-lg transition-all duration-200 ease-in-out
            transform ${isOpen ? 'rotate-180' : 'rotate-0'}
            z-10
          `}
          aria-label="Abrir menú"
        >
          <Menu className={`w-6 h-6 transform transition-transform duration-200 ease-in-out ${isOpen || isHovered ? 'rotate-180' : 'rotate-0'}`} />
        </button>
      </div>
    </div>
  );
};

export default CircularMenu;