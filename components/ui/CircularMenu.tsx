"use client";


import rocket from "/public/icons/title/rocket.png";
import { useState, useEffect } from "react";
import { Menu, Home, Mail, User } from "lucide-react";
import Image from "next/image";

interface MenuItem {
  icon: React.ReactNode | string;
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { icon: <Home className="w-6 h-6" />, href: "#experience", label: "Experiencia" },
  { icon: <Mail className="w-6 h-6" />, href: "#skills", label: "Skills" },
  { icon: <Image src={rocket} alt="Ajustes" className="w-6 h-6" />, href: "#projects", label: "Proyectos" },
  { icon: <User className="w-6 h-6" />, href: "#about", label: "Perfil" }
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

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
            <div key={index} className="relative group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.href);
                }}
                className={`
                  bg-[#181818] dark:bg-gray-800 shadow-lg rounded-full p-3
                  hover:bg-[#CC005F] dark:hover:bg-gray-700
                  transition-transform duration-300 ease-in-out
                  transform hover:scale-125
                  ${isOpen || isHovered ? 'scale-100 translate-y-0' : 'scale-0 translate-y-16'}
                  flex items-center
                `}
                aria-label={item.label}
              >
                {typeof item.icon === "string" ? (
                  <Image src={item.icon} alt={item.label} className="w-8 h-8" />
                ) : (
                  item.icon
                )}
              </a>
              <span className="absolute right-full mr-4 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center font-montserrat " style={{ top: '8px' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Botón principal */}
        <button
          id="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative
            bg-[#181818] hover:bg-[#970147] text-white rounded-full p-3
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