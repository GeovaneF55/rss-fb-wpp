const restful = require('node-restful')
const mongoose = restful.mongoose

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    dc_creator: { type: String, required: true },
    pubDate: { type: String, required: true },
    media_content: { type: String, required: true },
    guid: { type: String, required: true }
})

const imageSchema = new mongoose.Schema({
    link: { type: String, required: true },
    url: { type: String, required: true },
    title: { type: String, required: true }
})

const facebookChannelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    pubDate: { type: String, required: true },
    link: { type: String, required: true },
    atom_link: { type: String, required: true },
    generator: { type: String, required: true },
    image: { type: imageSchema, required: true },
    posts: [postSchema]
})

module.exports = restful.model('FacebookChannel', facebookChannelSchema)