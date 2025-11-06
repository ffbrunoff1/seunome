import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Utensils, Heart, Clock, Globe, Sparkles, ChefHat } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: <Clock className="h-8 w-8" />,
      number: "25+",
      label: "Anos de Tradição",
      description: "Servindo autêntica culinária italiana"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "10k+",
      label: "Clientes Satisfeitos",
      description: "Famílias que confiam em nosso sabor"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "50+",
      label: "Prêmios Recebidos",
      description: "Reconhecimento gastronômico"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      number: "120+",
      label: "Pratos no Cardápio",
      description: "Variedade autêntica italiana"
    }
  ]

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Paixão pela Culinária",
      description: "Cada prato é preparado com amor e dedicação, seguindo receitas familiares passadas de geração em geração."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Ingredientes Autênticos",
      description: "Importamos os melhores ingredientes diretamente da Itália para garantir a autenticidade dos sabores."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Experiência Única",
      description: "Criamos momentos especiais onde cada refeição se torna uma celebração da tradição italiana."
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Mestres Cozinheiros",
      description: "Nossa equipe de chefs especializados traz décadas de experiência na arte culinária italiana."
    }
  ]

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6"
          >
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">Nossa História</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Tradição Italiana</span>
            <br />
            no Coração do Brasil
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de duas décadas, trazemos a autêntica experiência gastronômica italiana 
            para o Brasil, combinando tradição familiar com inovação culinária.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Uma Jornada de Sabores Autênticos
              </h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Fundado pela família italiana que emigrou para o Brasil trazendo consigo 
                  receitas centenárias, o <strong className="text-primary-600">SEU NOME</strong> 
                  nasceu do sonho de compartilhar a verdadeira essência da culinária italiana.
                </p>
                
                <p>
                  Especializados em <strong className="text-primary-600">massas artesanais</strong>, 
                  cada prato é uma obra de arte culinária preparada com ingredientes selecionados 
                  e técnicas tradicionais que respeitam a herança gastronômica italiana.
                </p>
                
                <p>
                  Nossa paixão vai além da comida - criamos experiências memoráveis onde cada 
                  cliente se sente parte da nossa família italiana, desfrutando de momentos 
                  únicos em um ambiente acolhedor e sofisticado.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparando massa artesanal"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <ChefHat className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Chef Especialista</h4>
                    <p className="text-gray-600 text-sm">
                      Formação na Itália com 20+ anos de experiência
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 blur-xl"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
            <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-full" />
            <div className="absolute bottom-10 left-1/3 w-12 h-12 border border-white rounded-full" />
            <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Números que Falam por Si
              </h3>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                Nossa jornada é marcada por conquistas que refletem nossa dedicação 
                à excelência e satisfação dos nossos clientes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <div className="text-primary-200 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-primary-200 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}