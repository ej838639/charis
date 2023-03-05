import React, { useState } from "react";
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Home from '../pages/Home';
import Footer from '../partials/Footer';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/376e3d10-b7f7-11ed-8d0b-95fdf80f9cee";

const AskForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Home />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

    {/*  Site header */}
    <Header />

        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          <section className="relative">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">Ask a Question</h1>
                  <p className="text-xl text-gray-400">Do you still have questions after visiting "What is Mediation" and "FAQ" above?</p>
                  <p className="text-xl text-gray-400">Submit a question below and Charis Mediation will respond within 7 days.</p>
                </div>

                <form
                  action={FORM_ENDPOINT}
                  onSubmit={handleSubmit}
                  method="POST"
                  target="_blank"
                >
                  <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="name">Name</label>
                        <input id="lastName" type="text" className="form-input w-full text-gray-300" name="name" placeholder="Your Name" required />
                      </div>
                    </div>                            
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input id="email" type="email" className="form-input w-full text-gray-300" name="email" placeholder="you@provider.com" required />
                      </div>
                    </div>              
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="phone">Phone (optional)</label>
                        <input id="phone" type="phone" className="form-input w-full text-gray-300" name="phone" placeholder="xxx.xxx.xxxx"/>
                      </div>
                    </div>              
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                        <textarea id="message" type="text" className="form-input h-32 w-full text-gray-300" name="message" placeholder="Type your question here" required />
                      </div>
                    </div>  

                    {/* <div className="mb-3 pt-0">
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                      />
                    </div> */}
                  </div>
                  <div className="max-w-sm mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button
                          className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AskForm;