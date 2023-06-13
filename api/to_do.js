const express = require('express');
const app = express();
const router = express.Router();

const TODOschema = require('../model/Schema');

//post api todo
router.post('/user-to-do', async (req, res) => {
    try {
        const todoschama = await TODOschema.create({
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        })
        return res.send({ todoschama });
    } catch (error) {
        console.log("error:::", error)
        res.send({ err: error });
    }
})

///get 
router.get('/get-data', async (req, res) => {
    try {
        const todoschama = await TODOschema.find({})
        return res.send({ todoschama });

    } catch (error) {
        console.log("error:::", error)
        res.send({ err: error });
    }
})
//getedit
router.get('/get-edit-todo/:id', async (req, res) => {
    try {
        const todoschama = await TODOschema.findById(req.params.id);
        console.log(todoschama);
        return res.send({ todoschama });

    } catch (error) {
        // console.log("error:::", error)
        return res.send(error);
    }
})

//put update
router.put('/get-update-todo/:id', async (req, res) => {
    try {
        const todoschama = await TODOschema.findByIdAndUpdate(req.params.id, req.body)
        console.log("todoschama::", todoschama)
        return res.send({ todoschama });
    } catch (error) {
        console.log("error:::", error)
        res.send({ err: error });
    }
})

// delete
router.delete('/delete-todo/:id', async (req, res) => {
    try {
        const todoschama = await TODOschema.findByIdAndDelete(req.params.id)
        return res.send({ massage: 'this id was remove' });
    } catch (error) {
        console.log("error:::", error)
        res.send({ err: error });
    }
})

module.exports = router;