import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Uni-Stay | Terms of Service";
  }, []);

  return (
    <div className="min-h-screen bg-us-cream text-us-textDark p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8 md:p-12 leading-relaxed">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3 uppercase">Terms of Service</h1>
          <p className="text-us-textDark/80 text-lg max-w-2xl mx-auto">
            These Terms of Service govern the use of the Uni-Stay platform by students and property owners.
          </p>
        </header>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-us-textDark/80">
            By accessing or using the Uni-Stay website, you agree to be bound by these Terms of Service, all
            applicable laws, and any additional policies referenced within this document. If you do not agree,
            you must discontinue use of the platform.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Platform Role</h2>
          <p className="text-us-textDark/80 mb-3">
            Uni-Stay acts solely as a digital platform connecting students seeking accommodation with property
            owners offering rental spaces near campus.
          </p>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>Uni-Stay does not own, manage, or operate any listed properties.</li>
            <li>All agreements, payments, and communications are solely between students and property owners.</li>
            <li>We are not responsible for disputes, damages, or fraudulent listings but encourage reporting concerns immediately.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>Users must provide accurate and truthful information while creating an account or listing.</li>
            <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
            <li>Students and property owners must comply with local housing, rental, and safety regulations.</li>
            <li>Misuse of the platform, harassment, or fraudulent activity is strictly prohibited.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Listing Policies</h2>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>Property owners must provide accurate descriptions, pricing, and availability details.</li>
            <li>Photos and information must not be misleading or deceptive.</li>
            <li>Listings that violate housing standards, safety regulations, or community rules will be removed.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Payments & Transactions</h2>
          <p className="text-us-textDark/80 mb-3">
            Uni-Stay may provide payment facilitation tools, but all final transactions occur directly between
            students and property owners.
          </p>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>Users must verify payment instructions before sending funds.</li>
            <li>Uni-Stay is not liable for financial loss caused by off-platform transactions.</li>
            <li>We strongly advise using secure and traceable payment methods.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy & Data Protection</h2>
          <p className="text-us-textDark/80">
            Uni-Stay collects necessary information to provide platform functionality. Personal information
            will not be sold or shared with third parties except as required by law or to ensure platform safety.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Account Suspension & Termination</h2>
          <p className="text-us-textDark/80">
            Uni-Stay reserves the right to suspend or terminate accounts that violate these Terms, engage in
            fraud, or pose risks to other users.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="text-us-textDark/80">
            Uni-Stay is not liable for damages, losses, or disputes arising from rental agreements, property
            conditions, or interactions between students and property owners.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="text-us-textDark/80">
            Uni-Stay may update these Terms periodically. Continued use of the platform after changes are
            published indicates acceptance of the revised Terms.
          </p>
        </section>
      </div>
    </div>
  );
}