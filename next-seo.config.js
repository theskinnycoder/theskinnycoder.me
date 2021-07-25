const title = 'TheSkinnyCoder - Developer | YouTuber | Tutor';
const description = 'Full-Stack Web Developer';
const url = 'https://theskinnycoder.me';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    images: [
      {
        url: `${url}/favicon.ico`,
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
