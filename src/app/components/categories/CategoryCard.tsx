'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  id: number;
  title: string;
  image: string;
  itemCount: number;
  description: string;
}


export default function CategoryCard({ title, image, itemCount }: CategoryCardProps) {
  return (
    <motion.div
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 h-full"
    >
      <div className="relative overflow-hidden aspect-square">
        <div className="absolute inset-0 p-4">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        
        <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <span className="bg-white/90 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ml-2">
              {itemCount}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 