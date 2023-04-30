import React from 'react';

function ServicesNote() {
  return (
    <section>
      <div className="bg-green-600 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 border-t border-gray-800" >

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-800">All services are provided according to the <a className="text-gray-200 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.americanbar.org/content/dam/aba/administrative/dispute_resolution/dispute_resolution/model_standards_conduct_april2007.pdf">Model Standards of Conduct for Mediators</a>, <a className="text-gray-200 hover:text-gray-200 transition duration-150 ease-in-out" href="https://apps.leg.wa.gov/rcw/default.aspx?cite=7.07">Washington Uniform Mediation Act</a>, and the <a className="text-gray-200 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.aorhope.org/icc-rules">Rules of Procedure for Christian Conciliation</a> </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesNote;
