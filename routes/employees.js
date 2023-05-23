const express = require('express');
const router = express.Router(); 
const {all, add} = require('../controllers/employees')
const {auth} = require('../middleware/auth');

// /api/employees
router.get('/', auth, all);
// /api/employees/:id
router.get('/:id', auth, () => console.log('get single employe'));
// /api/employees/add
router.post('/add', auth, add);
// /api/employees/remove/:id
router.post('/remove/:id', auth, () => console.log('remove employee'));
// /api/employees/edit/:id
router.get('/edit/:id', auth, () => console.log('remove employee'));

module.exports = router;