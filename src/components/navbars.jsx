import { useState } from 'react'
import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'หน้าหลัก', href: '/', icon: Home },
    { name: 'แนะนำตัว', href: '#about', icon: Info },
    { name: 'ผลงาน', href: '#services', icon: Briefcase },
    { name: 'กิจกรรมที่ผ่านมา', href: '#contact', icon: Mail }
  ]

  return (
    <header className="bg-transparent shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 ease-in-out"
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              })}
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

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-3 bg-slate-800 border-t border-slate-700">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar