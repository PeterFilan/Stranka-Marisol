"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<"sk" | "en">("sk");

    const navItems = {
        sk: [
            { href: "#home", label: "Domov" },
            { href: "#about", label: "O apartmáne" },
            { href: "#gallery", label: "Galéria" },
            { href: "#pricing", label: "Cenník" },
            { href: "#availability", label: "Obsadenosť" },
            { href: "#booking", label: "Rezervácia" },
            { href: "#contact", label: "Kontakt" },
        ],
        en: [
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#gallery", label: "Gallery" },
            { href: "#pricing", label: "Pricing" },
            { href: "#availability", label: "Availability" },
            { href: "#booking", label: "Booking" },
            { href: "#contact", label: "Contact" },
        ],
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
            <nav className="container mx-auto px-4 sm:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="text-2xl font-bold text-primary">
                        Your Apartment
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems[language].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-darkGray hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setLanguage("sk")}
                                className={`px-3 py-1 rounded ${language === "sk"
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-darkGray"
                                    }`}
                                aria-label="Slovak"
                            >
                                🇸🇰 SK
                            </button>
                            <button
                                onClick={() => setLanguage("en")}
                                className={`px-3 py-1 rounded ${language === "en"
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-darkGray"
                                    }`}
                                aria-label="English"
                            >
                                🇬🇧 EN
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-2xl text-darkGray"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
                        {navItems[language].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-darkGray hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile Language Switcher */}
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => setLanguage("sk")}
                                className={`px-3 py-1 rounded ${language === "sk"
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-darkGray"
                                    }`}
                            >
                                🇸🇰 SK
                            </button>
                            <button
                                onClick={() => setLanguage("en")}
                                className={`px-3 py-1 rounded ${language === "en"
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-darkGray"
                                    }`}
                            >
                                🇬🇧 EN
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
