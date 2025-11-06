import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChefHat, Phone, MapPin, Clock, Calendar } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Cardápio', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'bg-primary-500 text-white' 
                : 'bg-white/90 text-primary-600 shadow-lg'
            }`}>
              <ChefHat className="h-8 w-8" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white text-shadow-lg'
              }`}>
                SEU NOME
              </h1>
              <p className={`text-sm transition-all duration-300 ${
                scrolled ? 'text-primary-600' : 'text-primary-100'
              }`}>
                Ristorante Italiano
              </p>
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white text-shadow'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2"
            >
              <div className={`p-1.5 rounded-lg ${
                scrolled ? 'bg-primary-100 text-primary-600' : 'bg-white/20 text-white'
              }`}>
                <Phone className="h-4 w-4" />
              </div>
              <span className={`text-sm font-medium ${
                scrolled ? 'text-gray-700' : 'text-white text-shadow'
              }`}>
                (11) 99999-9999
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                  : 'bg-white/90 text-primary-600 hover:bg-white shadow-lg'
              }`}
              onClick={() => scrollToSection('contact')}
            >
              <Calendar className="h-4 w-4" />
              <span>Reservar Mesa</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'bg-primary-600 text-white' 
                : 'bg-white/90 text-primary-600 shadow-lg'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 mt-4"
        >
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-primary-600" />
                <span className="font-medium">(11) 99999-9999</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-primary-600" />
                <span className="font-medium">São Paulo, SP</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="h-5 w-5 text-primary-600" />
                <span className="font-medium">Seg-Dom: 18h-23h</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
              >
                <Calendar className="h-5 w-5" />
                <span>Reservar Mesa</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}