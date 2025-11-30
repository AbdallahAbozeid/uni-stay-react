import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Uni-Stay | Privacy Policy";
  }, []);

  return (
    <div className="min-h-screen bg-us-cream text-us-textDark p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 leading-relaxed">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 uppercase">Privacy Policy</h1>
          <p className="text-us-textDark/80">How Uni‑Stay collects, uses, and protects personal information for students and property owners.</p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-file-shield text-us-mint"></i>
            1. Introduction
          </h2>
          <p className="text-us-textDark/80">
            Uni‑Stay ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains what
            information we collect, why we collect it, how we use it, and the choices you have regarding your
            information when using the Uni‑Stay platform connecting students and property owners.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-database text-us-mint"></i>
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>
              <strong>Account Information:</strong> name, email address, phone number, date of birth (if provided), and
              profile photos for both students and property owners.
            </li>
            <li>
              <strong>Property Details:</strong> property address, photos, description, rental price, availability, and
              amenities provided by property owners.
            </li>
            <li>
              <strong>Verification & Documents:</strong> identity documents, proof of enrollment, or ownership documents when
              voluntarily uploaded for verification purposes.
            </li>
            <li>
              <strong>Communications:</strong> messages exchanged between users through Uni‑Stay, support tickets, and
              call logs if provided via the app.
            </li>
            <li>
              <strong>Payment Data:</strong> payment method identifiers and transaction metadata. Note: sensitive payment
              details (e.g., full card numbers) are processed by our third‑party payment providers and are not stored by Uni‑Stay.
            </li>
            <li>
              <strong>Usage & Device Data:</strong> IP address, device identifiers, browser type, operating system, and
              interaction logs (pages visited, search queries, clicks) to improve the service.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-hand-holding-dollar text-us-mint"></i>
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>To provide and operate the Uni‑Stay platform, process bookings, and enable communication between students and owners.</li>
            <li>To verify identities, reduce fraud, and maintain a safe marketplace.</li>
            <li>To process payments and handle billing and refunds (with help from payment processors).</li>
            <li>To send transactional messages, updates, and safety alerts related to your listings or bookings.</li>
            <li>To personalize the experience, show relevant listings, and improve search results.</li>
            <li>To analyze platform usage and develop new features.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-share-nodes text-us-mint"></i>
            4. Sharing & Disclosure
          </h2>
          <p className="text-us-textDark/80 mb-2">We may share personal information in the following circumstances:</p>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>With other users when necessary for a booking or a listing (e.g., contact details shared with confirmed renters/owners).</li>
            <li>With service providers who help operate our platform (payment processors, hosting providers, verification services).</li>
            <li>To comply with legal obligations, respond to lawful requests, or protect safety, rights, or property.</li>
            <li>In connection with a business transfer, merger, or acquisition; we will notify you if your personal data is transferred.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-cookie text-us-mint"></i>
            5. Cookies & Tracking
          </h2>
          <p className="text-us-textDark/80">
            We use cookies and similar technologies to operate the site, remember preferences, and collect analytics. You can
            control cookie preferences through your browser settings, but disabling some cookies may affect functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-lock text-us-mint"></i>
            6. Data Security
          </h2>
          <p className="text-us-textDark/80">
            We implement reasonable administrative, technical, and physical safeguards designed to protect personal data. However,
            no system can be 100% secure — you should take care when sharing information and report any suspected security incidents to us immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-clock-rotate-left text-us-mint"></i>
            7. Data Retention
          </h2>
          <p className="text-us-textDark/80">
            We retain personal information for as long as necessary to provide the service, comply with legal obligations, resolve disputes,
            and enforce our agreements. When data is no longer required, we will securely delete or anonymize it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-user-gear text-us-mint"></i>
            8. Your Rights & Choices
          </h2>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2">
            <li>Access: You can request a copy of the personal information we hold about you.</li>
            <li>Correction: You may request corrections to inaccurate or incomplete information.</li>
            <li>Deletion: You can request deletion of your account and personal data, subject to legal and contractual retention requirements.</li>
            <li>Objections & Restrictions: You may object to or request restriction of certain processing activities where applicable.
            </li>
            <li>To exercise these rights, contact us using the details below. We may need to verify your identity before fulfilling requests.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-users-viewfinder text-us-mint"></i>
            9. Third‑Party Services & Links
          </h2>
          <p className="text-us-textDark/80">
            Our service may contain links to third‑party websites and services. We are not responsible for the privacy practices of those
            sites. Review their privacy policies before sharing personal information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-child-reaching text-us-mint"></i>
            10. Children
          </h2>
          <p className="text-us-textDark/80">
            Uni‑Stay is intended for users aged 18 and above. We do not knowingly collect personal information from children under 13.
            If you believe a child under 13 has provided us with personal data, contact us and we will take steps to delete that information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-file-contract text-us-mint"></i>
            11. Changes to This Policy
          </h2>
          <p className="text-us-textDark/80">
            We may update this Privacy Policy occasionally. When changes are significant, we will provide more prominent notice (e.g., email
            or in‑app notification) and publish the effective date at the top of this page.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-3">
            <i className="fa-solid fa-envelope text-us-mint"></i>
            12. Contact Us
          </h2>
          <p className="text-us-textDark/80">
            If you have questions, requests, or concerns about this Privacy Policy or our data practices, please contact Uni‑Stay Support:
          </p>
          <ul className="list-disc list-inside text-us-textDark/80 space-y-2 mt-3">
            <li>Email: <a className="underline" href="mailto:support@uni-stay.example">support@uni-stay.example</a></li>
            <li>Address: 123 Campus Road, University City (example)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
