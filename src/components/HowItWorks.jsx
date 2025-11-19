import React from 'react'
import StepCard from "./StepCard";
import { steps } from "../assets/data";
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-us-cream py-16 text-center">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-us-textDark mb-3">
          How it Works
        </h2>

        <p className="text-us-textDark/80 max-w-2xl mx-auto mb-12">
          Finding your perfect student home has never been easier.
          Follow these simple steps to secure your accommodation.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map(step => (
            <StepCard
              key={step.id}
              icon={step.icon}
              iconType={step.iconType}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/register"
            className="bg-us-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-us-primary/80 transition"
          >
            Get Started Today
          </a>
        </div>

      </div>
    </section>
  );
}
