const request = require('request');
const cheerio = require('cheerio');

// PCGarage
request('https://www.pcgarage.ro/carcase/deepcool/matrexx-55/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        console.log('-------PCGarage - ASUS ROG STRIX B450-F-------');

        const prodTitle = $('.p-name').text();
        const prodPrice = $('.ps-sell-price').children('span').eq(1).text();
        console.log(prodTitle, '-', prodPrice);

        console.log('--------------------------------------------');
    }
});