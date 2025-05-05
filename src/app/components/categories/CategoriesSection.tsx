'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryCard from './CategoryCard';

interface Collection {
  id: number;
  title: string;
  image: string;
  itemCount: number;
  description: string;
  isActive: boolean;
}

// Варианты анимации для контейнера и элементов
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function CategoriesSection() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(12);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/api/collections');
        
        if (!response.ok) {
          throw new Error('Не удалось загрузить категории');
        }
        
        const data = await response.json();
        if (data.success && data.collections) {
          setCollections(data.collections);
        } else {
          throw new Error('Неверный формат данных');
        }
      } catch (err) {
        console.error('Ошибка при загрузке категорий:', err);
        setError('Не удалось загрузить категории. Пожалуйста, попробуйте позже.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const showMoreItems = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ваш Идеальный Гардероб
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Откройте для себя изысканные коллекции одежды, созданные с заботой о каждой детали. 
          От повседневной элегантности до особых случаев — найдите свой неповторимый стиль.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-gray-100 overflow-hidden aspect-square animate-pulse"
            />
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : (
        <>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {collections.slice(0, visibleItems).map((collection, index) => (
              <motion.div
                key={collection.id}
                variants={itemVariants}
                className="w-full"
                layout
              >
                <CategoryCard {...collection} />
              </motion.div>
            ))}
          </motion.div>
          
          {collections.length > visibleItems && (
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={showMoreItems}
                className="bg-white border border-gray-300 rounded-full px-6 py-3 text-gray-800 hover:bg-gray-50 shadow-sm"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Показать больше
                <motion.span 
                  animate={{ y: [0, 5, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block ml-2"
                >
                  ↓
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </>
      )}
    </section>
  );
} 