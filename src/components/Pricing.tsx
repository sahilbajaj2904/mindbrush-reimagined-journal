
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Classic Journal",
      price: "₹999",
      features: [
        "Hardcover journal with 240 pages",
        "Research-backed daily prompts",
        "30-day gratitude practice",
        "Self-reflection sections",
        "Free shipping in the US",
      ],
      isPopular: false,
      buttonText: "Buy Now",
    },
    {
      name: "Premium Journal",
      price: "₹999",
      features: [
        "Premium vegan leather cover",
        "Research-backed daily prompts",
        "90-day gratitude practice",
        "Self-reflection sections",
        "Digital companion app access",
        "Monthly therapy session with certified therapist",
        "Free shipping worldwide",
      ],
      isPopular: true,
      buttonText: "Buy Now",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Journal</h2>
          <p className="text-lg text-gray-600">
            Start your mindfulness journey with a journal that suits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border ${
                plan.isPopular ? "border-mindblue-300 shadow-xl" : "border-gray-200 shadow-lg"
              }`}
            >
              {plan.isPopular && (
                <div className="bg-mindblue-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-mindblue-500 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-6 ${
                    plan.isPopular
                      ? "bg-mindblue-500 hover:bg-mindblue-600 text-white"
                      : "bg-white border border-mindblue-300 text-mindblue-600 hover:bg-mindblue-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">All journals come with a 30-day satisfaction guarantee.</p>
          <p className="text-gray-500">Need help choosing? <a href="#" className="text-mindblue-500 underline">Contact our team</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
