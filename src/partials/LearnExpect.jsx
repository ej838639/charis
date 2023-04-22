import React from 'react';

import FeatImage01 from '../images/nick-fewings-mki48azlI2k-unsplash.jpg';
import FeatImage02 from '../images/etienne-boulanger-erCPgyXNlto-unsplash.jpg';
import FeatImage03 from '../images/chris-liverani-9cd8qOgeNIY-unsplash.jpg';
import FeatImage04 from '../images/bree-anne-GaqsAMia7ck-unsplash-v2.jpg';
import FeatImage05 from '../images/chris-lawton-5IHz5WhosQE-unsplash.jpg';
import FeatImage06 from '../images/priscilla-du-preez-xM4wUnvbCKk-unsplash-v2.jpg';

function LearnExpect() {
  return (
    <section>
      <div className="bg-black-900 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Get to know us</div> */}
            <h2 className="h2 mb-4">What can I expect from a mediation?</h2>
            <h4 className="h4 pb-4">An objective facilitator using a structured conversation</h4>
            <p className="p">to explore new ways to address the conflict and new solutions</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="540" height="405" alt="Features 01" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/de/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Fewings</a> 
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Role of the Mediator</h3>
                  <p className="p mb-4">The mediator is a trained facilitator that is advocating for a productive conversation and the pursuit of peace without taking the side of one party over another. Through listening, questions and observations the mediator’s goal is to help surface goals, values, and interests. Mediators are facilitators and will not impose a solution on parties.  During the intake process we explore if the parties are comfortable with the mediator they are working with and if they have any concerns about partiality.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="540" height="405" alt="Features 02" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/@etienneblg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Etienne Boulanger</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Role of the Parties</h3>
                  <p className="p mb-4">In mediation, the parties are the ones who make the final decisions. Mediation allows parties to address the heart of the conflict and explore ways to pursue resolution and peaceful relationships. This allows parties to make informed and thoughtful decisions about how they want to move forward in conflict. A mediation can only be done when both parties have the sincere intention of trying to find a resolution or pursue reconciliation. During the intake process we will explore what parties need in order to be ready for mediation and address concerns they have.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="540" height="405" alt="Features 03" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Liverani</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Good Faith</h3>
                  <p className="p mb-4">In order for mediation to be effective both parties need to come to mediation in good faith. This involves a sincere intention of trying to find a resolution and to pursue peace with the other party, a willingness to listen to the concerns and needs of the other party and explore ways they have contributed to the conflict. During the intake process we will be exploring good faith and determining with each party if mediation is a good fit for what they need.</p>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width="540" height="405" alt="Features 04" />
                Photo by <a className="text-green-600 hover:text-green-200 transition duration-150 ease-in-out" href="https://unsplash.com/de/@breebuddy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bree Anne</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Structured Conversation</h3>
                  <p className="p mb-4">One of the things that makes mediation unique is that parties are guided through a very effective, structured conversation. Mediation involves a multi-step process that includes sharing the parties perspectives, listening to the other party, identifying specific areas of concern and creating a next-step plan. Going through a mediation process changes how parties communicate and how they think about possible solutions or reconciliation.</p>
                </div>
              </div>
            </div>

            {/* 5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage05} width="540" height="405" alt="Features 05" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Lawton</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Process and Confidentiality</h3>
                  <p className="p mb-4">At Charis Mediation we have seen how effective and beneficial the mediation process is for helping individuals pursue peace. When going through the intake process we discuss the steps of the process in detail before parties commit to mediation. According to the Washington Mediation Act and the Rules and Procedures for Christian Conciliation, the mediation process is private and confidentiality is maintained unless there is a concern about the ongoing safety of a vulnerable person or criminal activity.</p>
                </div>
              </div>
            </div>

            {/* 6th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage06} width="540" height="405" alt="Features 06" />
                Photo by <a className="text-green-600 hover:text-green-200 transition duration-150 ease-in-out" href="https://unsplash.com/@priscilladupreez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Priscilla Du Preez</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Safety</h3>
                  <p className="p mb-4">Reconciliation and resolution cannot be accomplished when people are fearful or feel unsafe. At Charis Mediation it is of the utmost importance that all parties feel emotionally and physically safe. From intake to resolution mediators will be checking in with parties to see if they have concerns and feel safe and will address any concerns. According to the Washington Mediation Act and the Rules and Procedures for Christian Conciliation any disclosures of current abuse and neglect or criminal activities will be reported to the appropriate authorities.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default LearnExpect;