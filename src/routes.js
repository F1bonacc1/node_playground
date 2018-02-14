
const express = require('express')
const router = express.Router()
const { spawn } = require('child_process');

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    data: {},
    errors: {}
  })
})

router.post('/contact', (req, res) => {
  res.render('contact', {
    data: req.body, // { message, email }
    errors: {
      user: {
        msg: 'A user is required'
      },
      password: {
        msg: 'Wrong password'
      }
    }
  })
  let user = req.body.user;
  let password = req.body.password;
  console.log('user: '+ user)
  // console.log('password: '+ password)


  //const subprocess = spawn('git', ['pull', 'origin', 'master'], {
  const subprocess = spawn('git', ['pull', 'https://'+user+':'+password+'@github.com/F1bonacc1/node_playground.git'], {
    detached: true,
    stdio: 'ignore'
  });

  subprocess.unref();

})
module.exports = router
