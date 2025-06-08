import axios from 'axios';
import cheerio from 'cheerio';

export async function getHotNews() {
  const url = 'https://newsnow.busiyi.world/c/hottest';
  const { data: html } = await axios.get(url);
  const $ = cheerio.load(html);
  const newsList = [];

  $('.card .title').each((_, el) => {
    const title = $(el).text().trim();
    const href = $(el).closest('a').attr('href');
    if (title && href) {
      newsList.push({
        title,
        link: href.startsWith('http') ? href : `https://newsnow.busiyi.world${href}`,
      });
    }
  });

  return newsList;
}