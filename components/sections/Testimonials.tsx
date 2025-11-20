"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Laura Fernández",
      role: "Ejecutiva de Marketing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Alex cambió completamente mi perspectiva sobre el fitness. No solo perdí 20kg, sino que gané confianza y energía que no sabía que tenía. Su enfoque personalizado y motivación constante fueron clave en mi éxito.",
      achievement: "Perdió 20kg en 5 meses",
    },
    {
      id: 2,
      name: "Miguel Torres",
      role: "Ingeniero de Software",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Como alguien que pasaba 12 horas frente a la computadora, pensé que era imposible estar en forma. Alex me demostró lo contrario con rutinas eficientes y un plan nutricional que se adaptaba a mi estilo de vida.",
      achievement: "Ganó 8kg de músculo",
    },
    {
      id: 3,
      name: "Carmen Jiménez",
      role: "Doctora",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Después de una lesión de espalda, pensé que nunca volvería a hacer ejercicio. Alex diseñó un programa de rehabilitación que no solo me recuperó, sino que me hizo más fuerte que antes.",
      achievement: "Recuperación completa",
    },
    {
      id: 4,
      name: "David Morales",
      role: "Empresario",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "La disciplina y metodología de Alex son excepcionales. En 6 meses logré el físico que siempre quise. Su conocimiento en nutrición y entrenamiento es impresionante.",
      achievement: "Transformación completa",
    },
    {
      id: 5,
      name: "Isabel Ruiz",
      role: "Profesora",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Alex no es solo un entrenador, es un mentor. Me ayudó a superar mis límites mentales y físicos. Ahora tengo 45 años y estoy en la mejor forma de mi vida.",
      achievement: "Mejor forma a los 45",
    },
    {
      id: 6,
      name: "Roberto Vega",
      role: "Contador",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Probé muchos gimnasios y entrenadores antes de conocer a Alex. Su enfoque científico y personalizado marcó la diferencia. Los resultados hablan por sí solos.",
      achievement: "Resultados en 3 meses",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Star className="h-4 w-4" />
            <span>Testimonios Reales</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen mis <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de mis clientes es mi mayor motivación. Aquí puedes leer algunas de las experiencias de
            personas que han transformado sus vidas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full inline-block">
                  {testimonial.achievement}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                  <div className="relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 animate-in slide-in-from-bottom duration-1000 delay-500">
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-muted-foreground">Clientes Satisfechos</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-muted-foreground">Tasa de Éxito</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  4.9
                </div>
                <div className="text-muted-foreground">Calificación Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
