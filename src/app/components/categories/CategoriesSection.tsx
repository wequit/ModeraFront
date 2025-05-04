'use client';

import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: "Премиум Коллекция",
    image: "https://source.unsplash.com/800x1000/?luxury,fashion",
    itemCount: 150
  },
  {
    title: "Повседневная Классика",
    image: "https://source.unsplash.com/800x1000/?casual,fashion",
    itemCount: 320
  },
  {
    title: "Спортивный Стиль",
    image: "https://source.unsplash.com/800x1000/?sport,fashion",
    itemCount: 180
  },
  {
    title: "Деловой Гардероб",
    image: "https://source.unsplash.com/800x1000/?business,fashion",
    itemCount: 200
  },
  {
    title: "Вечерние Наряды",
    image: "https://source.unsplash.com/800x1000/?evening,dress",
    itemCount: 120
  },
  {
    title: "Аксессуары",
    image: "https://source.unsplash.com/800x1000/?accessories,fashion",
    itemCount: 250
  },
  {
    title: "Обувь",
    image: "https://source.unsplash.com/800x1000/?shoes,fashion",
    itemCount: 180
  },
  {
    title: "Сумки",
    image: "https://source.unsplash.com/800x1000/?bags,fashion",
    itemCount: 140
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Откройте Свой Идеальный Стиль
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          От элегантной классики до современных трендов – найдите коллекции, которые подчеркнут вашу индивидуальность
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 