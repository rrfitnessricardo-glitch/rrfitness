"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Award, Target, Trophy } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const transformations = [
    {
      name: "María González",
      result: "-25kg en 6 meses",
      image: "/placeholder.svg?height=400&width=300",
      description: "De sedentaria a atleta",
      stats: { before: "85kg", after: "60kg", time: "6 meses" },
    },
    {
      name: "Carlos Ruiz",
      result: "+12kg músculo",
      image: "/placeholder.svg?height=400&width=300",
      description: "Transformación completa",
      stats: { before: "70kg", after: "82kg", time: "8 meses" },
    },
    {
      name: "Ana Martín",
      result: "Primer maratón",
      image: "/placeholder.svg?height=400&width=300",
      description: "De 0 a 42km",
      stats: { before: "0km", after: "42km", time: "1 año" },
    },
  ]

  const achievements = [
    { icon: TrendingUp, value: "2000+", label: "Kilos Perdidos" },
    { icon: Award, value: "150+", label: "Objetivos Alcanzados" },
    { icon: Target, value: "95%", label: "Retención Clientes" },
  ]

  return (
    <section id="portafolio" className="py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-red-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-600/10 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-wxl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-950/30 rounded-full px-6 py-3 text-sm font-medium text-red-600 mb-6 animate-scale-in">
              <Trophy className="h-4 w-4" />
              <span>Casos de Éxito</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6 animate-slide-in-up">
              Resultados <span className="gradient-text">Reales</span>
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Transformaciones reales de personas reales que decidieron cambiar sus vidas
            </p>
          </div>

          {/* Enhanced Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {transformations.map((transformation, index) => (
              <div
                key={transformation.name}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={transformation.image || "/placeholder.svg"}
                    alt={transformation.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay with Stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-sm font-bold">{transformation.stats.before}</div>
                          <div className="text-xs opacity-80">Antes</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold">{transformation.stats.after}</div>
                          <div className="text-xs opacity-80">Después</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold">{transformation.stats.time}</div>
                          <div className="text-xs opacity-80">Tiempo</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors duration-300">
                    {transformation.name}
                  </h3>
                  <p className="text-red-600 font-bold text-lg">{transformation.result}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{transformation.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-950/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500">
                  <achievement.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {achievement.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
