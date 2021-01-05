const express = require ('express');

const router = express.Router();

const users =[
    { firstName :'yaniv', lastName :'levi' },
    { firstName :'yaniv', lastName :'levi' },
    { firstName :'yaniv', lastName :'levi' },
    { firstName :'yaniv', lastName :'levi' },
  
]

router.get('/', (req,res) =>{
    res.send('hello from users router');
    res.send(users);
})
module.exports = router;