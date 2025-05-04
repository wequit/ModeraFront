import Image from 'next/image';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  image: string;
  itemCount: number;
}

export default function CategoryCard({ title, image, itemCount }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-200 text-sm">{itemCount} товаров</p>
        </div>
      </div>
    </motion.div>
  );
} 