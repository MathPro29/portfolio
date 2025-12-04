import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'

const techs = [
  { name: 'React', Icon: SiReact, color: '#61DBFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#83CD29' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Express', Icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
]

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-white mb-6 text-4xl sm:text-5xl font-extrabold">
              Welcome to
            </h2>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500">Methat's </span>
              <span className="text-blue-400">Portfolio</span>
            </h2>

            <p className="text-lg text-gray-300 mb-6">Interested on Full-stack developer and Front-end developer</p>

            {/* Tech icons - centered on mobile, left on md+ */}
            <div className="flex items-center gap-5 mt-6 mb-6 justify-center md:justify-start">
              {techs.map((t, index) => {
                const Icon = t.Icon
                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.09 }}
                    className="group"
                  >
                    <Icon
                      className="w-10 h-10 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: t.color }}
                      title={t.name}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Buttons: centered on mobile, left on md+ */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/MathPro29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors duration-200"
                aria-label="View GitHub"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>

              <div className="flex items-center gap-3 text-white">
                <span className="hidden sm:inline">or</span>
                <span className="sm:hidden">or</span>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-700 rounded-xl text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
              >
                Explore Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="w-64 h-64 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <img src="profile.jpg" alt="profile" className='rounded-full' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
