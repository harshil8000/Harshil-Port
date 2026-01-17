// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsStackOverflow
} from "react-icons/bs";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
  FiCode,
  FiExternalLink
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalData.github,
      icon: BsGithub,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: personalData.linkedIn,
      icon: BsLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: personalData.twitter,
      icon: BsTwitter,
      color: 'hover:text-blue-300'
    },
    {
      name: 'Facebook',
      href: personalData.facebook,
      icon: BsFacebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Stack Overflow',
      href: personalData.stackOverflow,
      icon: BsStackOverflow,
      color: 'hover:text-orange-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-700/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative container mx-auto px-6 sm:px-12 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold gradient-text">
                  Harshil Barad
                </h3>
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Full-stack developer passionate about creating innovative solutions
                with modern technologies. Specializing in AI, insurance tech, and CRM systems.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">{personalData.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiPhone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm">{personalData.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FiMapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">{personalData.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <FiExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 ${social.color} group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <Link
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-glow-primary"
              >
                <FiCode className="w-4 h-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Harshil Barad. Made with</span>
              <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using Next.js</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/#about" className="hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link href="/#contact" className="hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
              <Link href="/blog" className="hover:text-blue-400 transition-colors duration-300">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
}

export default Footer;
