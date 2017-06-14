
/*
 * Write your Express server in this file as described in README.md.
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
//var exphbs = require('express-handlebars');

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
});

app.get("/getExpenses", function(req,res,next){
	var new_obj = pitches.map(function(pitch){
		var name = people.find(function(person) {
			return person.ID == pitch.posterID;
		}).name;
		var pitchers = pitch.contributors.map(function(c) {
			const n = people.find(function(person){
				return person.ID == c.ID;
				}).name;
			return {
				name: n
			};
		});
		return {
			name: name,
			message: pitch.message,
			amount: pitch.amount,
			pitchers: pitchers,
			category: pitch.category 
		}
	});	
	res.status(200).send(JSON.stringify(new_obj));

});

app.get("/getpitch", function(req,res,next){
	res.status(200).send(JSON.stringify(pitches));

});

app.get("/getpeople", function(req,res,next){
	res.status(200).send(JSON.stringify(people));

});
/*

for(var i = 0; i < pitches.length; i++){
//	if(currentUser.ID = pitchArray[i].posterID){
//			currentUser.totalSpent -= pitchArray[i].amount;
				
//		}
		
		var pi = pitches[i]
		for(var j = 0; j < pi.contributors.length; j++){
			currentUser.balance[pi.contributors[j].ID] += (pi.contributors.amount)/(pi.contribuors.length + 1); 	

		}

	else{
		var pi = pitches[i]
		for(var j = 0; j < pi[i].contributors.length; j++){
			if(pi.contributors[j].ID = currentUser.ID){
				currentUser.balance[ID] -= (pi.contributors.amount)/(pi.contribuors.length + 1); 	


			}
		}
	}
}
*/
	





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
