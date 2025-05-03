
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Minus, Plus, Search, ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import ProductHighlights from "@/components/ProductHighlights";
import ProductGallery from "@/components/ProductGallery";
import Accordion from "@/components/Accordion";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Pastel Blue");

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button className="text-gray-600" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
            </div>

            <a href="/" className="text-center">
              <img 
                src="https://www.mindbrush.co/cdn/shop/files/Logo_mindbrush_9391bea7-1878-489e-9ec1-c77a9e1afc0a_180x.png?v=1614060674" 
                alt="Dear Me Logo" 
                className="h-12 mx-auto"
              />
            </a>

            <div className="flex items-center gap-8">
              <button className="text-gray-600" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Explore Kits</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Mission</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Get in Touch</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Ask Anything</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Insights & Stories</a></li>
          </ul>
        </div>
      </nav>

      <ProductHighlights />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5">
              <ProductGallery />
            </div>
            
            <div className="lg:w-2/5">
              <h1 className="text-4xl font-serif mb-3">Dear Me Emotional Wellness Kit</h1>
              
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500 line-through mr-2">Rs. 1,400.00</span>
                <span className="text-2xl font-medium mr-2">Rs. 1,185.00</span>
                <span className="bg-yellow-400 text-xs px-2 py-1 rounded">Sale</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-5">
                Tax included. <a href="#" className="text-blue-500">Shipping</a> calculated at checkout.
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src="https://razorpay.com/build/browser/static/razorpay-logo.84b15fc7.svg" 
                      alt="Razorpay" 
                      className="h-6 mr-2"
                    />
                    <span className="font-medium">Money Back Promise</span>
                  </div>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">On Prepaid Orders</span>
                </div>
                <div className="flex items-center mt-3 text-sm">
                  <div className="h-4 w-4 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Get 100% refund on non-delivery or defects</span>
                </div>
              </div>
              
              <div className="mb-6 text-gray-700">
                <p>A hybrid self-care system designed for tweens and teens. Includes a digital app and physical tools like a printed journal, emotion cards, and mindfulness challenges – making emotional wellness fun, accessible, and age-appropriate.</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Color</label>
                <div className="relative">
                  <select 
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md py-3 pl-4 pr-10 text-gray-700 appearance-none focus:outline-none focus:border-blue-500"
                  >
                    <option value="Pastel Blue">Pastel Blue</option>
                    <option value="Lavender Purple">Lavender Purple</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex border border-gray-300 rounded-md w-32">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 border-r border-gray-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full text-center border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 border-l border-gray-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-6"
                >
                  Add to Cart
                </Button>
                
                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white font-medium py-6"
                >
                  Start My Journey
                </Button>
                
                <div className="text-center text-sm text-gray-600">
                  All payment modes and COD available
                  <div className="text-xs text-right">
                    Secured by <img src="https://razorpay.com/build/browser/static/razorpay-logo.84b15fc7.svg" alt="Razorpay" className="h-4 inline" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t pt-6 space-y-2">
                <Accordion 
                  title="Preview the Kit for FREE(Below)" 
                  icon="zap"
                >
                  <p>View the journal pages and contents before purchasing.</p>
                </Accordion>
                
                <Accordion 
                  title="THE 10-Second Summary" 
                  icon="clock"
                >
                  <p>Quick benefits and features of the Dear Me Emotional Wellness Kit.</p>
                </Accordion>
                
                <Accordion 
                  title="Why It's Effective" 
                  icon="help-circle"
                >
                  <p>The science behind the kit's effectiveness for teen emotional wellness.</p>
                </Accordion>
                
                <Accordion 
                  title="Teen Success Stories" 
                  icon="message-circle"
                >
                  <p>What teens and parents are saying about the Dear Me Kit.</p>
                </Accordion>
                
                <Accordion 
                  title="Eco-Friendly Design" 
                  icon="leaf"
                >
                  <p>Our sustainable process and materials used in making the kit.</p>
                </Accordion>
                
                <Accordion 
                  title="Shipping & Returns" 
                  icon="truck"
                >
                  <p>Information about shipping times and return policy.</p>
                </Accordion>
                
                <Accordion 
                  title="Ask Anything" 
                  icon="file-text"
                >
                  <p>Frequently asked questions about the emotional wellness kit.</p>
                </Accordion>
                
                <Accordion 
                  title="School & Group Orders" 
                  icon="box"
                >
                  <p>Information for bulk purchasing and educational partnerships.</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="bg-yellow-100 py-6 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif">Click play to see how Dear Me helps teens</h2>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8">Preview the Kit</h2>
          <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Emotional wellness kit preview video</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
