"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4">
          <TbMailForward className="w-4 h-4 text-blue-400 mr-2" />
          <span className="text-sm font-medium text-blue-400">Get In Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          Let&apos;s create something amazing together!
        </p>
      </div>

      {/* Contact Form */}
      <div className="card p-8 md:p-10">
        <form onSubmit={handleSendMail} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300">
              <FiUser className="w-4 h-4 mr-2 text-blue-400" />
              Your Name *
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                type="text"
                maxLength="100"
                required
                placeholder="Enter your full name"
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300">
              <FiMail className="w-4 h-4 mr-2 text-blue-400" />
              Your Email *
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                type="email"
                maxLength="100"
                required
                placeholder="your.email@example.com"
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
            </div>
            {error.email && (
              <p className="text-sm text-red-400 flex items-center">
                <FiCheckCircle className="w-4 h-4 mr-1" />
                Please provide a valid email address
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300">
              <FiMessageSquare className="w-4 h-4 mr-2 text-blue-400" />
              Your Message *
            </label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                maxLength="500"
                name="message"
                required
                placeholder="Tell me about your project or how we can collaborate..."
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
                rows="6"
                value={userInput.message}
              />
              <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                {userInput.message.length}/500
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error.required && (
            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <FiCheckCircle className="w-4 h-4 inline mr-2" />
              All fields are required to send your message.
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-primary hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <span className="mr-2">Send Message</span>
                  <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                <FiMail className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white">Email</h4>
              <p className="text-gray-400 text-sm">baradharshil00@gmail.com</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                <TbMailForward className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-white">Response Time</h4>
              <p className="text-gray-400 text-sm">Within 24 hours</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto">
                <FiUser className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-gray-400 text-sm">Surat, Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;