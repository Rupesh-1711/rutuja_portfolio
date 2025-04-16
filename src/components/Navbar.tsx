import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plus } from "lucide-react";

interface NavbarProps {
  logoText?: string;
  menuItems?: Array<{ label: string; href: string; hasIcon?: boolean }>;
}

const Navbar = ({
  logoText = "Rovex",
  menuItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Toolbox", href: "#toolbox" },
    { label: "Methodology", href: "#methodology" },
    { label: "Contact Us", href: "#contact", hasIcon: true },
  ],
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-rovex-black ${isScrolled ? "shadow-md py-3" : "py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-rovex-yellow flex items-center justify-center mr-2">
              <span className="text-rovex-black font-bold text-sm">R</span>
            </div>
            <span className="text-2xl font-bold text-white">{logoText}</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white hover:text-rovex-yellow font-medium transition-colors flex items-center"
            >
              {item.label}
              {item.hasIcon && <Plus className="ml-1 h-4 w-4" />}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-rovex-yellow focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-rovex-gray shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-rovex-yellow font-medium py-2 transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {item.hasIcon && <Plus className="ml-1 h-4 w-4" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
