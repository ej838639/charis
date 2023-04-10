import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import LearnMediation from '../partials/LearnMediation';
import LearnExpect from '../partials/LearnExpect';
// import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

function Learn() {
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
        <LearnMediation />
        <LearnExpect />
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Learn;