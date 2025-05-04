// app/components/Header.tsx
'use client'
import { Search, ShoppingCart, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b">
      {/* Черная полоса с информацией о скидке */}
      <div className=" bg-black text-white p-2 text-center">
        <span>Летняя распродажа: Купальники для всех и бесплатная экспресс-доставка - СКИДКА 50%!</span>
        <a href="#" className="ml-2 underline hover:text-blue-300">Купить сейчас</a>
      </div>

      {/* Основная часть хедера */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="p-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <span className="text-xl font-bold">Modera</span>
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">Главная</a>
              <a href="#" className="hover:text-blue-500">Контакты</a>
              <a href="#" className="hover:text-blue-500">О нас</a>
              <a href="#" className="hover:text-blue-500">Регистрация</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Что вы ищете?"
                className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Heart className="text-gray-600 cursor-pointer" size={20} />
            <ShoppingCart className="text-gray-600 cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}