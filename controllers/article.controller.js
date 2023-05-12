require('dotenv').config();
const { default: axios } = require("axios");

const apiKey = process.env.GNEWS_API_KEY;
const BASE_URL = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`

const articleCache = require('../cache')

async function searchAll(req, res) {

  const count = req.query.count || 10; // Fetch 10 articles by default

  // Check if data exists in the cache
  const cacheKey = `articles-${count}`;
  const cacheValue = articleCache.get(cacheKey);
  if (cacheValue) {
    // Send cached data
    res.json(cacheValue);
  } else {
    try {
      const response = await axios.get(`${BASE_URL}&max=${count}`);
      const data = response.data.articles;
      articleCache.set(cacheKey, data);
      res.json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}


async function search(req, res) {
  const search = req.query.search;

  // Check if data exists in the cache
  const cacheKey = `search-${search}`;
  const cacheValue = articleCache.get(cacheKey);

  if (cacheValue) {
    // Send cached data
    res.json(cacheValue);
  } else {
    try {
      const response = await axios.get(`${BASE_URL}&q=${search}`);
      const data = response.data.articles;
      articleCache.set(cacheKey, data);
      res.json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

//There is no author info in articles.
async function searchAuthor(req, res) {
  const author = req.query.author;

  // Check if data exists in the cache
  const cacheKey = `author-${author}`;
  const cacheValue = articleCache.get(cacheKey);

  if (cacheValue) {
    // Send cached data
    res.json(cacheValue);
  } else {
    try {
      const response = await axios.get(`${BASE_URL}&q=${author}`);
      const data = response.data.articles;
      articleCache.set(cacheKey, data);
      res.json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}


async function searchTitle(req, res) {
  const title = req.query.title;

  // Check if data exists in the cache
  const cacheKey = `title-${title}`;
  const cacheValue = articleCache.get(cacheKey);

  if (cacheValue) {
    // Send cached data
    res.json(cacheValue);
  } else {
    try {
      const response = await axios.get(`${BASE_URL}&q=${title}`);
      const data = response.data.articles.filter(article => article.title.includes(title));
      articleCache.set(cacheKey, data);
      res.json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = {
  searchAll,
  search,
  searchAuthor,
  searchTitle
}

