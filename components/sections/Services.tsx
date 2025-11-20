"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stars, Users, Map, Star, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { assetPath } from "@/lib/utils"

export default function Services() {
  const services = [
    {
      icon: Stars,
      title: "Personalizado Premium",
      mainDescription: "Entrenamiento 1-1 completamente dedicado a ti y tus objetivos.",
      sessionInfo: "(20 sesiones)",
      price: "$500.000",
      priceUnit: "",
      features: [
        "Programación y prescripción",
        "Valoración",
        "Test físico",
        "Asesoría nutricional",
        "Acompañamiento presencial o virtual",
      ],
      popular: true,
      modalContent: {
        titleModal: "Lleva tu rendimiento al máximo nivel.",
        description: "Este plan es para quienes no se conforman con menos. Recibe atención exclusiva, guía experta y un plan hecho a tu medida. Ideal para lograr cambios reales con el respaldo profesional que necesitas.",
        media: "/ricardo1.jpg",
        mediaType: "image",
      },
    },
    {
      icon: Star,
      title: "Personalizado Mini",
      mainDescription: "Entrenamiento 1-1 completamente dedicado a ti y tus objetivos.",
      sessionInfo: "(12 sesiones)",
      price: "$300.000",
      priceUnit: "",
      features: [
        "Programación y prescripción",
        "Valoración",
        "Test físico",
        "Asesoría nutricional",
        "Acompañamiento presencial o virtual",
      ],
      popular: false,
      modalContent: {
        titleModal: "Empieza a entrenar con intención y enfoque.",
        description: "Un plan hecho para quienes buscan resultados sin perder tiempo. Atención personalizada, guía profesional y metas claras desde el primer día. Ideal para iniciar tu proceso con fuerza y dirección.",
        media: "/ricardo2.jpg",
        mediaType: "image",
      },
    },
    {
      icon: Map,
      title: "Plan Guía",
      mainDescription: "Entrenamiento guía, dedicado a que te motives y enfoques.",
      sessionInfo: "(1 sesión)",
      price: "$65.000",
      priceUnit: "",
      features: [
        "Plan de entrenamiento",
        "Acompañamiento presencial o virtual",
      ],
      popular: false,
      modalContent: {
        titleModal: "Activa tu motivación y empieza con claridad.",
        description: "Una sesión enfocada en darte dirección, energía y un plan claro para avanzar. Ideal si necesitas orientación profesional para retomar el ritmo o empezar con paso firme.",
        media: "/ricardo1.jpg",
        mediaType: "image",
      },
    },
    {
      icon: Users,
      title: "Clases Grupales",
      mainDescription: "Entrenamiento para grupos con distintas capacidades.",
      sessionInfo: "(1 sesión)",
      price: "Tú eliges.",
      priceUnit: "$ por actividad",
      features: [
        "Core - 55.000",
        "Funcional - 55.000",
        "Coreografía - 65.000",
        "Step - 65.000",
        "Pilates - 60.000",
        "Stretching - 60.000",
      ],
      popular: false,
      modalContent: {
        titleModal: "Energía compartida, resultados reales.",
        description: "Entrena en grupo y potencia tu motivación con clases diseñadas para todos los niveles. Elige entre funcional, pilates, coreografía y más. Una experiencia dinámica, divertida y llena de movimiento.",
        media: "/ricardo2.jpg",
        mediaType: "image",
      },
    },
  ]

  const [activeButtons, setActiveButtons] = useState(
    services.reduce((acc, service) => {
      acc[service.title] = true
      return acc
    }, {} as Record<string, boolean>)
  )

  const toggleButton = (title: string) => {
    setActiveButtons((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleStartNow = (title: string) => {
    window.history.pushState({}, "", `/?plan=${encodeURIComponent(title)}#contacto`)
    const contactoSection = document.getElementById("contacto")
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-600/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-950/30 rounded-full px-6 py-3 text-base font-medium text-red-600 mb-6">
              <Star className="h-5 w-5" />
              <span>Servicios Premium</span>
            </div>
            <h2 className="text-6xl font-black text-gray-900 dark:text-white mb-6">
              Transforma Tu <span className="gradient-text">Vida</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Elige el programa que mejor se adapte a tu estilo de vida y objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`group border-0 bg-white dark:bg-black hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[480px] ${service.popular ? "ring-2 ring-red-500 ring-opacity-50" : ""}`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-6 text-center relative z-10 flex flex-col flex-grow">
                  <div className="absolute top-4 left-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          className="px-3 py-1 text-sm font-medium text-red-600 bg-red-100 dark:bg-red-950/30 rounded-full shadow-sm hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300 animate-pulse-custom"
                          aria-label={`View more details about ${service.title}`}
                        >
                          Ver Más
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] sm:max-w-[950px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mx-auto">
                          <div className="grid md:grid-cols-2 gap-8 items-start w-full">
                            <div className="text-center md:text-left space-y-6">
                              {service.modalContent.titleModal && (
                                <h3 className="text-xl font-semibold text-red-600 dark:text-red-500 text-center">
                                  {service.modalContent.titleModal}
                                </h3>
                              )}
                              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {service.modalContent.description}
                              </p>
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
                                  Características
                                </h4>
                                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300 text-left mx-auto max-w-xs md:max-w-none">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-base">
                                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
                                  Precio
                                </h4>
                                <p className="text-3xl font-bold text-red-600 dark:text-red-500 text-center">
                                  {service.price}
                                  {service.priceUnit && (
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                                      {" "}{service.priceUnit}
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="w-full flex items-center justify-center p-4">
                              {service.modalContent.mediaType === "video" ? (
                                <video
                                  src={assetPath(service.modalContent.media)}
                                  controls
                                  className="w-full h-auto max-h-[50vh] rounded-lg border border-gray-200 dark:border-gray-700 object-contain"
                                />
                              ) : (
                                <img
                                  src={assetPath(service.modalContent.media)}
                                  alt={service.title}
                                  className="w-full h-auto max-h-[50vh] rounded-lg border border-gray-200 dark:border-gray-700 object-contain"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-red-50 dark:bg-red-950/30 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">
                      <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors duration-300 min-h-[56px] flex items-center justify-center">
                    {service.title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2 whitespace-pre-line leading-relaxed">
                    {service.mainDescription}
                  </p>

                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-bold">
                    {service.sessionInfo}
                  </p>

                  {service.features.length > 0 && (
                    <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-400 text-left">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-base">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto space-y-4">
                    {service.price && (
                      <div className="text-5xl font-bold text-red-600">
                        {service.price}
                        <span className="block text-base font-normal text-gray-500 dark:text-gray-400">
                          {service.priceUnit}
                        </span>
                      </div>
                    )}
                    <Button
                      variant="default"
                      className="w-full bg-red-600 text-white dark:bg-red-700 dark:text-white rounded-xl py-6 text-lg font-medium transition-all duration-300 hover:bg-red-700 hover:text-white dark:hover:bg-red-800"
                      disabled={!activeButtons[service.title]}
                      onClick={() => handleStartNow(service.title)}
                    >
                      Comenzar Ahora
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulseCustom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-pulse-custom {
          animation: pulseCustom 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}