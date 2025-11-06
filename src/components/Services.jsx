import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Utensils, Star, Clock, ChefHat, Heart, Sparkles, Wine, UtensilsCrossed, Coffee } from 'lucide-react'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('antipasti')

  const categories = [
    {
      id: 'antipasti',
      name: 'Antipasti',
      icon: <UtensilsCrossed className="h-5 w-5" />,
      description: 'Entradas tradicionais italianas'
    },
    {
      id: 'pasta',
      name: 'Massas',
      icon: <Utensils className="h-5 w-5" />,
      description: 'Massas artesanais frescas'
    },
    {
      id: 'secondi',
      name: 'Pratos Principais',
      icon: <ChefHat className="h-5 w-5" />,
      description: 'Especialidades da casa'
    },
    {
      id: 'dolci',
      name: 'Dolci',
      icon: <Heart className="h-5 w-5" />,
      description: 'Sobremesas tradicionais'
    },
    {
      id: 'bevande',
      name: 'Bebidas',
      icon: <Wine className="h-5 w-5" />,
      description: 'Vinhos e bebidas especiais'
    }
  ]

  const menuItems = {
    antipasti: [
      {
        name: 'Bruschetta Tradizionale',
        description: 'Pão italiano tostado com tomates frescos, manjericão e azeite extra virgem',
        price: 'R$ 28,00',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        popular: true
      },
      {
        name: 'Antipasto della Casa',
        description: 'Seleção de queijos, presuntos, azeitonas e vegetais marinados',
        price: 'R$ 45,00',
        image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Finas fatias de carne bovina crua com rúcula, parmesão e alcaparras',
        price: 'R$ 38,00',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Burrata con Pomodori',
        description: 'Queijo burrata cremoso com tomates cerejas e manjericão fresco',
        price: 'R$ 42,00',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    pasta: [
      {
        name: 'Spaghetti Carbonara',
        description: 'Massa artesanal com ovos, queijo pecorino, pancetta e pimenta preta',
        price: 'R$ 48,00',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        popular: true
      },
      {
        name: 'Fettuccine Alfredo',
        description: 'Massa fresca com molho cremoso de manteiga e parmesão reggiano',
        price: 'R$ 44,00',
        image: 'https://images.unsplash.com/photo-1621647120034-4c7b5b8c12d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Penne all\'Arrabbiata',
        description: 'Penne com molho de tomate picante, alho, manjericão e pimenta',
        price: 'R$ 38,00',
        image: 'https://images.unsplash.com/photo-1621647104812-d4d79d2c6e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Lasagna della Nonna',
        description: 'Lasanha tradicional com molho bolonhesa, bechamel e queijos',
        price: 'R$ 52,00',
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        popular: true
      },
      {
        name: 'Ravioli di Ricotta e Spinaci',
        description: 'Ravioli recheado com ricota e espinafre ao molho de manteiga e sálvia',
        price: 'R$ 46,00',
        image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Gnocchi al Pomodoro e Basilico',
        description: 'Nhoque de batata artesanal com molho de tomate fresco e manjericão',
        price: 'R$ 42,00',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    secondi: [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Osso buco braseado com gremolata e risotto alla milanese',
        price: 'R$ 78,00',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        popular: true
      },
      {
        name: 'Scaloppine al Limone',
        description: 'Escalopes de vitela com molho de limão e alcaparras',
        price: 'R$ 68,00',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Branzino in Crosta di Sale',
        description: 'Robalo inteiro em crosta de sal com ervas mediterrâneas',
        price: 'R$ 72,00',
        image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Pollo alla Parmigiana',
        description: 'Peito de frango empanado com molho de tomate e queijos gratinados',
        price: 'R$ 58,00',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    dolci: [
      {
        name: 'Tiramisu della Casa',
        description: 'Sobremesa tradicional com mascarpone, café e cacau em pó',
        price: 'R$ 24,00',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        popular: true
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Panna cotta com calda de frutas vermelhas',
        price: 'R$ 22,00',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Cannoli crocante recheado com ricota e pistache',
        price: 'R$ 26,00',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Gelato Artigianale',
        description: 'Sorvete artesanal (sabores: pistache, stracciatella, limão)',
        price: 'R$ 18,00',
        image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    bevande: [
      {
        name: 'Chianti Classico DOCG',
        description: 'Vinho tinto tradicional da Toscana, safra selecionada',
        price: 'R$ 120,00',
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        popular: true
      },
      {
        name: 'Prosecco di Valdobbiadene',
        description: 'Espumante italiano tradicional, ideal para brindes',
        price: 'R$ 85,00',
        image: 'https://images.unsplash.com/photo-1549478328-5d3ebc2d5f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Limoncello da Casa',
        description: 'Licor de limão siciliano produzido artesanalmente',
        price: 'R$ 18,00',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        name: 'Espresso Italiano',
        description: 'Café expresso autêntico com blend especial italiano',
        price: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6"
          >
            <Utensils className="h-4 w-4" />
            <span className="text-sm font-medium">Nosso Cardápio</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Sabores Autênticos</span>
            <br />
            da Tradição Italiana
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa seleção especial de pratos tradicionais italianos, 
            preparados com ingredientes frescos e técnicas centenárias.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              <span className={`transition-colors duration-300 ${
                activeCategory === category.id ? 'text-white' : 'text-primary-600'
              }`}>
                {category.icon}
              </span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600">
            {categories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {menuItems[activeCategory]?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Popular</span>
                  </div>
                )}
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full font-bold">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chef's Special Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="bg-white/10 p-4 rounded-2xl">
                <ChefHat className="h-12 w-12" />
              </div>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Especialidade do Chef
            </h3>
            
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Todos os nossos pratos são preparados com ingredientes frescos e selecionados, 
              seguindo receitas tradicionais passadas de geração em geração.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Sparkles className="h-8 w-8 mx-auto mb-2 text-primary-200" />
                <div className="font-semibold">Ingredientes Frescos</div>
                <div className="text-primary-200 text-sm">Selecionados diariamente</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary-200" />
                <div className="font-semibold">Preparo Artesanal</div>
                <div className="text-primary-200 text-sm">Técnicas tradicionais</div>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 text-primary-200" />
                <div className="font-semibold">Feito com Amor</div>
                <div className="text-primary-200 text-sm">Paixão em cada prato</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Coffee className="h-5 w-5" />
              <span>Reserve Sua Mesa</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}