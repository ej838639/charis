import React from 'react';

function LearnExpect() {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-4">What can I expect from a mediation?</h1>
          <p className="p text-left">Mediation uses an objective facilitator to walk people through a structured conversation that allows them to explore new ways to address their conflict and potential solutions.</p>

        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
            </svg> */}
            <h4 className="h4 mb-2">Role of the Mediator</h4>
            <p className="p text-left mb-8">The mediator is a trained facilitator that is advocating for a productive conversation and the pursuit of peace without taking the side of one party over another.  Through listening, questions and observations the mediator’s goal is to help surface goals, values, and interests so that the parties can address the heart of the conflict and explore ways to pursue resolution and peaceful relationships. This allows parties to make informed and thoughtful decisions about how they want to move forward in conflict. For parties that are Christians and embrace Scripture, Charis Mediation mediators have a knowledge and value of Scripture and address how Biblical truth applies to the nature of the conflict and the pursuit of peace.</p>
            <p className="p text-left">Mediators are facilitators and will not impose a solution on parties or be in the role of spiritual authority over the parties. Mediators are guides not decision makers. In mediation, parties are the ones who make the final decisions. During the intake process we explore if the parties are comfortable with the mediator they are working with and if they have any concerns about partiality. </p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg> */}
            <h4 className="h4 mb-2">Structured Confidential Conversation</h4>
            <p className="p text-left mb-8">One of the things that makes mediation unique is that parties are guided through a very effective structured conversation. Mediation involves a multi-step process that includes sharing the parties perspectives, listening to the other party, identifying specific areas of concern and creating a next-step plan. Going through a mediation process changes how parties communicate and how they think about possible solutions or reconciliation. At Charis Mediation we have seen how effective and beneficial the mediation process is for helping individuals pursue peace. When going through the intake process we discuss the steps of the process in detail before parties commit to mediation.</p>
            <p className="p text-left">According to the Washington Mediation Act and the Rules and Procedures for Christian Conciliation, the mediation process is private and confidentiality is maintained unless there is a concern about  the ongoing safety of a vulnerable person or criminal activity.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg> */}
            <h4 className="h4 mb-2">Good Faith</h4>
            <p className="p text-left">In order for mediation to be effective both parties need to come to mediation in good faith. This involves a sincere intention of trying to find a resolution and to pursue peace with the other party, a willingness to listen to the concerns and needs of the other party and explore ways they have contributed to the conflict. During the intake process we will be exploring  good faith and determining with each party if mediation is a good fit for what they need.</p>
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg> */}
            <h4 className="h4 mb-2">Safety</h4>
            <p className="p text-left">Reconciliation and resolution cannot be accomplished when people are fearful or feel unsafe. At Charis Mediation it is of the utmost importance that all parties feel emotionally and physically safe. From intake to resolution mediators will be checking in with parties to see if they have concerns and feel safe and will address any concerns. According to the Washington Mediation Act and the Rules and Procedures for Christian Conciliation any disclosures of current abuse and neglect or criminal activities will be reported to the appropriate authorities.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LearnExpect;
