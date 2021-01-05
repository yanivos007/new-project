const express = require('express');

const router = express.Router();

const vacations =[
    { destination ='there', description ='nice' , price='shekel', followers=4 },
    { destination ='there1', description ='nice1' , price='shekel1', followers=5 },
    { destination ='there2', description ='nice2' , price='shekel2', followers=1 },
    { destination ='there3', description ='nice3' , price='shekel3', followers=2 },
]

router.get('/', (req,res) =>{
    res.send(vacations);
})
