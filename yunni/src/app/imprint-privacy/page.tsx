export default function ImprintPrivacy() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-gasoek mb-8">Imprint & Privacy</h1>
        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Imprint</h2>
            <div className="space-y-4">
              <p>
                <strong>YUNNI</strong><br />
                [Your Address]<br />
                [Your City, Country]
              </p>
              <p>
                <strong>Contact:</strong><br />
                Email: [Your Email]<br />
                Phone: [Your Phone]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="space-y-4">
              <p>
                This privacy policy explains how we collect, use, and protect your personal information when you visit our website.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Information We Collect</h3>
              <p>
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6">
                <li>Fill out our contact form</li>
                <li>Sign up for our newsletter</li>
                <li>Make a purchase</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">How We Use Your Information</h3>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6">
                <li>Respond to your inquiries</li>
                <li>Send you updates about our music and events</li>
                <li>Process your orders</li>
                <li>Improve our website and services</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Cookies</h3>
              <p>
                We use cookies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Your Rights</h3>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Contact Us</h3>
              <p>
                If you have any questions about this privacy policy, please contact us at [Your Email].
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 