import React from 'react';
import Image01 from '../images/josue-escoto-eXEbGKcvtCo-unsplash.jpg';

function LearnMediation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">FAQ</h1>
            <p className="text-xl text-gray-400">Common questions about mediation.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* Text on left, image on right */}
            <div className="md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width="540" height="405" alt="Features 01" />
                Photo by <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/ko/@joshescoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josue Escoto</a>
              </div>
              {/* Text */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <details>
                  <summary className="h4 pb-2">How is counseling different than mediation or coaching?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Mediators work with two or more people. Counselors work with an individual.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2">Does Charis Mediation offer arbitration?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">Charis does not offer arbitration. Mediators facilitate a conversation among parties so they can make decisions that are important to them. Arbitrators hear the evidence from both sides and make a binding decision.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2">What if the person I'm in conflict with is not willing to try mediation?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">A mediation can only be done with all parties agree to try it.</p>
                      </div>
                </details>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnMediation;