const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://kbtcoe.org/';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const menuItems = [];

    // Corrected selector based on website structure
    $('#menu-main-menu li a').each((i, el) => {
      const text = $(el).text().trim();
      if (text) menuItems.push(text);
    });

    console.log("KBTCOE Website Navigation Items:");
    menuItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  })
  .catch(error => {
    console.error('Error fetching website:', error);
  });


