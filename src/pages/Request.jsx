import React from 'react';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/afe5dc60-bb78-11ed-ae44-d7f6e782ac69";

const RequestForm = () => {
  return (
    <div className="bg-green-600 flex flex-col px-4 sm:px-6 min-h-screen overflow-hidden">

    {/*  Site header */}
    <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="pt-4 pb-12 md:pt-8 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Request an Intake</h1>
              <p className="p">Complete the fields below so we can evaluate your situation,</p>
              <p className="p">and we will respond within 7 days.</p>
            </div>

            <form
              action={FORM_ENDPOINT}
              method="POST"
              target="_blank"
              rel="noopener"
            >
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      Name
                    </label>
                    <input name="Name" placeholder="Your Name" type="text" required
                      className="form-input w-full placeholder-gray-200 text-white-900"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      Email
                    </label>
                    <input name="Email" placeholder="you@provider.com" type="email" required
                      className="form-input w-full placeholder-gray-200 text-white-900"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      Phone
                    </label>
                    <input name="Phone" placeholder="xxx.xxx.xxxx" type="tel" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                      className="form-input w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label htmlFor="leave-message" className="block text-white-900 text-sm font-medium mb-1">
                      Can we leave a message at this number?
                    </label>
                    <select id="leave-message" name="Leave message?" defaultValue="" required
                      className="form-input w-full placeholder-gray-200 text-white-900">
                      <option value="" disabled>Select an answer</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      How did you hear about us?
                    </label>
                    <select name="How did you hear about us" required type="text" 
                      className="form-input w-full placeholder-gray-200 text-white-900">
                      <option>Recommendation</option>
                      <option>Google search</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      If there is another way you heard about, please describe it below: (optional)
                    </label>
                    <input name="How did you hear about us (other)" placeholder="If other, describe how you heard about us." type="text"
                      className="form-input w-full placeholder-gray-200 text-white-900"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      What are the main issues in this conflict?
                    </label>
                    <textarea name="Main Issues" placeholder="Describe the issues." type="text" required 
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      Who is involved?
                    </label>
                    <textarea name="Parties involved" placeholder="List the names, ages, and relationships of all the primary people and groups involved." type="text" required 
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      What faith backgrounds are involved?
                    </label>
                    <textarea name="Faith backgrounds" placeholder="List your faith background and those of the other people involved." type="text" required
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      How long has the conflict been going on?
                    </label>
                    <textarea name="Conflict length" placeholder="List the conflict time duration in months or years. Or list when the conflict started." type="text" required 
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      What steps have been taken to deal with the conflict?
                    </label>
                    <textarea name="Steps taken" placeholder="List what you and others have done to handle the conflict, and the challenges you have faced." type="text" required 
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      What are your goals to resolve the conflict?
                    </label>
                    <textarea name="Conflict goals" placeholder="List what a successful resolution looks like for you." type="text" required 
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full">
                    <label className="block text-white-900 text-sm font-medium mb-1">
                      What else would you like us to know? (optional)
                    </label>
                    <textarea name="Other info" placeholder="List anything else it would be helpful for us to know about the conflict." type="text" 
                      className="form-input h-24 w-full placeholder-gray-200 text-white-900" 
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-sm mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full">
                    <button
                      className="btn text-white bg-black-900 hover:bg-gray-600 w-full"
                      type="submit"
                    >
                      Submit
                    </button>
                    <p className="mt-2 text-sm">Check the new tab for the result of your submission.</p>
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
