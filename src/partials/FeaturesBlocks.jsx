import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">You need a space to feel heard and considered as you figure out how to move forward in conflict.</h2>
            <p className="text-xl text-gray-400">Charis Mediation offers a grace filled, structured process based on faith-based principles to help people reconcile their relationships.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Coaching</h4>
              <p className="text-lg text-gray-400 text-center">One on one coaching over multiple sessions to create a plan to deal with conflict, while also exploring biblical principles of confession, forgiveness, loving confrontation and self examination according to scripture.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Mediation</h4>
              <p className="text-lg text-gray-400 text-center">Facilitate conversation following a structured process over several hours or all day to reach a resolution of substantive  issues. Mediation can be used for divorce, parenting plans, business disagreements etc.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Conciliation Process</h4>
              <p className="text-lg text-gray-400 text-center">Conciliation is a multi-phased process over 3-5 days to help parties reconcile a relationship. The focus is on biblical principles including confession, forgiveness, loving confrontation and biblical self reflection. This process is grounded in the Gospel principles of Loving God first and foremost and loving others (Mark 12:30-31).
              </p>
            </div>
          </div>

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-0">
            <p className="text-xl text-gray-400">-----------------------------------------------------------------------------------------------------</p>
            <p className="text-xl text-gray-400">All services are provided according to the Model Standard of Mediators, Uniform Mediation Act,</p>
            <p className="text-xl text-gray-400">and the Rules of Procedure found in the Guidelines for Christian Conciliation</p>
            <p className="text-xl text-gray-400">-----------------------------------------------------------------------------------------------------</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
