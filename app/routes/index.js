const express  =       require('express'),
       router  =       express.Router(),
       mongojs =       require('mongojs'),
        db     =       mongojs('Students' , ['info'] );
      ObjectId =       mongojs.ObjectId;


//  Rendered registered users      
router.get('/', (req, res)=> {
     db.info.find(function(err, docs){
    
        res.render('app', {
        users : docs
    })

  })

})



//Adding new Users.
router.post('/' ,(req, res)=>{
    newUsers = {
        username    : req.body.username,
        email       : req.body.email,
        password    : req.body.password,
       
              }
        console.log(newUsers);
  /* db.info.insert(newUsers, (err, result)=> {
      if(err) { console.log(err)} */
      
      res.redirect('/progress') 
   })
    






//for Removing Users

router.delete('/:id' ,(req, res)=>{

  db.info.remove({_id : ObjectId(req.params.id)}, (err, result)=> {
      if(err) {console.log(err)}
      res.redirect('/')
  })     
 
  })



    




    
    



module.exports = router;