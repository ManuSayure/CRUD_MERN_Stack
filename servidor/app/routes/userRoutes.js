const {Router} = require('express');
const router = new Router();
const UserController = require('../controllers/UserController');

router.post('/create', UserController.store);
router.put('/update/:id', UserController.update);
router.get('', UserController.index);
router.get('/:id', UserController.getById);
router.delete('/delete/:id', UserController.destroy);

module.exports = router ;