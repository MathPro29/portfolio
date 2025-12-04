import React from 'react'
import { SiReact, SiNodedotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'
import { Code2, Camera, Users } from 'lucide-react'

const techs = [
    { name: 'React', Icon: SiReact, color: '#61DBFB' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#83CD29' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Express', Icon: SiExpress, color: '#ffffff' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
]

const Me = () => {
    return (
        <section id="me" className="py-20 border-t border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Introduction Card */}
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-blue-500/10 rounded-xl">
                                <Code2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Full-stack Developer</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    นักศึกษาวิทยาการคอมพิวเตอร์ปี 3 — สนใจพัฒนาเว็บแบบ Full-stack
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                                <Camera className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Creative Skills</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    มีทักษะด้านการถ่ายภาพและวิดีโอ และ เป็นสมาชิกชมรมคอมพิวเตอร์ <span className="text-blue-400 font-semibold">
                                        <a href='https://www.facebook.com/csmju.studio' target="_blank">
                                            CSMJU Studio
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="p-8 mb-8">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">
                        Tech Stacks
                    </h3>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {techs.map((t, index) => {
                            const Icon = t.Icon
                            return (
                                <div
                                    key={index}
                                    className="group relative flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:scale-110"
                                >
                                    <Icon
                                        className="w-12 h-12 transition-transform duration-200 group-hover:scale-110"
                                        style={{ color: t.color }}
                                    />
                                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                                        {t.name}
                                    </span>
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                                        style={{ backgroundColor: t.color }}
                                    ></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Users className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">กิจกรรมชมรม</h3>
                    </div>
                    <p className="text-gray-300">
                        สมาชิกชมรมวิทยาการคอมพิวเตอร์ <span className="text-blue-400 font-semibold">
                            <a href='https://www.facebook.com/csmju.studio' target="_blank">
                                CSMJU Studio
                            </a>
                        </span>
                        <p className='pt-2'>ดูแลสื่อ Social Media ทั้ง platform FacebookและTiktok</p>
                        <p className='pt-2'>ทำหน้าที่ : Photographer, Video Editor</p>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Me