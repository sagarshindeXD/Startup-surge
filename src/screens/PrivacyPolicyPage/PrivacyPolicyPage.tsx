import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

export const PrivacyPolicyPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Site Navigation */}
      <SectionComponentNodeSection />
      <Helmet>
        <title>Privacy Policy | StartupSurge</title>
        <meta name="description" content="Read StartupSurge's privacy policy to understand how we collect, use, and protect your data." />
      </Helmet>

      {/* Hero/Header */}
      <section className="w-full py-10 sm:py-16 md:py-20 lg:py-24 relative px-3 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto text-center">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] text-gray-900 dark:text-white">
            Privacy <span className="font-semibold text-[#ffa500]">Policy</span>
          </h1>
          <div className="h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 sm:mt-4 mx-auto"></div>
          <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90 mt-4">
            How we collect, use, and safeguard your data at StartupSurge.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full px-3 sm:px-6 md:px-10 lg:px-16 pb-12 [padding-bottom:env(safe-area-inset-bottom)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl sm:max-w-[1100px] mx-auto"
        >
          <div className="p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white [font-family:'League_Spartan',Helvetica]">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to StartupSurge. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white [font-family:'League_Spartan',Helvetica]">2. Information We Collect</h2>
                <p className="mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Identity Data includes first name, last name, username or similar identifier.</li>
                  <li>Contact Data includes email address and telephone numbers.</li>
                  <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
                  <li>Usage Data includes information about how you use our website and services.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white [font-family:'League_Spartan',Helvetica]">3. How We Use Your Data</h2>
                <p className="mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features of our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white [font-family:'League_Spartan',Helvetica]">4. Data Security</h2>
                <p className="mb-4">
                  We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
                  used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
                  data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white [font-family:'League_Spartan',Helvetica]">5. Your Legal Rights</h2>
                <p className="mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
                  including the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white [font-family:'League_Spartan',Helvetica]">6. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> privacy@startupsurge.com
                </p>
                <p>
                  <strong>Address:</strong> 1402 - Neopolis Building, Near Bhoomi Acres Circle, Hiranandani Estate, GB Road, Thane West - 400615
                </p>
              </section>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                This privacy policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicyPage;
