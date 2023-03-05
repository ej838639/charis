import React, { useState } from "react";
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Home from './Home';
import Footer from '../partials/Footer';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/afe5dc60-bb78-11ed-ae44-d7f6e782ac69";

const RequestForm = () => {
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
                  <h1 className="h1">Request an Intake</h1>
                  <p className="text-xl text-gray-400">Complete the fields below so we can evaluate your situation,</p>
                  <p className="text-xl text-gray-400">and we will respond within 7 days.</p>
                </div>

                <form
                  action={FORM_ENDPOINT}
                  onSubmit={handleSubmit}
                  method="POST"
                  target="_blank"
                >
                  <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          Name
                        </label>
                        <input name="Name" placeholder="Your Name" type="text" required
                          className="form-input w-full text-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          Email
                        </label>
                        <input name="Email" placeholder="you@provider.com" type="email" required
                          className="form-input w-full text-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          Phone
                        </label>
                        <input name="Phone" placeholder="xxx.xxx.xxxx" type="tel" pattern="[0-9]{3}.[0-9]{3}.[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                          className="form-input w-full text-gray-300" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          Can we leave a message at this number?
                        </label>
                        <select name="Leave message?" type="text" required
                          className="form-input w-full text-gray-300">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          How did you hear about us?
                        </label>
                        <select name="How did you hear about us" required type="text" 
                          className="form-input w-full text-gray-300">
                          <option>Recommendation</option>
                          <option>Google search</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          If there is another way you heard about, please describe it below: (optional)
                        </label>
                        <input name="How did you hear about us (other)" placeholder="If other, describe how you heard about us" type="text"
                          className="form-input w-full text-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full">
                        <label className="block text-gray-300 text-sm font-medium mb-1">
                          What are the main issues in this conflict?
                        </label>
                        <textarea name="Main Issues" placeholder="Describe the issues" required 
                          type="text" className="form-input h-32 w-full text-gray-300" 
                        />
                      </div>
                    </div>  
                  </div>
                  <div className="max-w-sm mx-auto px-4 sm:px-6">
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full">
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

export default RequestForm;