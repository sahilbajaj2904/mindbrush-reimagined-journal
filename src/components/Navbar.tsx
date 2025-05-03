
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
    <header className="fixed top-0 w-full bg-dearme-background/80 backdrop-blur-md z-50 shadow-sm border-b border-dearme-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d8f713e5-cd5a-4701-a25c-811f4dd321d2.png"
                alt="DearMe Logo" 
                className="h-16 mr-2 animate-bounce-gentle"
              />
            </Link>
            <div className="hidden md:ml-8 md:flex">
              <button className="text-dearme-primary rounded-full bg-dearme-light p-2 hover:bg-dearme-mint/20 transition-colors" aria-label="Search">
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
                className="flex items-center text-dearme-primary hover:text-dearme-accent transition-colors duration-200 font-medium"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <button className="penguin-button flex items-center gap-2" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-dearme-primary bg-dearme-light p-2 rounded-full hover:bg-dearme-mint/20 transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-dearme-primary bg-dearme-light p-2 rounded-full hover:bg-dearme-mint/20 transition-colors" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-dearme-primary hover:bg-dearme-mint/20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dearme-background border-l border-dearme-primary/10">
                <div className="flex justify-center mb-6 mt-4">
                  <img 
                    src="/lovable-uploads/d8f713e5-cd5a-4701-a25c-811f4dd321d2.png"
                    alt="DearMe Logo" 
                    className="h-20"
                  />
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center text-dearme-primary hover:text-dearme-accent transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-dearme-mint/10"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                  <Button className="penguin-button mt-4 w-full">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    View Cart
                  </Button>
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
