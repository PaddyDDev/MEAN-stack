/*
const express = require('express');
const router = express.Router();
/!*as want access to the Temperatur model need to require it*!/
const Message = require('../models/temperature');

router.post('/', function (req, res,)
{
    const temperature = new Temperature
    ({
       temperature: req.body.temperature,
       room:req.body.room,
       updated:req.body.updated

    });
    temperature.save(function (err, result)
    {
        if(err)
        {
            //status 500 is server error
            return res.status(500).json
            ({
                title: 'Error on the server side',
                error: err
            })
        }
        res.status(201).json
        ({
            message: 'Temperature saved',
            obj: result
        });
    });
});

module.exports = router;
*/
