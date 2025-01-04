import React, { useState } from 'react';

const testimonials = [
  {
    text: "— My time working with Anita was one of the most if not the most impactful experiences of my life. She provided a safe place every time we talked, she listened with genuine curiosity and offered meaningful insight. Her desire to keep Jesus as the foundation of everything we talked about was refreshing and encouraging. I am so thankful for our time together! I strongly recommend going to see Anita!",
    author: "Sarah",
    role: "Client",
    location: "Seattle, WA"
  },
  {
    text: "— Anita was tactful and persistent peeling back the layers of one quarter century of hurt. Using Biblical principles and many many educational modules that have you saying - “why didn't I know that sooner”. Her gift to get to the root cause is exceptional. Actually she doesn’t do it, she steers both parties to discover it themselves. It may take that bit longer but has a more lasting effect discovering it for yourself under Anita's direction.",
    author: "Ray",
    role: "Client",
    location: "Cincinnati, OH"
  },
  {
    text: "— Anita created a very safe space to share emotions, struggles and issues and provided many valuable tools and resources to help solve the problems. She shared many Biblical principles on confession and forgiveness. She shared several great learning modules that we can use in the future. She created a rapport that facilitated open sharing of emotions and issues which ultimately helped to resolve some conflicts.",
    author: "Jane",
    role: "Client",
    location: "Cincinnati, OH"
  },
  {
    text: "— Anita is one of my most cherished colleagues and friends. I can attest that her strong faith does indeed generate her values and behavior. She is hardworking, authentic and is a true peacemaker. She brings patience and a deep kindness to her work and is a joy to know.",
    author: "Gini Ann",
    role: "Mediator",
    location: "Seattle, WA"
  }
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((index + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((index - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 pb-4">What people are saying about us</h2>
            <h4 className="h4 text-xl">Here are some experiences from people who have worked with us</h4>
          </div>

          {/* Testimonials */}
          <div className="flex justify-between items-center">
            <button onClick={prevTestimonial} className="text-gray-200">←</button>
            <div className="grid grid-cols-2 gap-6">
              {testimonials.slice(index, index + 2).map((testimonial, i) => (
                <div key={i} className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
                  <blockquote className="text-lg text-gray-200 grow">{testimonial.text}</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-green-600 not-italic">{testimonial.author}</cite> | <a className="text-green-600">{testimonial.role}</a> | <a className="text-green-600">{testimonial.location}</a>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={nextTestimonial} className="text-gray-200">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;