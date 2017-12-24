"use strict";
(async function(){

  const express = require('express')
    , port = 4000
    , app = express()
    , router = express.Router()



  router.get('/', (req,res)=>{
    res.send('Zoom');
    return res.end();
  });

  router.get('/redirect', (req,res)=>{
    res.redirect(302, `http://${process.env.KALAD_URL}`);
    return res.end();
  });

  app.use(router);
  // run server
  app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
  });

})();
