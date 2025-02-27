import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import ServicesNote from '../partials/ServicesNote';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials_v2';
// import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="bg-green-600 w-full h-full flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Testimonials />
        <FeaturesBlocks />
        <ServicesNote />
        <FeaturesZigZag />
        {/* <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;