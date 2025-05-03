
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Annual Plan",
      price: "₹4,999",
      priceDetail: "One-time payment",
      description: "Get the complete kit with a one-time annual payment",
      features: [
        "Premium quality journal",
        "Physical Emotional Connect Cards",
        "Access to offline games",
        "Full access to web app games",
        "Monthly therapy session with certified therapists",
        "1 year of digital content access",
        "Free shipping across India"
      ],
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      name: "Monthly Plan",
      price: "₹500",
      priceDetail: "per month",
      description: "Enjoy the same benefits with easy monthly payments",
      features: [
        "Premium quality journal",
        "Physical Emotional Connect Cards",
        "Access to offline games",
        "Full access to web app games",
        "Monthly therapy session with certified therapists",
        "Flexible monthly subscription",
        "Cancel anytime"
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Choose Your Emotional Wellness Journey</h1>
              <p className="text-lg text-gray-600">
                Select the plan that works best for you and begin your journey toward better emotional wellbeing.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {plans.map((plan, index) => (
                  <Card key={index} className={`overflow-hidden border ${
                    plan.isPopular ? "border-dearme-primary shadow-lg" : "border-gray-200"
                  }`}>
                    {plan.isPopular && (
                      <div className="bg-dearme-primary text-white text-center py-2 font-medium">
                        Recommended
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-500 ml-2">{plan.priceDetail}</span>
                      </div>
                      
                      <div className="mb-6 border-t border-b py-6">
                        <h4 className="font-semibold mb-4">The Complete Kit Includes:</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-dearme-primary mr-3 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className={`w-full py-6 ${
                        plan.isPopular 
                          ? "bg-dearme-primary hover:bg-dearme-accent text-white" 
                          : "bg-white border border-dearme-primary text-dearme-primary hover:bg-dearme-primary/5"
                      }`}>
                        {plan.buttonText}
                      </Button>
                      
                      {plan.isPopular && (
                        <p className="text-center text-sm mt-4 text-gray-500">Most popular choice for families</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">What's Included in Every Kit?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-3">Premium Journal</h4>
                    <p className="text-gray-600">Beautifully designed journal with guided prompts to help process emotions.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-3">Emotional Connect Cards</h4>
                    <p className="text-gray-600">Physical card deck designed to identify and express feelings effectively.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg mb-3">Monthly Therapy</h4>
                    <p className="text-gray-600">One therapy session per month with our certified therapists specializing in adolescent mental health.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-lg mb-2">About Our Therapy Sessions</h4>
                  <p className="text-gray-700">Both plans include a monthly 45-minute therapy session with our approved and certified therapists who specialize in adolescent mental health. Sessions can be conducted online or in-person at select locations.</p>
                </div>
                <p className="text-gray-500">Questions about our plans? <a href="#" className="text-dearme-primary underline">Contact our support team</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPlans;
