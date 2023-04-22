import React from 'react';

import FeatImage01 from '../images/dave-lowe-vI9wPJ8L5MA-unsplash.jpg';
import FeatImage02 from '../images/gary-butterfield-YG8rZ323UsU-unsplash.jpg';
import FeatImage03 from '../images/carl-hunley-jr-kZ_GzLAy4WM-unsplash.jpg';
import FeatImage04 from '../images/etienne-girardet-RuMqg2cs-M0-unsplash.jpg';

function FeaturesZigzag() {
  return (
    <section>
      <div className="bg-black-900 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-gray-100 bg-green-600 rounded-full mb-4">Get to know us</div> */}
            <h2 className="h2 pb-4">Our values foster a safe space for you to feel heard as we mediate the conflict</h2>
            <h4 className="h4">Compassion, Curiosity, Hope, Relationship</h4>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="540" height="405" alt="Features 01" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/@thelowedown?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Lowe</a> 
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="h4 font-architects-daughter text-green-600 mb-2">Overflow with compassion</div>
                  <h3 className="h3 mb-3">Compassion</h3>
                  <p className="p mb-4">We believe everyone in conflict should be treated with compassion and we desire to create a compassionate environment.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="540" height="405" alt="Features 02" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/@garybpt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gary Butterfield</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="h4 font-architects-daughter text-green-600 mb-2">Be curious</div>
                  <h3 className="h3 mb-3">Curiosity</h3>
                  <p className="p mb-4">We have a posture of curiosity and a desire to see the uniqueness of every individual and the uniqueness of the circumstances they face. We are interested in learning more.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="540" height="405" alt="Features 03" />
                Photo by <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/de/@workbycarl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carl Hunley Jr</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="h4 font-architects-daughter text-green-600 mb-2">Have hope</div>
                  <h3 className="h3 mb-3">Hope</h3>
                  <p className="p mb-4">We will hold the hope for others in conflict and we will look for what is possible. For those that have their hope in Christ we will reflect and remember the hope we have in Him.</p>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width="540" height="405" alt="Features 04" />
                Photo by <a className="text-green-600 hover:text-green-200 transition duration-150 ease-in-out" href="https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Etienne Girardet</a>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="h4 font-architects-daughter text-green-600 mb-2">Lead with relationship</div>
                  <h3 className="h3 mb-3">Relationship</h3>
                  <p className="p mb-4">Loving and Christ-centered relationships are hard work. We value supporting and equipping as people do the hard work of pursuing and reconciling relationships.</p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;