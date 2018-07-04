const express       = require('express'),
      bodyParser    = require('body-parser'),
      path          = require('path'),
      app           = express(),
      mongojs       = require('mongojs'),
      db            = mongojs('Students' , ['info'] );


    app.set('port', process.env.PORT||3000)
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, 'views'))





    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended : true   
    })); 
    app.use(express.static('app/public'))
    app.use( require('./routes/index'))
    app.use( require('./routes/perf'))
    app.use( require('./routes/info'))
 

 
    

    app.listen(app.get('port') , function(){
    console.log(`listening on the port ${app.get('port')}`)
    });
    