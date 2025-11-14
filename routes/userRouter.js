const router = require('express').Router();
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');
const {getUsers, getUser, deleteUser } = require('../controller/userController');

// only admin can access
router.get("/admin", verifyToken, authorizeRoles("admin"), getUsers);

router.delete('/:userId', verifyToken, authorizeRoles("admin"), deleteUser);
    

// all can access
router.get("/:userId", verifyToken, authorizeRoles("admin", "user"), getUser);
    


module.exports = router;