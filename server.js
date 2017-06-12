
/*
 * Write your Express server in this file as described in README.md.
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var people = require('./peopleExamples');
var pitches = require("./pitchExamples")
var app = express();
var port = process.env.PORT || 3000;

//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');



app.get('/', function (req, res, next) {
		
//	var thing = [twitData[1]];
	
  /*
  var templateArgs = {
    twitInfo: twitData,
  modalOn: "true"
	};

	console.log(templateArgs.modalOn)
  res.render('twitPage', templateArgs);
	
});
*/
app.get("/getExpenses", function(req,res,next){
	var new_obj = pitches.map(function(pitch){
		var name = people.find(function(person) {
			return person.ID == pitch.posterID;
		}).name;
		var pitchers = pitch.contributors.map(function(c) {
			return {
				name: people.find(function(person){
				return person.ID == c.ID;
				}).name;
			};
		});
		return {
			name: name,
			message: pitch.message,
			amount: pitch.amount,
			pitchers: pitchers,
			message: pitch.message 
		}
	});	
	res.status(200).send(JSON.stringify(new_obj));

});

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('*', function (req, res) {
//  res.status(404).sendFile(path.join(__dirname, 'views', '404Page.handlebars'));
	res.status(404);
	res.render('404Page.handlebars');
});*/

// Start the server listening on the specified port.
app.listen(port, function () {
  console.log("== Server listening on port", port);
});