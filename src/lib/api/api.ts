// app/lib/api.ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchImages = async () => {
  const response = await fetch(`${API_BASE_URL}/api/images`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Не удалось загрузить изображения');
  }

  return response.json();
};