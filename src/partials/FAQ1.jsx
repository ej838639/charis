import React from 'react';
import Image01 from '../images/josue-escoto-eXEbGKcvtCo-unsplash.jpg';

function LearnMediation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">FAQ</h1>
            <p className="text-xl text-gray-400">Common questions about mediation.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* Text on left, image on right */}
            <div className="md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width="540" height="405" alt="Features 01" />
                Photo by <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://unsplash.com/ko/@joshescoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josue Escoto</a>
              </div>
              {/* Text */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <details>
                  <summary className="h4 pb-2">What kinds of conflicts does Charis Mediation handle?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Parent/teen issues, family conflicts, parenting plans, divorce, elder care challenges, neighbor disputes, church conflicts, and more. Click "Request an Intake" to see if Charis can help.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Why should I try mediation?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Mediation is all about win-win. Mediation creates an environment where both parties can be heard and helps them find solutions that work for everyone. Parties who go through mediation have a much better chance of preserving on-going relationships.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">My issue involves a lot of emotions. How does mediation handle that?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Mediation has a structured process that creates an environment to work through difficult emotional issues.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What is the difference among coaching, mediation, and conciliation?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Coaching involves multipe one-on-one sessions to create a plan to deal with conflict. Mediation facilitates a conversation among parties following a structured process to reach a resolution of substative issues. Conciliation involves a multi-phased process over 3-5 days to help parties reconcile a relationship.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Is coaching, mediation, or conciliation best for my sitiation?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Click "Request an Intake" above, and Charis Mediation will help you find the right solution for you.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">How is counseling different than mediation or coaching?</summary>
                    <div className="pb-8">
                      <p className="text-xl text-gray-400">Mediators work with two or more people. Counselors work with an individual.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Does Charis Mediation offer arbitration?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">Charis does not offer arbitration. Mediators facilitate a conversation among parties so they can make decisions that are important to them. Arbitrators hear the evidence from both sides and make a binding decision.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What if the person I'm in conflict with is not willing to try mediation?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">A mediation can only be done when both parties have the sincere intention of trying to find a resolution. This includes a willingness to take proposals seriously, make reasonable counter proposals, and make good on their offers.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Who decides the outcome of the dispute?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">Mediators do not decide the outcome of the dispute nor do they advocate for either party. In mediation, both parties negotiate for themselves.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What if I am afraid of verbal abuse during the conversation?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">We encourage behaviors that promote a civil conversation. Cultivate an attitude of discovery and curiosity. Humanize the other party. Let them talk until they are finished. Explain back to them what you think they are going for. Acknowledge what you can, including any defensiveness. Clarify your position without minimizing theirs.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">How much does mediation cost?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">Click on the "Request an Intake" button above and Charis Mediation will review the cost structure with you.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Why choose Charis Mediation?</summary>
                      <div className="pb-8">
                        <p className="text-xl text-gray-400">The lead mediator, Anita, is a certified mediator with over a thousand hours mediating cases. She will give you the space to feel heard, coach you to create a plan, mediate a conflict, or walk you through a conciliation process--whatever you need to reconcile your relationships.</p>
                      </div>
                </details>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnMediation;