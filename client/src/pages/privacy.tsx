import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="container mx-auto px-4 sm:px-8 py-20 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate lg:prose-lg dark:prose-invert">
          <p className="lead text-xl text-muted-foreground mb-8">
            Menhausen is built on a simple principle: <strong>Your mental health data is yours, not ours.</strong> We do not sell data. We do not build advertising profiles.
          </p>

          <h3>1. Anonymity by Design</h3>
          <p>
            We do not require you to create an account with an email or password. We rely on Telegram's authentication system to verify you are a real user, but we do not store your Telegram ID alongside any personal health data in a way that can be easily linked by third parties.
          </p>

          <h3>2. Data Collection</h3>
          <p>
            We collect the minimum amount of data necessary to make the app function:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> Which cards you open (to recommend relevant content).</li>
            <li><strong>Subscription Status:</strong> Whether you have a premium plan.</li>
            <li><strong>Local Data:</strong> Your journal entries and personal answers are primarily stored locally on your device or encrypted.</li>
          </ul>

          <h3>3. Encryption</h3>
          <p>
            Any sensitive data synced to our servers is encrypted using AES-256 standards. This means even our database administrators cannot read the content of your stress journals.
          </p>

          <h3>4. No Third-Party Tracking</h3>
          <p>
            We do not use Facebook Pixel, Google AdSense, or any other cross-site tracking cookies. What happens in Menhausen stays in Menhausen.
          </p>

          <h3>5. Not a Medical Service</h3>
          <p>
            Menhausen is a self-help tool for stress management. It is not a replacement for professional medical advice, diagnosis, or treatment. If you are experiencing a medical emergency, call your local emergency services immediately.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">Last updated: November 19, 2025</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
