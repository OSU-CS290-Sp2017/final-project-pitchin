

var pitchArray = require('./pitchExamples');
var peopleArray = require('./peopleExamples');



currentUser = peopleArray[0];



for(var i = 0; i < pitchArray.length; i++){
	if(currentUser.ID = pitchArray[i].posterID){
				currentUser.totalSpent -= pitchArray[i].amount;
				
		}
		var pi = pitchArray[i]
		for(var j = 0; j < pi.contributors.length; j++){
			currentUser.balance[pi.contributors[j].ID] += (pi.contributors.amount)/(pi.contribuors.length + 1); 	

		}

	else{
		var pi = pitchArray[i]
		for(var j = 0; j < pi[i].contributors.length; j++){
			if(pi.contributors[j].ID = currentUser.ID){
				currentUser.balance[ID] -= (pi.contributors.amount)/(pi.contribuors.length + 1); 	


			}
		}
	}
}
