// src/components/ProjectsSection.jsx
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

/** sample data (คุณสามารถย้ายไปไฟล์ data แยกได้) */
const sampleProjects = [
    {
        title: "Comcamp24th website (อยู่ในระหว่างพัฒนา)",
        description:
            "Comcamp24th เว็บไซต์สำหรับการลงทะเบียนค่ายของสาขาวิชาวิทยาการคอมพิวเตอร์ มีหน้าต่างสำหรับผู้ใช้และผู้ดูแลระบบ โดยร่วมพัฒนาพร้อมกับทีม",
        tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
        demo_link: ""
    },
    {
        title: "Sontana+",
        description:
            "Web blog สำหรับการพูดคุยกันในโลกออนไลน์ เป็น Project Full Stack แรก โดยมีการกำหนด Authenication ด้วย Firebase และจัดการ State ต่างๆผ่าน Admin Panel",
        tech: ["PHP", "Laravel", "Firebase", "Tailwind", "MySQL"],
        link: "https://github.com/MathPro29/Sontanaplus",
        demo_link: ""
    },
    {
        title: "Food Court Online",
        description:
            "Project Front-end แรก ที่ทำเกี่ยวกับร้านอาหาร เพิ่ม ลบ แก้ไข รายการอาหารได้โดยไม่มีการเก็บข้อมูลไป Database ",
        tech: ["React", "Tailwind", "Vite"],
        link: "https://github.com/MathPro29/Food-court-online-371",
        demo_link: "https://food-court-online-371.vercel.app/"
    },
    {
        title: "Ai Lotto",
        description:
            "Project สุ่มเลข Lotto ที่มีทั้ง ลุ้นรางวัลที่ 1 และ เลข 2 หลักท้าย",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "https://github.com/MathPro29/Ai-lotto",
        demo_link: "https://mathpro29.github.io/Ai-lotto/"
    },
    {
        title: "เกมส์ หมูเด้ง",
        description:
            "เกมส์หมูเด้ง Project สนุกๆ โดยมีการเลือกอาหารจากนั้นจะมีการเพิ่ม Level จนถึงจุดสูงสุด จะอิ่มตัวแตก",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "https://github.com/MathPro29/Moodeng_371",
        demo_link: "https://moodeng-games-371.vercel.app/"
    },
];

/** ProjectCard - แสดงการ์ดโปรเจกต์เดียว */
function ProjectCard({ p, i }) {
    return (
        <motion.article
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-slate-600"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-2xl" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                            {p.title}
                        </h3>

                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <a
                                href={p.link || "#"}
                                className="p-1.5 bg-slate-700/50 rounded-lg hover:bg-slate-600 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4 text-gray-300" />
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        {p?.description ||
                            "A brief description of the project goes here. It showcases the main features and purpose of the application."}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {(p?.tech || ["React", "Tailwind", "Node.js"]).map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-blue-300 rounded-full border border-slate-600/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto flex gap-2">


                    <a
                        href={p.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 ${!p.link ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
                        aria-disabled={!p.link}
                    >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                    </a>

                    {p?.demo_link && (
                        <a
                            href={p.demo_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Live Demo
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}


                </div>
            </div>

            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
        </motion.article>
    );
}


export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb- text-center text-white">
                    Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProjects.map((p, idx) => (
                        <ProjectCard key={p.title + idx} p={p} i={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
