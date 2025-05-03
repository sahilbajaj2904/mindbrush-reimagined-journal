
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, Gamepad, Award, CreditCard } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Games", href: "/games", icon: <Gamepad className="mr-2 h-4 w-4" /> },
    { name: "Emotional Connect Cards", href: "/cards", icon: <CreditCard className="mr-2 h-4 w-4" /> },
    { name: "Reward Point Tracker", href: "/rewards", icon: <Award className="mr-2 h-4 w-4" /> },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c2d8aef4-d4f2-4385-8d50-950eb424bb11.png"
                alt="DearMe Logo" 
                className="h-12 mr-2"
              />
            </Link>
            <div className="hidden md:ml-8 md:flex">
              <button className="text-gray-600" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center text-gray-600 hover:text-mindblue-500 transition-colors duration-200"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <button className="text-gray-600" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-600" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex justify-center mb-6 mt-4">
                  <img 
                    src="/lovable-uploads/c2d8aef4-d4f2-4385-8d50-950eb424bb11.png"
                    alt="DearMe Logo" 
                    className="h-16"
                  />
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center text-gray-600 hover:text-mindblue-500 transition-colors duration-200 py-2 px-4"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
