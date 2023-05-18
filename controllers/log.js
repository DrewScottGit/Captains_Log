const express = require('express');
const router = express.Router();
const log = require('../models/logs');

router.get('/', (req,res)=>{
    log.find({}).then(alllogs=>{
        console.log(`get all logs ${alllogs}`)
        res.render('Index', {
            logs: alllogs
        });
    });
});

router.get('/new',(req,res)=>{
    res.render('New');
});

router.delete('/:id', (req,res)=>{
    log.findByIdAndRemove(req.params.id).then(data =>{
        res.redirect('/logs');
    });
});


router.put('/', (req,res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    log.findByIdAndUpdate(req.params.id, req.body).then(updatedLog=>{
        res.redirect(`/logs/${req.params.id}`)
    });
});


router.post('/', (req,res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    log.create(req.body).then(log =>{
        console.log(log);
    });
    res.redirect('/logs');
});


router.get('/:id/edit', (req,res)=>{
    log.findById(req.params.id).then(foundLog => {
        res.render('Edit', {log: foundLog})
    }).catch(err => {
        res.send({msg: err.message})
    });
});

router.get('/:id', (req,res)=>{
    log.findById(req.params.id).then(foundLog => {
        res.render('Show', {
            log: foundLog
        });
    });
});

module.exports = router;