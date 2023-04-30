import React from 'react';
import Image01 from '../images/illustrated-question-mark.png';

function FAQ1() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center  pb-12 md:pb-16 pt-32 md:pt-40">
            <h1 className="h1 mb-4">FAQ</h1>
            <h4 className="h4">Common questions about mediation</h4>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* Text on left, image on right */}
            <div className="md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width="540" height="405" alt="Features 01" />
                Photo by <a className="text-black-900 hover:text-gray-600 transition duration-150 ease-in-out" href="https://www.artfinder.com/product/the-illustrated-letter-project-dbdf/">57Design</a>
              </div>
              {/* Text */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
              <details>
                  <summary className="h4 pb-2 pt-8">Why should I try mediation?</summary>
                    <div className="pb-8">
                      <p className="p2">Mediation creates an environment where both parties can be heard and helps them find solutions that work for everyone. Parties who go through mediation have a much better chance of preserving on-going relationships.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What is the difference among coaching, mediation, and a reconciliation process?</summary>
                      <div className="pb-8">
                        <p className="p2">Coaching involves multiple one-on-one sessions to create a plan to deal with conflict. Mediation facilitates a conversation among parties following a structured process to reach a resolution. Reconciliation involves a multi-phased process over 3-5 days to help parties reconcile a relationship.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Is coaching, mediation, or reconciliation best for my situation?</summary>
                      <div className="pb-8">
                        <p className="p2">Click "Request an Intake" above, and Charis Mediation will help you find the right solution for you.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">How is counseling different from mediation or coaching?</summary>
                      <div className="pb-8">
                        <p className="p2">Mediation and coaching walk people through a structured process to help them explore resolution and reconciliation. Counseling is more focused on healing past hurts and usually is an ongoing process until both the counselor and counselee decide the goals of counseling have been met. Mediation and coaching are more focused on exploring possible solutions and ways to reconcile. While mediation and coaching do address past hurts and wrongs it is not the main focus. Mediation and coaching create a next step plan or agreement that could involve counseling when appropriate. There is often a clear beginning, middle and end to the coaching and mediation process.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What kinds of conflicts does Charis Mediation handle?</summary>
                    <div className="pb-8">
                      <p className="p2">Parent/teen issues, family conflicts, parenting plans, divorce, elder care challenges, neighbor disputes, church conflicts, and more. Click "Request an Intake" to see if Charis can help.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Who decides the outcome of the dispute?</summary>
                      <div className="pb-8">
                        <p className="p2">Mediators do not decide the outcome of the dispute nor do they advocate for either party. In mediation, both parties negotiate for themselves.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">Does Charis Mediation offer arbitration?</summary>
                      <div className="pb-8">
                        <p className="p2">Arbitration is when parties choose a neutral arbitrator to decide a dispute for them instead of going to court. Charis does not offer arbitration. A mediator facilitates a conversation among parties so they can make decisions that are important to them. An arbitrator hears the evidence from both sides and make a binding decision. If you would like a referral to Christian Arbitration let us know in by clicking “Ask a question” above.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What if I am not a Christian or the person I am in conflict with is not a Christian?</summary>
                    <div className="pb-8">
                      <p className="p2">At Charis Mediation it is important to us to meet people where they are at. We value being considerate and respectful of the personal views and beliefs that parties hold to. We discuss and apply Biblical principles for those that believe that Scripture is authoritative, but these principles will not be imposed on anyone that does not hold this view. The process and facilitation are the same regardless of the beliefs of those participating in the mediation. For those that want to address relational issues in a non-Christian setting, we address common moral standards and individual values that are important in pursuing reconciliation.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">My issue involves a lot of emotions. How does mediation handle that?</summary>
                    <div className="pb-8">
                      <p className="p2">At Charis Mediation it is of the utmost importance that all parties feel emotionally and physically safe. From intake to resolution mediators will be checking in with parties to see if they have concerns and feel safe and will address any concerns. Mediation has a structured process that creates an environment to work through difficult emotional issues. As mediators we are trained to create safe spaces to address high emotions while still helping parties move through the mediation process. </p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What if the person I'm in conflict with is not willing to try mediation?</summary>
                      <div className="pb-8">
                        <p className="p2">A mediation can only be done when both parties have the sincere intention of trying to find a resolution. At Charis Mediation we believe it is still possible to apply Romans 12:18 and pursue peace as much as it depends on you. You have the option of pursuing peace by using our coaching services.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What if I am afraid of verbal abuse during the conversation?</summary>
                      <div className="pb-8">
                        <p className="p2">Reconciliation and resolution cannot be accomplished when people are fearful or feel unsafe. At Charis Mediation it is of the utmost importance that all parties feel emotionally and physically safe. From intake to resolution mediators will be checking in with parties to see if they have concerns and feel safe. Before mediation can begin, all parties must agree to ground rules that address safety and respect. We are trained to facilitate respectful and productive conversations. Please list your concerns in the intake, and we will explore what options are available. </p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pt-8">What are examples of biblical peacemaking principles?</summary>
                    <div className="pb-8">
                      <p className="p2 mb-8">There are many Biblical peacemaking principles that are used in Christian mediation. Many of the Biblical principles used in Christian mediation also reflect accepted moral principles in non-Christian settings. When applying Biblical principles the mediator will be sensitive and respectful to the personal journey and beliefs of each party. </p>
                      <p className="p2 mb-8">A few examples of Biblical peacemaking principles include: </p>
                      <p className="p2 mb-8">- Being willing to listen and to understand what is important to the other person. (James 1:19)</p>
                      <p className="p2 mb-8">- Approaching mediation with humility and wanting the best for the other person. (I Cor 10:24, Phil 2:3-4)</p>
                      <p className="p2 mb-8">- Being willing to prayerfully consider and take responsibility for contributing to the conflict.(Matt 7:1-5, Ps 139:23-24)</p>
                      <p className="p2 mb-8">- Practicing Biblical confession and forgiveness where appropriate. (Eph 4:32, Col 3:13, Matt 18:21-35, James 5:16, 1 John 1:9)</p>
                      <p className="p2">- Confronting in a private a loving manner (Matt 18:15, Eph 4:15)</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">What if I don’t live in the same area as Charis Mediation, can I still receive help?</summary>
                    <div className="pb-8">
                      <p className="p2">Yes, we can explore either online services or what the travel expenses would be to bring a mediator to your area.</p>
                    </div>
                </details>
                <details>
                  <summary className="h4 pb-2 pt-8">How much does mediation cost?</summary>
                      <div className="pb-8">
                        <p className="p2">Click on the "Request an Intake" button above and Charis Mediation will review the cost structure with you.</p>
                      </div>
                </details>
                <details>
                  <summary className="h4 pt-8">Why choose Charis Mediation?</summary>
                      <div className="pb-8">
                        <p className="p2">The lead mediator, Anita, is a certified mediator with over a thousand hours mediating cases. She will give you the space to feel heard, coach you to create a plan, mediate a conflict, or walk you through a reconciliation process. Submit and intake to see if Anita is a good fit for you.</p>
                      </div>
                </details>
              </div>
            </div>

          </div>
      </div>
    </section>
  );
}

export default FAQ1;