import Link from "next/link";
import { Compass, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-professional-blue to-blue-accent rounded-lg flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CodeCompass</span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Building innovative developer tools that empower the global
              software development community.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/codecompass"
                className="text-gray-400 hover:text-blue-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/codecompass"
                className="text-gray-400 hover:text-professional-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/codecompass"
                className="text-gray-400 hover:text-blue-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/projects">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    CodeLint Pro
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    DevFlow Studio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    API Compass
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    All Tools
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/mission">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/mission">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <Link href="/donate">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Support Us
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CodeCompass. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
