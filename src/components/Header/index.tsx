"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { 
  FiMenu, 
  FiX, 
  FiChevronDown,
  FiChevronUp,
  FiHome,
  FiInfo,
  FiBook,
  FiMessageSquare,
  FiBriefcase,
} from "react-icons/fi";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  // Function to get icon based on menu title
  // const getMenuIcon = (title) => {
  //   switch (title.toLowerCase()) {
  //     case 'home': return <FiHome className="mr-2 h-5 w-5" />;
  //     case 'about': return <FiInfo className="mr-2 h-5 w-5" />;
  //     case 'blog': return <FiBook className="mr-2 h-5 w-5" />;
  //     case 'support': return <FiMessageSquare className="mr-2 h-5 w-5" />;
  //     case 'services': return <FiBriefcase className="mr-2 h-5 w-5" />;
  //     default: return <FiHome className="mr-2 h-5 w-5" />;
  //   }
  // };

  // Function to check if a path is active (including submenu items)
  const isActivePath = (path) => {
    return usePathName === path;
  };

  // Function to check if any submenu item is active
  const isSubmenuActive = (menuItem) => {
    if (menuItem.submenu) {
      return menuItem.submenu.some(subItem => isActivePath(subItem.path));
    }
    return false;
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-50 flex w-full items-center transition-all duration-300 ${
          sticky
            ? "fixed z-9999 bg-white/95 dark:bg-gray-dark/95 backdrop-blur-md shadow-lg"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="w-60 max-w-full">
              <Link
                href="/"
                className={`header-logo block transition-all duration-300 ${
                  sticky ? "py-3" : "py-5"
                }`}
              >
                <Image
                  src="/images/logo/Untitled design2.png"
                  alt="logo"
                  width={140}
                  height={35}
                  className="w-auto transform transition-transform duration-300 hover:scale-105 dark:hidden"
                />
                <Image
                  src="/images/logo/Untitled design12.png"
                  alt="logo"
                  width={140}
                  height={35}
                  className="hidden w-auto transform transition-transform duration-300 hover:scale-105 dark:block"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id} className="relative group">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                          isActivePath(menuItem.path)
                            ? "text-primary bg-primary/10"
                            : "text-dark hover:text-primary hover:bg-gray-50 dark:text-white/80 dark:hover:text-white dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="font-medium">{menuItem.title}</span>
                        {isActivePath(menuItem.path) && (
                          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                        )}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                            openIndex === index || isSubmenuActive(menuItem)
                              ? "text-primary bg-primary/10"
                              : "text-dark hover:text-primary hover:bg-gray-50 dark:text-white/80 dark:hover:text-white dark:hover:bg-gray-800"
                          }`}
                        >
                          <span className="font-medium">{menuItem.title}</span>
                          {openIndex === index ? (
                            <FiChevronUp className="ml-1 h-4 w-4" />
                          ) : (
                            <FiChevronDown className="ml-1 h-4 w-4" />
                          )}
                        </button>
                        
                        {/* Submenu Dropdown */}
                        <div
                          className={`absolute left-0 top-full mt-1 min-w-[220px] rounded-xl bg-white/95 dark:bg-gray-dark/95 backdrop-blur-md shadow-xl p-3 transition-all duration-300 ${
                            openIndex === index
                              ? "visible opacity-100 translate-y-0"
                              : "invisible opacity-0 translate-y-2"
                          }`}
                        >
                          <div className="space-y-1">
                            {menuItem.submenu?.map((submenuItem) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                onClick={() => handleSubmenu(index)}
                                className={`flex items-center px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                                  isActivePath(submenuItem.path)
                                    ? "text-primary bg-primary/10"
                                    : "text-dark hover:text-primary hover:bg-gray-50 dark:text-white/80 dark:hover:text-white dark:hover:bg-gray-800"
                                }`}
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                                {submenuItem.title}
                                {isActivePath(submenuItem.path) && (
                                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4"></div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Contact Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/25"
              >
                <FiMessageSquare className="mr-2 h-4 w-4" />
                Contact Us
              </Link>

              {/* Theme Toggler */}
              <div className="flex items-center">
                <ThemeToggler />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={navbarToggleHandler}
                aria-label="Mobile Menu"
                className="lg:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {navbarOpen ? (
                  <FiX className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <FiMenu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              navbarOpen
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="bg-white/95 dark:bg-gray-dark/95 backdrop-blur-md rounded-2xl shadow-lg p-4">
              <ul className="space-y-1">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id}>
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActivePath(menuItem.path)
                            ? "text-primary bg-primary/10"
                            : "text-dark hover:text-primary hover:bg-gray-50 dark:text-white/80 dark:hover:text-white dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="font-medium">{menuItem.title}</span>
                        {isActivePath(menuItem.path) && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-primary"></span>
                        )}
                      </Link>
                    ) : (
                      <div className="space-y-1">
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                            openIndex === index || isSubmenuActive(menuItem)
                              ? "text-primary bg-primary/10"
                              : "text-dark hover:text-primary hover:bg-gray-50 dark:text-white/80 dark:hover:text-white dark:hover:bg-gray-800"
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="font-medium">{menuItem.title}</span>
                          </div>
                          {openIndex === index ? (
                            <FiChevronUp className="h-4 w-4" />
                          ) : (
                            <FiChevronDown className="h-4 w-4" />
                          )}
                        </button>
                        
                        {/* Mobile Submenu */}
                        <div
                          className={`ml-4 space-y-1 transition-all duration-300 ${
                            openIndex === index
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem) => (
                            <Link
                              href={submenuItem.path}
                              key={submenuItem.id}
                              onClick={() => setNavbarOpen(false)}
                              className={`flex items-center px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                                isActivePath(submenuItem.path)
                                  ? "text-primary bg-primary/10"
                                  : "text-dark hover:text-primary hover:bg-gray-50 dark:text-white/80 dark:hover:text-white dark:hover:bg-gray-800"
                              }`}
                            >
                              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                              {submenuItem.title}
                              {isActivePath(submenuItem.path) && (
                                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 mt-2"
                  >
                    <FiMessageSquare className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;