import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";

export const SupportFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Inquiry: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Message: ${formData.message}`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:info@startupsurge.in?subject=${subject}&body=${body}`;
    
    // Log form submission
    console.log("Form submitted to info@startupsurge.in:", formData);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    alert("Thank you for your message! Your email client will open with your message to info@startupsurge.in");
  };

  return (
    <section className="w-full px-0 my-12 md:my-20 pb-16 sm:pb-12">  {/* Removed horizontal padding to fit content tightly */}
      <div className="max-w-3xl mx-auto">
        <Card className="relative rounded-[18px] bg-transparent overflow-hidden shadow-lg">
          <div className="absolute w-full h-full top-0 left-0 bg-gray-300 dark:bg-[#d9d9d9] rounded-[18px] opacity-10 transition-colors duration-300" />
          <CardContent className="relative px-3 md:px-4 py-6 md:py-8">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <span className="font-['League_Spartan',Helvetica] font-semibold text-gray-800 dark:text-white text-2xl md:text-4xl transition-colors duration-300">
                  Ready to
                </span>
                <span className="font-['League_Spartan',Helvetica] font-semibold text-[#ffa500] text-2xl md:text-4xl ml-2">
                  surge
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8 transition-colors duration-300">
                Share your goals—our team will reply with a plan and next steps.
              </p>
            </div>
              
              <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto" autoComplete="on">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Name</label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-transparent border-2 border-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="w-full bg-transparent border-2 border-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="w-full bg-transparent border-2 border-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px] bg-transparent border-2 border-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] transition-colors duration-300"
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    className="bg-[#ffa500] hover:bg-[#e69500] text-white font-semibold py-2 px-8 rounded-full transition-colors duration-300"
                  >
                    Start your surge
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    );
};
