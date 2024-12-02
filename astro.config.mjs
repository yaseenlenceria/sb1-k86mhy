import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://savedownloadtt.com',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://savedownloadtt.com/',
        'https://savedownloadtt.com/about',
        'https://savedownloadtt.com/contact',
        'https://savedownloadtt.com/terms',
        'https://savedownloadtt.com/privacy',
        'https://savedownloadtt.com/mp3-downloader',
        'https://savedownloadtt.com/profile-picture',
        'https://savedownloadtt.com/blog',
        'https://savedownloadtt.com/best-tiktok-downloaders',
        'https://savedownloadtt.com/guides/android',
        'https://savedownloadtt.com/guides/ios',
        'https://savedownloadtt.com/guides/pc',
        'https://savedownloadtt.com/blog/how-to-download-tiktok-videos-without-watermark',
        'https://savedownloadtt.com/blog/top-10-tiktok-video-editing-tips',
        'https://savedownloadtt.com/blog/understanding-tiktok-video-quality'
      ],
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date()
    }),
  ],
});