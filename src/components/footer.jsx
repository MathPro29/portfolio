import React from 'react'
import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400"> Portfolio - Methat Phornwisut</p>
                    <p className="text-sm text-gray-300 pt-1"> Developed with React, Tailwind CSS, and Vite
                        <p className='text-xs text-gray-500 pt-1'>co-op with ChatGPT & Cluade Ai</p>
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a href="https://github.com/MathPro29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-150">
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}
