import { getAllPostSlugs } from '@utils/helperFunctions';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function (req, res) {
  try {
    let links = [];
    const blogPosts = await getAllPostSlugs();
    blogPosts.map((slug) => {
      links.push({
        url: `/blog/${slug}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });

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
}
