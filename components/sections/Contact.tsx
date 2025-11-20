"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function Contact() {
  const searchParams = useSearchParams()
  const preSelectedPlan = searchParams.get("plan") || ""

  const plans = [
    "Personalizado Premium",
    "Personalizado Mini",
    "Plan Guía",
    "Clases Grupales",
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: preSelectedPlan && plans.includes(preSelectedPlan) ? preSelectedPlan : "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Update formData.plan if the query parameter changes
  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan && plans.includes(plan) && plan !== formData.plan) {
      setFormData((prev) => ({ ...prev, plan }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct WhatsApp message
    const whatsappNumber = "+573224459046"
    const formattedMessage = encodeURIComponent(
      `Hola, soy ${formData.name}\nEmail: ${formData.email}\nPlan: ${formData.plan || "No seleccionado"}\nMensaje: ${formData.message}`
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`

    // Simulate submission delay for UX
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", plan: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      plan: value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex@fitness.com",
      description: "Respuesta en 24h",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 3045978038",
      description: "Lun - Vie 9AM - 8PM",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Bogotá D.C",
      description: "Gimnasio Premium",
    },
  ]

  return (
    <section id="contacto" className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-600/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-950/30 rounded-full px-6 py-3 text-sm font-medium text-red-600 mb-6 animate-scale-in">
              <MessageCircle className="h-4 w-4" />
              <span>Hablemos</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6 animate-slide-in-up">
              Comienza Tu <span className="gradient-text">Transformación</span>
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              El primer paso hacia tu mejor versión está a un mensaje de distancia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <div className="glass-effect rounded-3xl p-8 hover:shadow-xl transition-all duration-500">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          className="border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none bg-transparent px-0 py-4 text-lg focus:border-red-600 focus:ring-0 group-hover:border-gray-300 transition-colors duration-300"
                          required
                        />
                      </div>
                      <div className="group">
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Tu email"
                          className="border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none bg-transparent px-0 py-4 text-lg focus:border-red-600 focus:ring-0 group-hover:border-gray-300 transition-colors duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <Select
                        name="plan"
                        value={formData.plan}
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger className="border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none bg-transparent px-0 py-4 text-lg focus:border-red-600 focus:ring-0 group-hover:border-gray-300 transition-colors duration-300">
                          <SelectValue placeholder="Elige un plan" />
                        </SelectTrigger>
                        <SelectContent>
                          {plans.map((plan) => (
                            <SelectItem key={plan} value={plan}>
                              {plan}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="group">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tus objetivos, experiencia previa y qué te motiva a cambiar..."
                        rows={6}
                        className="border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none bg-transparent px-0 py-4 text-lg focus:border-red-600 focus:ring-0 resize-none group-hover:border-gray-300 transition-colors duration-300"
                        required
                      />
                    </div>

                    <div className="text-center pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-xl font-medium text-lg group hover:scale-105 transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensaje
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12 animate-scale-in">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Te responderé por WhatsApp pronto</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-950/30 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500 shrink-0">
                        <info.icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-red-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 dark:text-white font-medium mb-1">{info.value}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}