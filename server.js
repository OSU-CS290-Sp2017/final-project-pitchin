
/*
 * Write your Express server in this file as described in README.md.
 */
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


var people = require('./peopleExamples');
var pitches = require("./pitchExamples")
var app = express();
var port = process.env.PORT || 3000;

//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

app.use(bodyParser.json());


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

//Function to add contributers to a pitch

app.post('/addPitcher/expense/:expenseID', function(req, res, next) {

 /*	var new_obj = pitchers(function(name){
		return person.ID == pitch.posterID;
	}).name; */

	var expenseID  = req.params.expenseID; //gets id of new pitcher
	var expenseData = people[expenseID]; //gets related name


	//Find persons id based on name passed back in post body.
	//Then save save the id as a new contributer on the expense.
	//Also find expense based on id and save the expense.

	if(expenseData){
		var newContributor = {
				name: expenseID
		}
		var id;
		pitches.contributors = pitches.contributors || [];
		people.forEach(function () {
			if(name == people.name){
				id = people.ID;
			}
		});
		pitches.contributors.push(id);
		res.status(200); //successful save
	   	return newContributor;
		fs.writeFile('pitchExamples.json', JSON.stringify(pitches), function (err){
			if (err) {
				res.status(500).send("Unable to save pitcher");
			} else {
				res.status(200).send();
			}
		});
	} else {
		next(); //middleware function
	}
});


app.post('/addexpense', function(req, res, next){
	console.log("In addPitcher");
	if (pitches) {
		console.log("pitches good");
		console.log(req.body);
		//var parsed = JSON.parse(req.body);
		//console.log(parsed);
		if (req.body) {
			console.log("Req good?");

			var id;
			people.forEach(function () {
				var index = 0;
				//console.log("in for loop");
				if(people[index].name == req.body.name) {
					id = people[index].ID;
					console.log("Id is: ", id);
				}
				index++;
			});

			var newpitch = {
				posterID: id,
				category: req.body.category,
				amount: req.body.amount,
				message: req.body.message,
				contributors: req.body.pitchers
			};
			console.log(newpitch);

			pitches.push(newpitch);
			console.log(pitches);
			fs.writeFile('pitchExamples.json', JSON.stringify(pitches, null, 4), function(err) {
					if (err) {
						res.status(500).send("Unable to save pitch to database");
					}
					else {
						res.status(200).send;
					}

			});

		}
		else {
			console.log("Request no good");
			res.status(400).send("Need more info about pitch");
		}

	} else {
		next();
	}

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
