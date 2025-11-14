const mongoose = require("mongoose")


const blogSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [true, "please provide the topic"]
    },
    content: {
        type: String,
        required: [true, "please provide your content"]
    },
    category: {
        type: String,
        required: [true, "please provide the category"]
    },
    
}, {timestamps: true});


module.exports = mongoose.model("Blog", blogSchema);