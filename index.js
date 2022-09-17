
const axios = require('axios');

const getProuctUrl = (product_id) => `https://www.amazon.in/dp/${product_id}`;
const {JSDOM} = require('jsdom');

async function getPrice(product_id){
    const productUrl = getProuctUrl(product_id);
    console.log(productUrl);
    const { data } = await axios.get(productUrl,{
        headers: {
            Host: 'www.amazon.in',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36'
            
        },
    });
    const dom = new JSDOM(data);
    const getElement = (selector) => dom.window.document.querySelector(selector).textContent;
    console.log(dom.window.document.querySelector('.a-offscreen').textContent);
};

getPrice('B099916CRW');