let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('https://daily-dev-tips.com/sitemap.xml');

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title);
    });

})();
