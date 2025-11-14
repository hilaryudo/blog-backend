const router = require('express').Router();
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');
const { createBlog, getBlog, getBlogs, updateBlog, deleteBlog} = require('../controller/blogController');


router.get ('/', verifyToken, authorizeRoles("admin", "user"), getBlogs);
router.get ('/:blogId', verifyToken, authorizeRoles("admin", "user"), getBlog);
router.post ('/', verifyToken, authorizeRoles ('admin'), createBlog);
router.patch ('/:blogId', verifyToken, authorizeRoles ('admin'), updateBlog);
router.delete ('/:blogId', verifyToken, authorizeRoles ('admin'), deleteBlog);


module.exports = router;