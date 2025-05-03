
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import * as Icons from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
}

const Accordion = ({ title, children, icon }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Dynamically get the icon component
  const IconComponent = icon ? (Icons as any)[icon.charAt(0).toUpperCase() + icon.slice(1)] : ChevronDown;

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon && <IconComponent className="h-5 w-5 mr-2 text-gray-600" />}
          <h3 className="font-serif text-lg">{title}</h3>
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="pb-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
