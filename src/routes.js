
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
      message: {
        msg: 'A message is required'
      },
      email: {
        msg: 'That email doesn‘t look right'
      }
    }
  })
  let message = req.body.message;
  console.log('Message: '+ message)


  const subprocess = spawn('git', ['pull', 'origin', 'master'], {
    detached: true,
    stdio: 'ignore'
  });

  subprocess.unref();

})
module.exports = router
