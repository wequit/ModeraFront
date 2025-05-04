// app/components/HeroSectionWrapper.tsx
import { fetchImages, API_BASE_URL } from '@/lib/api/api';
import HeroSection from '@/app/components/hero/HeroSection';

export default async function HeroSectionServer() {
  const data = await fetchImages();

  const imageUrl =
    data.success && data.images.length > 0
      ? `${API_BASE_URL}${data.images[0].url}`
      : null;

  return <HeroSection imageUrl={imageUrl} />;
}
