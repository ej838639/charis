import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="bg-black-900 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 pb-4 gray-200">Our services provide an environment to move forward in conflict</h2>
            <h4 className="h4 pb-4">Charis Mediation offers a grace filled, structured process</h4>
            <p className="p">It is based on faith-based principles to help people reconcile their relationships</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 inline-flex font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Coaching</h4>
              <p2 className="p2 text-center">One on one coaching over multiple sessions to create a plan to deal with conflict, while also exploring biblical principles of confession, forgiveness, loving confrontation and self examination according to scripture.</p2>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 inline-flex font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Mediation</h4>
              <p2 className="p2 text-center">Facilitated conversation following a structured process over several hours or all day to reach a resolution of substantive  issues. Mediation can be used for division of property, parenting plans, and business agreements.</p2>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 inline-flex font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Reconciliation</h4>
              <p2 className="p2 text-center">Reconciliation is a multi-phased process over multiple days to help parties reconcile a relationship. The focus is on biblical principles including confession, forgiveness, loving confrontation and Biblical self reflection.</p2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
