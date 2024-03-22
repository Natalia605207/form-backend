const { Router } = require('express');
const { getForm, postFormData } = require('./MessageController');

const router = Router();

router.get('/', getForm);
router.post('/', postFormData);

module.exports = router;

