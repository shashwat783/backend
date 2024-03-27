const express = require('express');
var router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/', async (req, res) => {
	try {
		var response = await UserController.getAllUser();
		res.send(response);
	} catch(err) {
		res.send(err);
	}
})

router.get('/:id', UserController.get_id_book);

router.post('/',UserController.createUser);

router.put('/:id', UserController.update_book);

router.delete('/:id', UserController.delete_book);

module.exports = router;