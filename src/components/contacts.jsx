import React from 'react'
import { Mail, Phone, Facebook, MessageCircle } from 'lucide-react'

const Contacts = () => {
    const contactMethods = [
        {
            icon: Facebook,
            label: 'Facebook',
            value: 'Methat Phornwisut',
            link: 'https://www.facebook.com/Methatken/',
            gradient: 'from-blue-500 to-blue-700',
            hoverGradient: 'hover:from-blue-600 hover:to-blue-800',
            iconColor: 'text-blue-400'
        },
        {
            icon: MessageCircle,
            label: 'Line',
            value: 'ken.098',
            gradient: 'from-green-500 to-emerald-600',
            hoverGradient: 'hover:from-green-600 hover:to-emerald-700',
            iconColor: 'text-green-400'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'methat.ph@gmail.com',
            gradient: 'from-purple-500 to-pink-600',
            hoverGradient: 'hover:from-purple-600 hover:to-pink-700',
            iconColor: 'text-purple-400'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '098-005-2659',
            gradient: 'from-orange-500 to-red-600',
            hoverGradient: 'hover:from-orange-600 hover:to-red-700',
            iconColor: 'text-orange-400'
        }
    ]

    return (
        <section id="contacts" className="py-20 border-t border-slate-800 relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r text-white">
                        Contacts
                    </h2>
                    <p className="text-gray-400 text-lg">ช่องทางการติดต่อ</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon
                        return (
                            <a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-slate-600">
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                        {/* Icon container with gradient background */}
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                                                <Icon className={`w-8 h-8 ${method.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                                            </div>
                                        </div>

                                        {/* Label */}
                                        <h3 className="text-white font-semibold text-lg">
                                            {method.label}
                                        </h3>

                                        {/* Value */}
                                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 break-all">
                                            {method.value}
                                        </p>
                                    </div>

                                    {/* Animated border effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Contacts