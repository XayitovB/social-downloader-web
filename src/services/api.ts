import toast from 'react-hot-toast';

export async function fetchMediaInfo(url: string) {
  try {
    const response = await fetch('/api/media', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.error) {
      throw new Error('Invalid response from API');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    toast.error('Failed to fetch video information. Please check the URL and try again.');
    throw error;
  }
}