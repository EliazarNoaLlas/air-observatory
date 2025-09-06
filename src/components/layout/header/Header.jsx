import {useState, useEffect} from 'react';
import {Facebook, Instagram, User, LogIn} from 'lucide-react';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("Usuario");
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        {icon: "home", text: "Inicio", href: "/"},
        {icon: "users", text: "Nosotros", href: "/nosotros"},
        {icon: "pen-tool", text: "Servicios", href: "/servicios"},
        {icon: "shopping-bag", text: "Tienda", href: "/tienda"},
        {icon: "mail", text: "Contacto", href: "/contacto"},
        {
            icon: isAuthenticated ? "user" : "log-in",
            text: isAuthenticated ? userName : "Login",
            href: isAuthenticated ? "/mi-cuenta" : "/login"
        }
    ];

    return (
        <header className="bg-black bg-opacity-30 backdrop-blur-lg border-b border-pink-500 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <div className="text-white font-bold text-xl">
                                <span className="text-white">M</span>
                                <span className="text-pink-600">GRAPHIC</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    {isMobile && (
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    )}

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav className="hidden md:flex flex-1 justify-center">
                            <div className="flex space-x-8">
                                {menuItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="group relative flex items-center text-white hover:text-pink-500 transition-all duration-300 px-3 py-2"
                                    >
                                        <div className="relative overflow-hidden w-6">
                                            <i className={`fas fa-${item.icon} absolute transform group-hover:-translate-x-7 transition-all duration-300`}></i>
                                            <div className="w-6 h-6 flex items-center justify-center">
                                                {item.icon === "home" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                                    </svg>}
                                                {item.icon === "users" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                                    </svg>}
                                                {item.icon === "pen-tool" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                    </svg>}
                                                {item.icon === "shopping-bag" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                                    </svg>}
                                                {item.icon === "mail" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                    </svg>}
                                                {item.icon === "user" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                    </svg>}
                                                {item.icon === "log-in" &&
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                                    </svg>}
                                            </div>
                                        </div>
                                        <span
                                            className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 absolute left-10 transition-all duration-300 font-rajdhani font-semibold text-lg">{item.text}</span>
                                    </a>
                                ))}
                            </div>
                        </nav>
                    )}

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://facebook.com"
                           className="text-white hover:text-pink-500 transition duration-300 transform hover:scale-110">
                            <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                <Facebook size={16}/>
                            </div>
                        </a>
                        <a href="https://instagram.com"
                           className="text-white hover:text-pink-500 transition duration-300 transform hover:scale-110">
                            <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                <Instagram size={16}/>
                            </div>
                        </a>
                        <a href="https://threads.net"
                           className="text-white hover:text-pink-500 transition duration-300 transform hover:scale-110">
                            <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                                </svg>
                            </div>
                        </a>
                        <a href="https://telegram.org"
                           className="text-white hover:text-pink-500 transition duration-300 transform hover:scale-110">
                            <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.36 8.3c-.25 1.37-1.88 6.12-2.66 8.67-.31 1.02-.91 1.36-1.5 1.4-.64.04-1.14-.32-1.76-.64a9.866 9.866 0 00-1.91-1.03c-1.08-.48-1.77-.76-.31-2.19.41-.4 2.47-2.27 2.5-2.46.04-.19-.08-.3-.25-.21-.7.37-2.2 1.4-3.28 2.08-1.52.94-2.96.83-3.37.79-.89-.12-1.6-.44-2.1-.57-.91-.24-1.56-.59-1.6-1.16-.02-.51.41-.93 1.47-1.35a22.374 22.374 0 019.86-1.97c.45.02 1.5.3 1.91.81.27.36.31.78.25 1.07z"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center text-white hover:text-pink-500 block px-3 py-2 text-base font-medium"
                            >
                                <div className="w-8 h-8 flex items-center justify-center mr-3">
                                    {item.icon === "home" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                        </svg>}
                                    {item.icon === "users" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                        </svg>}
                                    {item.icon === "pen-tool" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                        </svg>}
                                    {item.icon === "shopping-bag" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                        </svg>}
                                    {item.icon === "mail" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>}
                                    {item.icon === "user" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>}
                                    {item.icon === "log-in" &&
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                        </svg>}
                                </div>
                                <span>{item.text}</span>
                            </a>
                        ))}

                        {/* Mobile Social Icons */}
                        <div className="flex space-x-4 pt-2 px-3">
                            <a href="https://facebook.com"
                               className="text-white hover:text-pink-500 transition duration-300">
                                <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                    <Facebook size={16}/>
                                </div>
                            </a>
                            <a href="https://instagram.com"
                               className="text-white hover:text-pink-500 transition duration-300">
                                <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                    <Instagram size={16}/>
                                </div>
                            </a>
                            <a href="https://threads.net"
                               className="text-white hover:text-pink-500 transition duration-300">
                                <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://telegram.org"
                               className="text-white hover:text-pink-500 transition duration-300">
                                <div className="bg-pink-600 rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.36 8.3c-.25 1.37-1.88 6.12-2.66 8.67-.31 1.02-.91 1.36-1.5 1.4-.64.04-1.14-.32-1.76-.64a9.866 9.866 0 00-1.91-1.03c-1.08-.48-1.77-.76-.31-2.19.41-.4 2.47-2.27 2.5-2.46.04-.19-.08-.3-.25-.21-.7.37-2.2 1.4-3.28 2.08-1.52.94-2.96.83-3.37.79-.89-.12-1.6-.44-2.1-.57-.91-.24-1.56-.59-1.6-1.16-.02-.51.41-.93 1.47-1.35a22.374 22.374 0 019.86-1.97c.45.02 1.5.3 1.91.81.27.36.31.78.25 1.07z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;