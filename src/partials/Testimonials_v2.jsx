import React, { useState, useEffect } from 'react';
import '../css/Testimonials.css'; // Import the CSS file for transitions

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
  const [fade, setFade] = useState(true);

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((index + 2) % testimonials.length);
      setFade(true);
    }, 1000);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((index - 2 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 1000);
  };

  return (
    <section>
      <div className="max-w-3xl mx-auto text-center pb-6 md:pb-6">
        <h2 className="h2 pb-4">What people are saying about us</h2>
        <h4 className="h4 text-xl">(Names are changed to protect the privacy of clients.)</h4>
      </div>
      
      <div className="testimonial-container">
        <div className="testimonial-column">
          <blockquote className={`testimonial-text ${fade ? 'fade-in' : 'fade-out'}`}>
            {testimonials[index].text}
          </blockquote>
          <div className={`testimonial-author ${fade ? 'fade-in' : 'fade-out'}`}>
            <cite>{testimonials[index].author}</cite> | <span>{testimonials[index].role}</span> | <span>{testimonials[index].location}</span>
          </div>
        </div>
        <div className="testimonial-column">
          <blockquote className={`testimonial-text ${fade ? 'fade-in' : 'fade-out'}`}>
            {testimonials[(index + 1) % testimonials.length].text}
          </blockquote>
          <div className={`testimonial-author ${fade ? 'fade-in' : 'fade-out'}`}>
            <cite>{testimonials[(index + 1) % testimonials.length].author}</cite> | <span>{testimonials[(index + 1) % testimonials.length].role}</span> | <span>{testimonials[(index + 1) % testimonials.length].location}</span>
          </div>
        </div>
      </div>
      <div className="testimonial-buttons">
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </section>
  );
}

export default Testimonials;