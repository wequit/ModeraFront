import Header from '@/app/layout/header';
import Footer from '@/app/layout/Footer';
import HeroSectionWrapper from '@/lib/serverComponents/HeroSectionServer';
import CategoriesSection from '@/app/components/categories/CategoriesSection';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер */}
      <Header />

      {/* Первый блок */}
      <main className="flex-1 flex flex-col">
        <div className="max-w-[1440px] mx-auto px-4 py-4 sm:px-6 lg:px-8 w-full">
          <HeroSectionWrapper />
        </div>
        
        {/* Секция категорий */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <CategoriesSection />
        </div>
      </main>

      {/* Футер */}
      <Footer />
    </div>
  );
}