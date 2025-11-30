import { useEffect } from "react";

export default function SafetyGuidelines() {
  useEffect(() => {
    document.title = "Uni‑Stay | Safety Guidelines";
  }, []);

  return (
    <div className="min-h-screen bg-us-cream text-us-textDark p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white/30 rounded-2xl shadow-xl p-8 md:p-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold uppercase mb-3">Safety Guidelines</h1>
          <p className="text-us-textDark/80 text-lg max-w-2xl mx-auto">
            Essential safety practices for both property owners and students using the Uni‑Stay rental platform.
          </p>
        </header>

        {/* Section 1 - Property Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <i className="fa-solid fa-door-closed text-us-mint"></i>
            Property Safety Requirements
          </h2>
          <ul className="space-y-3 list-disc list-inside text-us-textDark/80">
            <li>Ensure all doors and windows have functioning locks.</li>
            <li>Provide adequate outdoor lighting in entrances and shared paths.</li>
            <li>Maintain fire extinguishers, smoke detectors, and first‑aid kits.</li>
            <li>Keep hazardous materials securely stored and inaccessible.</li>
          </ul>
        </section>

        {/* Section 2 - Student Personal Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <i className="fa-solid fa-user-shield text-us-mint"></i>
            Personal Safety Tips for Students
          </h2>
          <ul className="space-y-3 list-disc list-inside text-us-textDark/80">
            <li>Always meet property owners in public locations for the first viewing.</li>
            <li>Inform a friend or family member before attending a property visit.</li>
            <li>Verify property details and cross‑check listing information.</li>
            <li>Report suspicious behavior or fraudulent activity immediately.</li>
          </ul>
        </section>

        {/* Section 3 - Online Safety */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <i className="fa-solid fa-wifi text-us-mint"></i>
            Online Safety & Communication
          </h2>
          <ul className="space-y-3 list-disc list-inside text-us-textDark/80">
            <li>Communicate only through verified Uni‑Stay messaging channels.</li>
            <li>Do not share personal ID documents until a contract is confirmed.</li>
            <li>Be cautious of offers that seem unusually cheap or pressured.</li>
            <li>Never send upfront payments outside the official payment methods.</li>
          </ul>
        </section>

        {/* Section 4 - Emergency Preparedness */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <i className="fa-regular fa-hospital text-us-mint"></i>
            Emergency Preparedness
          </h2>
          <ul className="space-y-3 list-disc list-inside text-us-textDark/80">
            <li>Know the nearest hospital, campus security office, and emergency contacts.</li>
            <li>Ensure evacuation routes are visible and unobstructed.</li>
            <li>Keep emergency numbers saved on your phone for quick access.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
