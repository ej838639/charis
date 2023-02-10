import React from 'react';

function MissionVision() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section 1 header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 mb-4">Pursuing peace in relationship requires compassion, curiousity and listening.</h2>
            <p className="text-xl text-gray-400">You need a space to fell heard and considered as you figure out how to move forward in conflict.</p>
          </div>

          {/* Section 2 header */}
          <div className="max-w-6xl mx-auto text-left pb-12 md:pb-20">
            <p className="text-xl text-gray-400">I mediate with individuals and families in conflict to help them reconcile their relationships and resolve issues based on Scriptural principles.</p>
            <br></br>
            <p className="text-xl text-gray-400">Through mediation Charis Mediation offers a structured process for the conversation. Going through a structured process can change the way people think about the conflict and how they communicate. Applying biblical peacemaking principles can change the way they see themselves and those they are in conflict with. Our goal is to offer grace, truth and hope as people explore their goals and options in pursuing peace with others.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Vision</h4>
              <p className="text-lg text-gray-400 text-center">The foundation of our hope is Christ’s love and grace. Based on this foundation, we empower families in conflict to reconcile and strengthen their relationships.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Mission</h4>
              <p className="text-lg text-gray-400 text-center">Charis Mediation offers a grace-filled, structured process based on faith-based principles to help people reconcile their relationships.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;
