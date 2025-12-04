// Navbar.jsx (updated mobile part)
import React, { useState } from 'react'
import { Menu, X, Home, Briefcase, Mails, Github, User, FolderClosed } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Me', href: '#me', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderClosed },
  { name: 'Contact', href: '#contacts', icon: Mails },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="bg-transparent sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="inline-flex items-center gap-2"
            >
              <span className="text-2xl font-extrabold text-white">
                Portfolio
              </span>
            </a>
          </div>

          {/* Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 ease-in-out"
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href="https://github.com/MathPro29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation*/}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-full bg-slate-800 border-t border-slate-700"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ul className="flex flex-col items-center gap-2 py-4">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name} className="w-full">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.href)
                          setIsOpen(false)
                        }}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 w-full"
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  )
                })}

                <li className="w-full">
                  <a
                    href="https://github.com/MathPro29"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 w-full"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
