import React from 'react';
import AnitaKarissa from '../images/AnitaKarissa.jpg';

function AboutAnita() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Get to know Anita</h1>
            <p className="text-xl text-gray-400">Anita Johnson</p>
            <p className="text-xl text-gray-400">MSW, Certified Mediator</p>
            <p className="text-xl text-gray-400">Lead Mediator and Conciliator for Charis Mediation</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={AnitaKarissa} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-xl text-gray-400 mb-4">Anita has a passion for Biblical Peacemaking and Reconciliation which combines her love of in-depth Bible Study and Conflict Resolution.  Anita received a B.S. in Psychology from George Fox University and a Master of Social Work degree from the University of Washington.  Anita became a Certified Mediator through the King County Dispute Resolution Center in 2011 and the Washington Mediator Association in 2020. She was on staff at the King County Dispute Resolution Center from 2013 to 2020 working with their Court Mediation Programs. In 2020 Anita switched her focus to Biblical Peacemaking and is pursuing certification as a Christian Conciliator through the Institute for Christian Conciliation.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom section */}
          <div className="max-w-6xl mx-auto text-left pb-12 md:pb-16">
            <p className="text-xl text-gray-400">Anita wants to take her experience and offer a process to those in conflict in order to help them explore how biblical peacemaking principles apply to their unique circumstances and create a next step plan to pursue reconciliation.</p>
            <p className="text-xl text-gray-400">Anita and her husband Eric have been married since 1997 and have 2 young adult daughters. Their daughters are a delight but that doesn’t stop Anita from practicing her mediation skills on them. In her free time she enjoys long walks, watching movies, and enjoying a good cup of coffee with friends.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutAnita;