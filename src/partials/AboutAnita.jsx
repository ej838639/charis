import React from 'react';
import AnitaAbout from '../images/AnitaAbout.jpg';

function AboutAnita() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 pt-32 md:pt-40">
            <h1 className="h1 mb-4">Get to know Anita</h1>
            <p className="text-xl text-white-900">Anita Johnson</p>
            <p className="text-xl text-white-900">MSW, Certified Mediator</p>
            <p className="text-xl text-white-900">Lead Mediator and Conciliator for Charis Mediation</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={AnitaAbout} width="540" height="405"/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-xl text-white-900 pb-6">Anita has a passion for reconciliation informed by Scriptural peacemaking principles. These principles reinforce her work by bringing her curiosity, compassion, and hope for healed relationships.</p>
                  <p className="text-xl text-white-900 pb-6">She received a Bachelor of Science in Psychology from George Fox University and a Master of Social Work from the University of Washington. Anita became a Certified Mediator through the King County Dispute Resolution Center in 2011 and the Washington Mediator Association in 2020. Before she opened her private practice, Anita was on staff at the King County Dispute Resolution Center from 2013 to 2020 working with their Court Mediation Programs that included running the training program for new court mediators. She mediated and supervised court mediators and coordinated with the Presiding Judge and court staff in King County District Court.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom section */}
          <div className="max-w-6xl mx-auto text-left pt-6 pb-2">
            <p className="text-xl text-white-900 pb-6">In addition, she was a part of the Veteran, Senior and Human Service Program using mediation and conflict coaching to strengthen housing stability. In 2020 Anita switched her focus to Biblical Peacemaking and is pursuing certification as a Christian Conciliator through the Institute for Christian Conciliation. This certification process includes in-depth education on peacemaking principles based on Scripture. She did several conciliation and coaching cases through Sound Conciliation LLC before starting her own practice.</p>
            <p className="text-xl text-white-900 pb-6">Anita wants to take her experience and offer a process to those in conflict in order to help them explore how biblical peacemaking principles apply to their unique circumstances and create a next step plan to pursue reconciliation.</p>
            <p className="text-xl text-white-900 pb-6">Anita and her husband Eric have been married since 1997 and have 2 young adult daughters. Their daughters are a delight but that doesn’t stop Anita from practicing her mediation skills on them. In her free time she enjoys long walks, watching movies, and enjoying a good cup of coffee with friends.</p>
          </div>

        </div>
    </section>
  );
}

export default AboutAnita;