const request = require('request');
const cheerio = require('cheerio');

// PCGarage
request('https://www.pcgarage.ro/procesoare/amd/filtre/general-serie-ryzen-5-3rd-gen/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        console.log('-------PCGarage - AMD Ryzen 5 3rd Gen-------');
        $('.product-box-container').each((i, el) => {
            const prodTitle = $(el).find('.pb-name').text();
            const prodPrice = $(el).find('.pb-price .price').text();

            console.log(prodTitle, prodPrice);
        });
        console.log('--------------------------------------------');
    }
});

//CEL
request('https://www.cel.ro/procesoare/amd/serie-i953/ryzen-5/5a-1', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        // console.log('-------CEL - AMD Ryzen 5 3rd Gen-------');
        // $('.productListingWrapper').each((i, el) => {
        //     const prodTitle = $(el).find('.productTitle a').text();
        //     const prodPrice = $(el).find('.pret_n').text();
        //
        //     console.log(prodTitle, '-', prodPrice);
        // });
        // console.log('----------------------------------------');
    } else {
        console.log('Error: ', error);
    }
});