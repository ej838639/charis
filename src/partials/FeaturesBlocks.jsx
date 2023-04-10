import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="bg-black-900 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 gray-200">Our services provide an environment to move forward in conflict</h2>
            <p2 className="p2">Charis Mediation offers a grace filled, structured process based on faith-based principles to help people reconcile their relationships</p2>
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
              {/* <h4 className="h4 text-gray-200 mb-2">Coaching</h4> */}
              <h4 className="h4 inline-flex font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Coaching</h4>
              <p2 className="p2 text-center">One on one coaching over multiple sessions to create a plan to deal with conflict, while also exploring biblical principles of confession, forgiveness, loving confrontation and self examination according to scripture.</p2>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg> */}
              {/* <h4 className="h4 text-gray-200 mb-2">Mediation</h4> */}
              <h4 className="h4 inline-flex font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Mediation</h4>
              <p2 className="p2 text-center">Facilitated conversation following a structured process over several hours or all day to reach a resolution of substantive  issues. Mediation can be used for division of property, parenting plans, and business agreements.</p2>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg> */}
              {/* <h4 className="h4 text-gray-200 mb-2">Conciliation Process</h4> */}
              <h4 className="h4 inline-flex font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Reconciliation</h4>
              <p2 className="p2 text-center">Reconciliation is a multi-phased process over multiple days to help parties reconcile a relationship. The focus is on biblical principles including confession, forgiveness, loving confrontation and Biblical self reflection.</p2>
              {/* <p className="text-lg text-gray-100 text-center">Reconciliation is a multi-phased process over 3-5 days to help parties reconcile a relationship. The focus is on biblical principles including confession, forgiveness, loving confrontation and biblical self reflection. This process is grounded in the Gospel principles of Loving God first and foremost and loving others (Mark 12:30-31).</p> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
