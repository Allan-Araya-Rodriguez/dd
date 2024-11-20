'use client';
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Star, Heart, Trophy, Users, Menu } from 'lucide-react';
import logo from './ui/image.png';
import logo1 from './ui/2.jpg';

import image1 from './ui/1.webp';
import image2 from './ui/21.jpg';
import image3 from './ui/3.jpeg';
import image4 from './ui/4.jpeg';
import image5 from './ui/5.jpeg';
import image6 from './ui/6.jpg';

export function PaginaMarketingRopaDeportiva() {
  const [showGallery, setShowGallery] = useState(false)
  const [currentView, setCurrentView] = useState('home')

  const products = [
    { name: "Nike Air Zoom", brand: "Nike", description: "Zapatillas de running", image: image1 },
    { name: "Adidas Ultraboost", brand: "Adidas", description: "Zapatillas para todo terreno", image: image2 },
    { name: "Puma Velocity Nitro", brand: "Puma", description: "Zapatillas de alto rendimiento", image: image3 },
    { name: "Under Armour HOVR", brand: "Under Armour", description: "Zapatillas con tecnología de amortiguación", image: image4 },
    { name: "Skechers GOrun", brand: "Skechers", description: "Zapatillas ligeras para correr", image: image5},
    { name: "Nike Dri-FIT", brand: "Nike", description: "Camiseta de entrenamiento", image: image6 },
  ]

  const brands = ["Nike", "Adidas", "Puma", "Under Armour", "Skechers"]

  return (
    (<div className="flex flex-col min-h-screen">
      
      <header className="bg-[#ffffff] text-pink-600 sticky  top-0 z-50  border-b-2 border-cyan-500">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "> {/* Reduce el padding vertical del fondo azul */}
    <div className="flex justify-between items-center">
      <Image
        src={logo}
        alt="Liberia Sport Center Logo"
        width={100} /* Mantén el tamaño del logo */
        height={100}
        className="cursor-pointer"
        onClick={() => setCurrentView('home')}
      />
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 via-pink-500 to-pink-700 bg-clip-text text-transparent">LIBERIA-SPORT-CENTER</h1>
      <nav className="hidden md:flex space-x-4">
        <Button
          variant="link"
          className="text-pink-600 "
          onClick={() => setCurrentView('home')}
        >
          Home
        </Button>
        <Button
          variant="link"
          className="text-blue-600 "
          onClick={() => setCurrentView('products')}
        >
          Productos
        </Button>
      </nav>
      <Button variant="ghost" className="md:hidden " aria-label="Menu">
        <Menu className=" w-6" />
      </Button>
    </div>
  </div>
</header>

      {currentView === 'home' && (
        <>
          <section className="relative overflow-hidden bg-[#003B73] text-white">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#003B73] via-[#0396A6] to-[#FF69B4] opacity-50" />
              <div
                className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
            </div>
            <div
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Tu Destino para el
                    <span className="text-[#FF69B4]"> Éxito Deportivo</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-cyan-100">
                    Descubre nuestra exclusiva colección de ropa deportiva diseñada para atletas que buscan la excelencia.
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#FF69B4] hover:bg-[#ff4ea7] text-white"
                    onClick={() => setCurrentView('products')}>
                    Explora la Colección
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-gradient-to-r from-[#0396A6] to-[#FF69B4] rounded-full opacity-30 blur-3xl" />
                    <Image
                      src={logo1}
                      alt="Atleta en acción"
                      width={600}
                      height={600}
                      className="relative rounded-3xl" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white" />
          </section>

          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50 to-white" />
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003B73]">
                  ¿Por Qué Elegir Liberia Sport Center?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Nos dedicamos a proporcionar la mejor calidad en ropa deportiva para que alcances tu máximo potencial.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card
                  className="bg-white/50 backdrop-blur-sm border-2 border-cyan-100 hover:border-[#0396A6] transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-[#003B73] to-[#0396A6] flex items-center justify-center mb-4">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#003B73]">Calidad Premium</h3>
                    <p className="text-gray-600">Materiales de primera calidad que garantizan durabilidad y comodidad.</p>
                  </CardContent>
                </Card>
                <Card
                  className="bg-white/50 backdrop-blur-sm border-2 border-cyan-100 hover:border-[#0396A6] transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0396A6] to-[#FF69B4] flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#003B73]">Diseño Innovador</h3>
                    <p className="text-gray-600">Estilos modernos que combinan funcionalidad y estética.</p>
                  </CardContent>
                </Card>
                <Card
                  className="bg-white/50 backdrop-blur-sm border-2 border-cyan-100 hover:border-[#0396A6] transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF69B4] to-[#003B73] flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#003B73]">Comunidad Activa</h3>
                    <p className="text-gray-600">Únete a una comunidad apasionada por el deporte y el bienestar.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#003B73] via-[#0396A6] to-[#FF69B4]">
            <div className="max-w-7xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Marcas de Renombre Mundial
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                {brands.map((brand) => (
                  <div key={brand} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-2xl font-bold">{brand}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl mb-12 max-w-3xl mx-auto">
                En Liberia Sport Center, ofrecemos una selección de las mejores marcas deportivas para potenciar tu rendimiento.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#003B73] hover:bg-cyan-50"
                onClick={() => setCurrentView('products')}>
                Descubre Nuestra Colección
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white" />
            <div className="relative max-w-7xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#003B73]">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card
                    key={i}
                    className="bg-white/50 backdrop-blur-sm border-2 border-pink-100 hover:border-[#FF69B4] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-[#FF69B4] fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">
                        "Estoy muy satisfecho con la ropa deportiva que compré aquí. La calidad es impresionante y la variedad de opciones me permitió encontrar justo lo que necesitaba. El servicio al cliente es excepcional, ¡sin duda regresaré"
                      </p>
                      <p className="font-semibold text-[#003B73]">- Atleta Satisfecho</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {currentView === 'products' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#003B73]">Nuestra Colección</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#003B73] via-[#0396A6] to-[#FF69B4] opacity-0 group-hover:opacity-30 transition-opacity" />
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#003B73]">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-[#0396A6] font-semibold">{product.brand}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      <footer className="bg-[#003B73] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image
              src={logo}
              alt="Liberia Sport Center Logo"
              width={150}
              height={150}
              className="mb-4" />
            <p className="text-cyan-100">Tu destino para el éxito deportivo</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-[#FF69B4]">Contacto</h3>
              <p className="text-cyan-100">Email: info@liberiasport.com</p>
              <p className="text-cyan-100">Tel: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#FF69B4]">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-cyan-100 hover:text-white">Instagram</a>
                <a href="#" className="text-cyan-100 hover:text-white">Facebook</a>
                <a href="#" className="text-cyan-100 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>)
  );
}