import React from 'react';

function LearnExpect() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">What can I expect from a mediation?</h2>
          <p className="text-xl text-gray-400">Mediation is a conversation between two or more people who disagree, led by a trained, neutral mediator.</p>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
            </svg> */}
            <h4 className="h4 mb-2">Role of the Mediator</h4>
            <p className="text-lg text-gray-400 text-center">Facilitate communication among the parties and write up agreements. Mediators do not decide the outcome of the dispute nor do they advocate for either party. In mediation, both parties negotiate for themselves.</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg> */}
            <h4 className="h4 mb-2">Good Faith</h4>
            <p className="text-lg text-gray-400 text-center">Both parties have the sincere intention of trying to find a resolution. This includes a willingess to take proposals seriously, make reasonable counter proposals, and make good on their offers.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg> */}
            <h4 className="h4 mb-2">Civil Conversation</h4>
            <p className="text-lg text-gray-400 text-center">Cultivate an attitude of discovery and curiosity. Humanize the other party. Let them talk until they are finished. Explain back to them what you think they are going for. Acknowledge what you can, including any defensiveness. Clarify your position without minimizing theirs. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnExpect;
