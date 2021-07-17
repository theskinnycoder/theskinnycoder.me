const title = 'TheSkinnyCoder - Developer | YouTuber | Tutor';
const description = 'Full-Stack Web Developer';

const SEO = {
  title,
  description,
  canonical: 'https://theskinnycoder.me',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://theskinnycoder.me',
    title,
    description,
    images: [
      {
        url: 'https://theskinnycoder.me/favicon.ico',
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@theskinnycoder',
    site: '@theskinnycoder',
    cardType: 'summary_large_image',
  },
};

export default SEO;
