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
            <h2 className="h2 mb-4">What people are saying about us</h2>
            <p className="p text-xl">Here are some experiences from people who have worked with us.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-4xl">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
              <blockquote className="text-lg text-gray-200 grow">— My time working with Anita was one of the most if not the most impactful experiences of my life. She provided a safe place every time we talked, she listened with genuine curiosity and offered meaningful insight. Her desire to keep Jesus as the foundation of everything we talked about was refreshing and encouraging. I am so thankful for our time together! I strongly recommend going to see Anita!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-green-600 not-italic">Sarah</cite> | <a className="text-green-600">Client</a> | <a className="text-green-600">Seattle, WA</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-black-900" data-aos="fade-up">
              <blockquote className="text-lg text-gray-200 grow">— Anita is one of my most cherished colleagues and friends. I can attest that her strong faith does indeed generate her values and behavior. She is hardworking, authentic and is a true peacemaker. She brings patience and a deep kindness to her work and is a joy to know.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-green-600 not-italic">Gini Ann</cite> | <a className="text-green-600">Mediator</a> | <a className="text-green-600">Seattle, WA</a>
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
              {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
                      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                        </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">— Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Mary Jane</cite> - <a className="text-purple-600">Seattle, WA</a>
                  </div>
                </div> */}

                {/* 3rd testimonial */}
                {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
                        <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                        </svg>
                        </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">Joe Schmoe</cite> - <a className="text-purple-600">Lynnwood, WA</a>
                    </div>
                  </div> */}

                </div>

              </div>
            </div>
</section>
  );
}

export default Testimonials;
