let express = require('express')
    router = express.Router()
    // ,methods = require('../utils/functions'); //if available
    ;

router.get('/yourRoute/:parameter', async function (req, res) {
    //some AWAIT method be because the function is async
    let parameter = req.params.address;
    res.send(result);
});

router.post('/yourRoute',async function (req, res) {
    //use the following code to get value from post body. 
    let _to = req.body.to;
    let _amount = req.body.amount;
    //some AWAIT method be because the function is async
    res.send(result);
});

module.exports = router;
