'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  imageUrl: string | null;
}

export default function HeroSection({ imageUrl }: HeroSectionProps) {
  return (
    <div className="px-4 relative flex flex-col lg:flex-row items-center justify-between gap-12 py-8 overflow-hidden">
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
      </div>

      {/* Контент */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl space-y-8 px-6 lg:px-0"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          НАЙДИ СВОЙ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">УНИКАЛЬНЫЙ</span> СТИЛЬ
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-lg"
        >
          Откройте для себя коллекцию, где каждая деталь создана для того, чтобы подчеркнуть вашу индивидуальность
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ backgroundColor: '#1a1a1a' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all relative overflow-hidden group"
        >
          <span className="relative z-10">Исследовать коллекцию</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 pt-4"
        >
          {[
            { number: '200+', text: 'Брендов' },
            { number: '2.000+', text: 'Товаров' },
            { number: '30.000+', text: 'Клиентов' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Изображение с маской градиента */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full lg:w-1/2 h-auto"
      >
        <div className="absolute inset-0 from-white via-transparent to-transparent z-10" />
        {imageUrl ? (
          <div className="relative">
            <Image
              src={imageUrl}
              width={1200}
              height={800}
              alt="Fashion model"
              className="w-full h-auto transition-transform hover:scale-105 duration-700 rounded-full"
              style={{ objectFit: 'contain' }}
              priority
            />
            {/* Градиентные маски */}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[32rem] bg-gray-100 text-gray-400 rounded-l-2xl">
            <div className="animate-pulse">Изображение загружается...</div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
