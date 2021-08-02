import { getAllPostSlugs } from '@/utils/helperFunctions';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { getAllArticleCategories } from 'utils/helperFunctions';

const genrateSitemap = async (req, res) => {
  try {
    let links = [];

    // Blog Articles
    const articles = await getAllPostSlugs();
    articles.map((slug) => {
      links.push({
        url: `/blog/${slug}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });

    // Article Categories
    const categories = await getAllArticleCategories();
    categories.map((name) => {
      links.push({
        url: `/blog/categories/${name}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });

    // Other Pages
    const pages = ['', '/blog', '/about'];
    pages.map((url) => {
      links.push({
        url,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });

    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream),
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error));
  }
};

export default genrateSitemap;
