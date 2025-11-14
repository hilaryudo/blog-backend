const Blogs = require('../models/blog');
const blogError = require('../utils/blogError');



const createBlog = async (req, res,) => {
    try {
        const { topic, content, category } = req.body;
        const blog = new Blogs({ topic, content, category});
        await blog.save();
        res.status(201).json({ success: true, blog})
    } catch (err) {
        const errors = blogError(err);
        res.status(400).json({success : false, errors });
    }
};


const getBlogs = async (req, res,) => {
    try {
        const blogs = await Blogs.find({});
        res.status(200).json({ success: true, blogs})
    } catch (error) {
        const errors = blogError(err);
        res.status(500).json({success: false, errors});
    }
};


const getBlog = async (req, res,) => {
    const {blogId} = req.params
    try {
        const blog = await Blogs.findById({_id: blogId})
        res.status(200).json({ success: true, blog})
    } catch (err) {
        const errors = blogError(err);
        res.status(404).json({success: false, errors});
    }
};


const updateBlog = async (req, res,) => {
    const {blogId} = req.params
    try {
        const blog = await Blogs.findByIdAndUpdate({_id: blogId}, req.body,{
        new: true,
        runValidators: true
       });
       res.status(200).json({success: true, blog});
    } catch (err) {
        const errors = blogError(err);
        res.status(400).json({success: false, errors});
    }
};


const deleteBlog = async (req, res,) => {
    const{blogId} = req.params
    try {
        const Blog = await Blogs.findByIdAndDelete({_id: blogId})
        res.status(200).json({success: true, msg: 'blog deleted successfully'})
    } catch (err) {
       const errors = blogError(err);
        res.status(400).json({success: false, errors});
    }
};

module.exports = {createBlog, getBlogs, getBlog, updateBlog, deleteBlog};