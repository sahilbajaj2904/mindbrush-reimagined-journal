
import React from "react";
import { User, Clock, Users, Star } from "lucide-react";

const ProductHighlights = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <User className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">APPROVED BY</h3>
              <p className="text-sm text-gray-600">Psychologists, Educators and Teen Wellness Experts</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <Clock className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">RISK-FREE TRIAL</h3>
              <p className="text-sm text-gray-600">30-day money-back guarantee</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">TRUSTED BY 10,000+ TEENS</h3>
              <p className="text-sm text-gray-600">And 250+ schools across India</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <Star className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">PARENT APPROVED</h3>
              <p className="text-sm text-gray-600">97% satisfaction rate among parents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
