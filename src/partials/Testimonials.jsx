import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
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
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-4xl">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
              <blockquote className="text-lg text-gray-200 grow">— My time working with Anita was one of the most if not the most impactful experiences of my life. She provided a safe place every time we talked, she listened with genuine curiosity and offered meaningful insight. Her desire to keep Jesus as the foundation of everything we talked about was refreshing and encouraging. I am so thankful for our time together! I strongly recommend going to see Anita!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-green-600 not-italic">Sarah</cite> | <a className="text-green-600">Client</a> | <a className="text-green-600">Seattle, WA</a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
              <blockquote className="text-lg text-gray-200 grow">— Anita was tactful and persistent peeling back the layers of one quarter century of hurt. Using Biblical principles and many many educational modules that have you saying - “why didn't I know that sooner”. Her gift to get to the root cause is exceptional. Actually she doesn’t do it, she steers both parties to discover it themselves. It may take that bit longer but has a more lasting effect discovering it for yourself under Anita's direction.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-green-600 not-italic">Ray</cite> | <a className="text-green-600">Client</a> | <a className="text-green-600">Cincinnati, OH</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
              <blockquote className="text-lg text-gray-200 grow">— Anita created a very safe space to share emotions, struggles and issues and provided many valuable tools and resources to help solve the problems. She shared many Biblical principles on confession and forgiveness. She shared several great learning modules that we can use in the future. She created a rapport that facilitated open sharing of emotions and issues which ultimately helped to resolve some conflicts.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-green-600 not-italic">Jane</cite> | <a className="text-green-600">Client</a> | <a className="text-green-600">Cincinnati, OH</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
              <blockquote className="text-lg text-gray-200 grow">— Anita is one of my most cherished colleagues and friends. I can attest that her strong faith does indeed generate her values and behavior. She is hardworking, authentic and is a true peacemaker. She brings patience and a deep kindness to her work and is a joy to know.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-green-600 not-italic">Gini Ann</cite> | <a className="text-green-600">Mediator</a> | <a className="text-green-600">Seattle, WA</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
