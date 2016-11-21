const t = require('tape')

var url = 'https://rogue-beers.herokuapp.com/api/v1/beers'
var app = express()

test('Check API response', function (t){
  request(app)
    .get(url)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      if (err) throw err
    })
})
