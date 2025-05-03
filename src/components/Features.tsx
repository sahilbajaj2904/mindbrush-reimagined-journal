
import React from "react";
import FeatureCard from "./FeatureCard";
import { BookOpen, Calendar, Check, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Research-Backed Prompts",
      description:
        "Carefully designed prompts based on proven psychological techniques to help reduce anxiety and improve mental clarity.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Daily Structure",
      description:
        "A consistent daily format that helps you build a sustainable journaling habit with minimal effort.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Gratitude Practice",
      description:
        "Dedicated sections for gratitude that help rewire your brain to focus on the positive aspects of life.",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Self-Reflection",
      description:
        "Guided reflection questions that help you process emotions and gain insights into your thoughts and behaviors.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Designed for Your Well-being</h2>
          <p className="text-lg text-gray-600">
            The Mindbrush Journal combines modern psychology with thoughtful design to create a journaling experience that truly works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
