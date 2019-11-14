const request = require('request');
const cheerio = require('cheerio');

// PCGarage
// request('https://www.pcgarage.ro/cauta/Deepcool+Matrexx+55?is=1', (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//         console.log($);
//
//         console.log('-------PCGarage - ASUS ROG STRIX B450-F-------');
//
//         $('.product-box-container').each((i, el) => {
//             const prodTitle = $(el).find('.pb-name').text();
//             const prodPrice = $(el).find('.pb-price .price').text();
//
//             console.log(prodTitle, prodPrice);
//
//             // if (i == 2) {
//             //     return false;
//             // }
//         });
//
//         console.log('--------------------------------------------');
//     }
// });

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

// eMAG
// request('https://www.emag.ro/placa-de-baza-asus-socket-am4-rog-strix-b450-f-gaming/pd/DV7C2VBBM/?X-Search-Id=4957836d6ab3e0591de4&X-Product-Id=4878364&X-Search-Page=1&X-Search-Position=0&X-Section=search&X-MB=0&X-Search-Action=view', (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//
//         console.log('-------eMAG - ASUS ROG STRIX B450-F-------');
//
//         const prodTitle = $('.page-title').text().replace(/\s\s+/g, '');
//         const prodPrice = $('.product-highlight .product-new-price').clone().children().remove().end().text().replace(/\s\s+/g, '') + ' ' + $('.product-highlight .product-new-price').children().eq(1).text();
//         console.log(prodTitle, '-', prodPrice);
//
//         console.log('----------------------------------------');
//     }
// });