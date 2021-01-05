const express = require('express');

const router = express.Router();

const vacations =[]

router.get('/', (req,res) =>{
    res.send('hello from vacations router');
console.log(vacations)
});

module.exports = router;