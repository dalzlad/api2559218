const {Router} = require('express')

const route = Router() 

route.get('/', (req, res) => {
    res.json({
        msg: 'API GET'
    })
})

route.post('/', (req, res) => {
    res.json({
        msg: 'POST API'
    })
})

route.put('/', (req, res) => {
    res.json({
        msg: 'PUT API'
    })
})

route.delete('/', (req, res) => {
    res.json({
        msg: 'DELETE API'
    })
})


module.exports = route   
