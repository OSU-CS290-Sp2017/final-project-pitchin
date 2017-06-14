


var currentuser = 0;
////********Code for event click listners for members*********////
//*********May not work, not tested ***********************/////
//tested it on Hess's code and it seems liek it should work
function delegatedListener (event) {		//create an event listener for all things inside of our box
	

	var currElem = event.target;
	var members = document.querySelectorAll(".member");

	while (currElem.getAttribute('id') !== 'member-container') {
		if (currElem.classList.contains('member')) {


			for(var i = 0; i < members.length; i++){		//Goes through all members and removes all active ones
				if(members[i].classList.contains("active")){	//makes sure only one member active at a time
					members[i].classList.remove("active");		//still need to change internal object variables for members based on whos active
				}
			}


			
			currElem.classList.add('active');		//set the clicked member to active css

			for(var i = 0; i < members.length; i++){		
				if(members[i].classList.contains("active")){	
				
					currentuser = i;
				}
		}	

			break;
		}
		currElem = currElem.parentNode;
	}
}

var memContainer = document.getElementById('member-container');	
memContainer.addEventListener('click', delegatedListener);	//listen for clicks on our member box, and then use delegated listener to pick exact members

//////*********************************************////////







function people(){
    var json;
	
    var getReq = new XMLHttpRequest();
    getReq.open("GET", "./getpeople");
    getReq.onload = function(){
    	var json = JSON.parse(this.responseText);
    	pitch(json);
	
	}
    getReq.send();
}


function pitch(people){
    var pitchArray;
	
    var getReq = new XMLHttpRequest();
    getReq.open("GET", "./getpitch");
    getReq.onload = function(){
    	pitchArray = JSON.parse(this.responseText);

	getInfo(pitchArray, people);
	
	
	}
    getReq.send();

}


function getInfo(pitchArray, people){


	var new_obj = {
		"name": people[currentuser].name,
		"ID": people[currentuser].ID,
		"totalSpent": 0,
		"balance": [
			{
				"CID": 0,
				"Money": 0
			},

			{
				"CID": 1,
				"Money": 0
			},

			{
				"CID": 2,
				"Money": 0
			},
			
			{
				"CID": 3,
				"Money": 0
			} 
		]
	};
	


	for(var i = 0; i < pitchArray.length; i++){
			if(currentuser == pitchArray[i].posterID){
				new_obj.totalSpent -= pitchArray[i].amount;

		var pi = pitchArray[i]
			for(var j = 0; j < pi.contributors.length; j++){
				new_obj.balance[pi.contributors[j].ID].Money += (pi.amount)/(pi.contributors.length + 1); 	

			}

		}else{
			var pi = pitchArray[i]
				for(var j = 0; j < pi.contributors.length; j++){
					if(pi.contributors[j].ID == currentuser){
						new_obj.balance[pi.posterID].Money -= (pi.amount)/(pi.contributors.length + 1); 	


					}
				}
		}
	}
	
	
//	var t = new_obj;
//	var array = [t.name, t.ID, t.totalSpent, t.balance[0].Money, t.balance[1].Money, t.balance[2].Money, t.balance[3].Money];
	
	displayInfo(new_obj, people);
		

}


function displayInfo(info, people){
	
	
	var userOwe = document.getElementById("userOwe");
	var userOwed = document.getElementById('userOwed');
	var userOweToOther = document.getElementById('userOweToOther');
	
	userOwe.innerHTML = "";
	userOwed.innerHTML = "";
	userOweToOther.innerHTML = "";

	userOwe.innerHTML = "$" + (info.totalSpent * -1).toFixed(2);
	
	for(var i = 0; i < info.balance.length; i++){
		if(info.balance[i].Money > 0){
			var myString = userOwed.innerHTML;
			myString += people[info.balance[i].CID].name + ":  $" + (info.balance[i].Money).toFixed(2) + "<br/>";
			userOwed.innerHTML = myString;
		}else if(info.balance[i].Money < 0){
			
			var myString = userOweToOther.innerHTML;
			myString += people[info.balance[i].CID].name + ":  $" + (info.balance[i].Money * -1).toFixed(2) + "<br/>";
			
			userOweToOther.innerHTML = myString;
		}
	}
}


var breakdown = document.getElementById("dynlinkbreakdown");
breakdown.addEventListener('click',function(){
		console.log("before get info");
		document.getElementById("modal-backdrop").classList.remove("hidden");
		document.getElementById("breakdown-display").classList.remove("hidden");

		people();
		});






//exit button
var exit = document.querySelector(".modal-close-button");
exit.addEventListener('click', function(){
		document.getElementById("modal-backdrop").classList.add("hidden");
		document.getElementById("breakdown-display").classList.add("hidden");

		})

