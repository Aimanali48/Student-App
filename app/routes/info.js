const express  =       require('express'),
       router  =       express.Router(),
       mongojs       = require('mongojs'),
       db            = mongojs('Students' , ['info'] );
      




    // student's info table
       router.get('/info', (req, res)=> {
      
        db.info.find(function(err, docs){
       
           res.render('info', {
           users : docs
        }) 

        
     }) 
     
 })


module.exports = router;