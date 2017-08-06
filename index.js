var request = require('request')

function simsimi (msg, groseria = 0,cb) {

	
	request(`http://sandbox.api.simsimi.com/request.p?key=a3c167d6-261d-404e-96f2-8b3363cb6b81&lc=es&ft=${groseria}.0&text=${msg}`, function (error, response, body) {
	 console.log('body:', body); // Print the HTML for the Google homepage.
	  cb(JSON.parse(body).response)
	})
}

var express = require('express');
var app = express()

app.use(express.static('public'))
app.get('/simsimi/:msg', function (req, res) {
	  simsimi(req.params.msg, 1, respuesta => {
		res.send(respuesta);
	})
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
