const moment = require('moment')
const express = require('express')
const router = express.Router()
const Client = require('mariasql')
const stringRandom = require('string-random')
const database = new Client({
  host: '39.104.200.83',
  user: 'celestserver',
  password: 'celest',
  db: 'celesteserver'
})

router.get('/login', function (req, res) {
  console.log('Api Login =>' + req.query)
  database.connect()
  database.query('SELECT count(*) as row FROM userdata where username =\'' + req.query.username + '\' and password=\'' + req.query.password + '\'', function (err, rows) {
    const timestamp = moment().format('X')
    const cookies = stringRandom(32)
    if (err) {
      database.end()
      res.json({
        stats: 'error',
        info: err,
        timesp: timestamp
      })
    } else if (rows[0].row > 0) {
      database.query('update userdata set lastcookie =\'' + cookies + '\' where username = \'' + req.query.username + '\'')
      database.end()
      res.json({
        stats: 'success',
        cookie: cookies,
        timesp: timestamp
      })
    } else {
      database.end()
      res.json({
        stats: 'fail',
        timesp: timestamp
      })
    }
  })
})

router.get('/test', function (req, res) {
  console.log('test')
  res.send('ok')
})

router.get('/auth', function (req, res) {
  console.log('Api Auth =>' + req.query)
  const timestamp = moment().format('X')
  database.connect()
  if (req.query.cookie != null) {
    database.query('Select * from userdata where lastcookie =\'' + req.query.cookie + '\'', function (err, rows) {
      if (err) {
        database.end()
        res.json({
          stats: 'error',
          info: err,
          timesp: timestamp
        })
      }
      if (rows[0] != null) {
        database.end()
        res.json({
          stats: 'success',
          logininfo: {
            username: rows[0].username
          },
          timesp: timestamp
        })
      } else {
        database.end()
        res.json({
          stats: 'fail',
          timesp: timestamp
        })
      }
    })
  } else {
    database.end()
    res.json({
      stats: 'error',
      info: 'dont have args',
      timesp: timestamp
    })
  }
})
module.exports = router
