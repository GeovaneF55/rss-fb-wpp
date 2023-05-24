const RssParser = require('rss-parser');
const parser = new RssParser();

const rss = async (req, res, next) => {
    const rssUrl = req.body.rssUrl || 'http://fetchrss.com/rss/646d514eebaa4b5384513e63646d515d7575985e0d089b32.xml'

    let feed = await parser.parseURL(rssUrl); // TODO: Change with https://www.devextent.com/xml-rss-feed-nodejs/
    
    return res.status(200).send({ feed })
}

module.exports = { rss }