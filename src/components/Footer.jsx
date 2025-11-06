import React from 'react'
import { motion } from 'framer-motion'
import { ChefHat, MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart, Star, Utensils } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Cardápio', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ]

  const menuCategories = [
    'Antipasti',
    'Massas Artesanais',
    'Pratos Principais',
    'Sobremesas',
    'Vinhos Especiais'
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4" />,
      text: "Rua das Massas, 123 - Vila Italiana, São Paulo - SP"
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: "(11) 99999-9999"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: "contato@seunome.com.br"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      text: "Segunda a Domingo: 18:00 às 23:00"
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full" />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-white rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 border border-white rounded-full" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Main Footer Content */}
        <div className="section-spacing">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                <div className="bg-primary-600 p-3 rounded-xl">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SEU NOME</h3>
                  <p className="text-primary-400 font-medium">Ristorante Italiano</p>
                </div>
              </motion.div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Tradição italiana autêntica no coração do Brasil. Especialistas em massas 
                artesanais e experiências gastronômicas únicas desde 1998.
              </p>

              {/* Awards */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 bg-primary-600/20 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-primary-400 fill-current" />
                  <span className="text-sm font-medium">4.9/5</span>
                </div>
                <div className="flex items-center space-x-1 bg-primary-600/20 px-3 py-1 rounded-full">
                  <Utensils className="h-4 w-4 text-primary-400" />
                  <span className="text-sm font-medium">25+ Anos</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <div className="w-2 h-6 bg-primary-600 rounded-full" />
                <span>Navegação</span>
              </h4>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-2 transform transition-transform"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Menu Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <div className="w-2 h-6 bg-primary-600 rounded-full" />
                <span>Nosso Cardápio</span>
              </h4>
              
              <ul className="space-y-3">
                {menuCategories.map((category, index) => (
                  <motion.li
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-2 transform transition-transform"
                    >
                      {category}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <div className="w-2 h-6 bg-primary-600 rounded-full" />
                <span>Contato</span>
              </h4>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="text-primary-400 mt-0.5">
                      {info.icon}
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {info.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-semibold mb-4 text-gray-200">Siga-nos</h5>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-primary-600/20 p-3 rounded-xl hover:bg-primary-600 transition-all duration-300 group"
                  >
                    <Instagram className="h-5 w-5 text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-primary-600/20 p-3 rounded-xl hover:bg-primary-600 transition-all duration-300 group"
                  >
                    <Facebook className="h-5 w-5 text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12 mb-12"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Receba Nossas Novidades</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber informações sobre novos pratos, eventos especiais 
              e promoções exclusivas do nosso restaurante.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Cadastrar
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SEU NOME - Ristorante Italiano. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Criado com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>por</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                <em>Papum</em>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}