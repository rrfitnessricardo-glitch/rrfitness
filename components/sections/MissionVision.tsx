"use client"

import { Target, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function MissionVision() {
    const missionText = "Ayudar a mis clientes a alcanzar sus objetivos de fitness y bienestar a través de entrenamientos personalizados y grupales efectivos, proporcionándoles las herramientas y el apoyo necesario para que puedan alcanzar su máximo potencial y mejorar su calidad de vida."
    const visionText = "Ser un entrenador personal de referencia en el ámbito del fitness y el bienestar, reconocido por mi profesionalismo, pasión y dedicación a mis clientes. Quiero ayudar a las personas a transformar sus vidas a través del ejercicio y la educación, además de crear un entorno de apoyo y motivación que les permita alcanzar sus objetivos y superar sus límites."

    return (
        <section id="mision-vision" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        Nuestra <span className="gradient-text">Filosofía</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        Impulsando tu potencial, transformando tu bienestar.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 mb-6">
                            <Target className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Misión</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {missionText}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 mb-6">
                            <Eye className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visión</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {visionText}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 