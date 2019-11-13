const request = require('request');
const cheerio = require('cheerio');

// PCGarage
// request('https://www.pcgarage.ro/procesoare/amd/filtre/general-serie-ryzen-5-3rd-gen/', (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//
//         console.log('-------PCGarage - AMD Ryzen 5 3rd Gen-------');
//         $('.product-box-container').each((i, el) => {
//             const prodTitle = $(el).find('.pb-name').text();
//             const prodPrice = $(el).find('.pb-price .price').text();
//
//             console.log(prodTitle, prodPrice);
//         });
//         console.log('--------------------------------------------');
//     }
// });

//eMAG
// request('https://www.emag.ro/procesoare/brand/amd/filter/familie-procesor-f2666,amd-ryzen-5-v24753/vendor/emag/c?ref=lst_leftbar_6427_1', (error, response, html) => {
//    if (!error && response.statusCode == 200) {
//        const $ = cheerio.load(html);
//
//        console.log('-------eMAG - AMD Ryzen 5 3rd Gen-------');
//        $('.card-item').each((i, el) => {
//            const prodTitle = $(el).find('.product-title-zone a').text().replace(/\s\s+/g, '').replace('Procesor', '');
//            const prodPrice = $(el).find('.product-new-price').text();
//
//            console.log(prodTitle, '-', prodPrice);
//        });
//        console.log('----------------------------------------');
//    }
// });

//CEL
request('https://www.cel.ro/procesoare/amd/serie-i953/ryzen-5/5a-1', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        console.log('-------CEL - AMD Ryzen 5 3rd Gen-------');
        $('.productListingWrapper').each((i, el) => {
            const prodTitle = $(el).find('.productTitle a').text();
            const prodPrice = $(el).find('.pret_n').text();

            console.log(prodTitle, '-', prodPrice);
        });
        console.log('----------------------------------------');
    }
});