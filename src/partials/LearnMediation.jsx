import React from 'react';
import Image01 from '../images/nikola-johnny-mirkovic-5GzlumDswnM-unsplash.jpg';

function LearnMediation() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 pt-32 md:pt-40">
            <h1 className="h1 mb-4">What is Mediation?</h1>
            <h4 className="h4">Learn how mediation might be the right fit for your situation</h4>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* Text on left, image on right */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width="540" height="405" alt="Features 01" />
                <p className="p text-base"> Photo by <a className="text-gray-600 hover:text-gray-500 transition duration-150 ease-in-out" href="https://unsplash.com/@thejohnnyme?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Johnny Mirkovic</a> </p>
  
              </div>
              {/* Text */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="p mb-4">Conflict can create distance and space in a relationship and methods of communication can break down. Mediation can be incredibly valuable in having a productive conversation about the conflict and finding a way forward. Mediation can help parties feel heard, and encourages collaboration, effective communication and problem solving. For those looking to pursue peace and restore a relationship, a mediation process can create new understanding, reveal shared values and goals, and improve communication. For those that are Christians that embrace Scripture as authoritative we apply Biblical principles to help parties pursue reconciliation and peace in relationships.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom section of text */}
          <div className="max-w-6xl mx-auto text-left pb-12 md:pb-16">
            <p className="p pb-8">Mediation can be used in a variety of conflicts. Mediation can be used in disputes that need a written resolution like a division of property, parenting plans, or business decisions. In addition, mediation can be used in conflicts where the goal is to improve or restore a relationship like  family conflicts that include elder care, adult siblings and parent/teen issues. Or mediation can address conflicts that involve relationships in neighbor communities and church conflicts. Mediation allows you to address conflicts in a safe, and confidential manner with the guidance of an experienced and trained professional.</p>
            <p className="p">Mediation can help individuals find a workable solution by helping them to communicate with each other. It encourages everyone to collaboratively solve a problem with solutions that meet everyone's needs.</p>
          </div>
      </div>
    </section>
  );
}

export default LearnMediation;