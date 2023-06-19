import { config } from '../config';

async function getNews(date_today) {
  newsurl = (`https://newsapi.org/v2/top-headlines?country=us&category=health&from=${date_today}&sortBy=popularity&apiKey=${config.news_api_key}}&pageSize=3&page=1`);
  const response = await fetch(newsurl);
  return response.json();
}