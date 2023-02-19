import React from 'react';
import Image01 from '../images/nikola-johnny-mirkovic-5GzlumDswnM-unsplash.jpg';

function LearnMediation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What is Mediation?</h1>
            <p className="text-xl text-gray-400">Learn how mediation might be the right fit for your situation.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* Text on left, image on right */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width="540" height="405" alt="Features 01" />
                Photo by <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/@thejohnnyme?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Johnny Mirkovic</a> 
  
              </div>
              {/* Text */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-xl text-gray-400 mb-4">Do you have a relationship that looks like these parrots? Do you want it to be different? Is it hard to see a path to a better relationship? Mediation could help you find a workable solution by helping you to communicate with each other. It encourages everyone to collaboratively solve a problem with solutions that meet everyone's needs. Mediation can help you feel heard. It can provide the peace and unity you need.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom section of text */}
          <div className="max-w-6xl mx-auto text-left pb-12 md:pb-16">
            <br></br>
            <p className="text-xl text-gray-400">Mediation can be used in a variety of disputes including divorce, parenting plans, elder care, parent/teen issues, school conflicts among students, neighbor disputes, and church conflicts. It rebuilds relationships, is much faster than the court system, is less costly that litigation, and has a high settlement rate. Mediation allows you to settle conflicts in safe, confidential, and efficient manner. Questions you should consider before going into a mediation are: What is your purpose for having the conversation? What do you hope to accomplish? What is the ideal outcome? What assumptions are you making about the person's intentions? What "buttons" of yours are being pushed? How is your attitude toward the conversations influencing your perception of it? How does the other party perceive the problem? What are their needs and fears? What solution would they suggest? How have you contributed to the problem? How have they?</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LearnMediation;