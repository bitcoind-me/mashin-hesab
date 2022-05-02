const path = require('path')
var express = require('express')
var request = require('request')
var moment = require('moment')
var app = express()

app.use('/static/images', express.static(path.join(__dirname, 'assets/images')))
app.use('/static/script', express.static(path.join(__dirname, 'assets/script')))
app.use('/static/fonts', express.static(path.join(__dirname, 'assets/fonts')))
app.use('/static/css', express.static(path.join(__dirname, 'assets/css')))

var _cachedbtcirt_price = 0
var _cached_lasttrade = 0
var _cached_lastupdate = 0

app.get('/', function (req, res) {
    if (_cachedbtcirt_price == 0) {
        res.end('updating, please refresh in few seconds...')
    } else {
        res.render(path.join(__dirname, 'views/pages/btcirtcalc.ejs'), {
            _param_btcirtprice: _cachedbtcirt_price,
            _param_lastupdate: _cached_lastupdate,
            _param_lasttrade: _cached_lasttrade
        });
    }
});

function get_price() {
    // set cache
    // _cached_lasttrade
    // _cached_lastupdate
    // _cachedbtcirt_price
}

get_price()
setInterval(() => {
    get_price()
}, 60000);

app.listen(-1, function () {
    console.log('Node app is running on port', -1)
});