const express  =       require('express'),
       router  =       express.Router(),
       mongojs =       require('mongojs'),
        db     =       mongojs('Students' , ['info'] );



router.get('/progress' , (req, res)=> {
        res.render('perf')
        })



        
// Adding new users info 
router.post('/progress' ,(req, res)=>{
    calculation  = {
        fullname       : req.body.fullname,
        department     : req.body.department,
        roll           : req.body.roll,
        batch          : req.body.batch,  
        subject        : req.body.subject,
        attendence     : req.body.attendence,
        test           : req.body.test,
        mid            : req.body.mid,
        final          : req.body.final,
        result         : req.body.attendence*req.body.test*req.body.mid*req.body.final/100000+"%"
              } 
     db.info.insert(calculation, (err, result)=> {
    
        if(err) { console.log(err)}
    
         res.redirect('/info') 

     })

      /* res.send(console.log(calculation))
      res.redirect('/')*/
  })
    


  

module.exports = router;