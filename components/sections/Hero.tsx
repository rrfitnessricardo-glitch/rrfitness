"use client"

import { useState, useEffect, useRef } from "react"
import { X, Volume2, VolumeX } from "lucide-react"

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentWord, setCurrentWord] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const words = ["FUERZA", "RESISTENCIA", "CONFIANZA", "DISCIPLINA"]

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(wordTimer)
  }, [])

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showIntro])

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false
        videoRef.current.volume = 1
        videoRef.current.play()
        setIsMuted(false)
      } else {
        videoRef.current.muted = true
        setIsMuted(true)
      }
    }
  }

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-start pt-20 px-4 ">
          {/* Texto superior animado, arriba centrado */}
          <div className="text-center text-white max-w-3xl animate-slide-down-fade mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Forma parte de mi proceso transformando vidas y descubre junto a mí tus capacidades.
            </p>
          </div>

          {/* Botón de cerrar */}
          <button
            onClick={() => setShowIntro(false)}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition z-20"
            aria-label="Cerrar video"
          >
            <X size={32} />
          </button>

          {/* Botón fijo para mute/unmute */}
          <button
            onClick={toggleMute}
            className="fixed bottom-10 right-10 z-30 bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition shadow-lg"
            aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            {isMuted ? "Activar sonido" : "Silenciar video"}
          </button>

          {/* Contenedor del video */}
          <div className="relative w-[80vw] h-[70vh] rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/rrfitness'}/rrVideo.mp4`}
              autoPlay
              muted={isMuted}
              playsInline
              onEnded={() => setShowIntro(false)}
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      )}

      {!showIntro && (
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden"
        >
          {/* Fondos decorativos borrosos */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl max-w-[50vw] max-h-[50vh]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl max-w-[40vw] max-h-[40vh]"></div>
          </div>

          {/* Imagen RicardoHero - responsiva y contenida 
          <div className="absolute bottom-0 right-0 w-[min(500px,40vw)] max-h-[80vh] z-0 pointer-events-none select-none opacity-100">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/rrfitness'}/RicardoHero.png`}
              alt="Ricardo Hero"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          {/* Contenido principal */}
          <div className="container mx-auto px-4 relative z-10 text-center space-y-12">
            <div className="space-y-6">
              <div className="text-3xl font-medium text-red-600 tracking-widest uppercase">RR.FITNESS</div>

              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-gray-900 dark:text-white leading-none">
                DESARROLLA
                <br />
                <span className="text-red-600 transition-all duration-500">{words[currentWord]}</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Transforma tu mente y cuerpo por medio de entrenamientos adaptados a tus necesidades.
                <br />
                <strong>Logra tus objetivos</strong>.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="flex justify-center items-center space-x-8 sm:space-x-16 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Clientes</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Años</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Éxito</div>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-px h-16 bg-gray-300 dark:bg-gray-600 relative">
              <div className="w-1 h-4 bg-red-600 absolute top-0 animate-bounce"></div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes slideDownFade {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down-fade {
          animation: slideDownFade 1s ease forwards;
        }
      `}</style>
    </>
  )
}
