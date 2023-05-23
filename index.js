let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('http://fetchrss.com/rss/646d514eebaa4b5384513e63646d515d7575985e0d089b32.xml'); // TODO: Change with https://www.devextent.com/xml-rss-feed-nodejs/

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title);
    });

})();
