import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import FAQ1 from '../partials/FAQ1';
// import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

function FAQ() {
  return (
    <div className="bg-green-600 flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <FAQ1 />
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default FAQ;