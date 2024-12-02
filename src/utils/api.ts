import type { TikTokResponse, DownloadProgress } from './types';
import { API_CONFIG, API_BASE_URL } from './config';

export async function getTikTokInfo(url: string): Promise<TikTokResponse> {
  try {
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`${API_BASE_URL}/analysis?url=${encodedUrl}&hd=1`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_CONFIG.rapidApiHost,
        'x-rapidapi-key': API_CONFIG.rapidApiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.code !== 0) {
      throw new Error(data.msg || 'Failed to process video');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to process video. Please check the URL and try again.');
  }
}

export async function downloadFile(
  url: string,
  onProgress?: (progress: DownloadProgress) => void
): Promise<Blob> {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const contentLength = response.headers.get('content-length');
    const total = parseInt(contentLength || '0', 10);
    let loaded = 0;

    const reader = response.body!.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;
      
      chunks.push(value);
      loaded += value.length;

      if (onProgress && total) {
        onProgress({
          loaded,
          total,
          percentage: (loaded / total) * 100
        });
      }
    }

    return new Blob(chunks, {
      type: url.endsWith('mp3') ? 'audio/mpeg' : 'video/mp4'
    });
  } catch (error) {
    console.error('Download Error:', error);
    throw new Error('Failed to download file. Please try again.');
  }
}