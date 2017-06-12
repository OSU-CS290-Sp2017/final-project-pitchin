
////********Code for event click listners for members*********////
//*********May not work, not tested ***********************/////
//tested it on Hess's code and it seems liek it should work
function delegatedListener (event) {		//create an event listener for all things inside of our box
  console.log("==delegated event currentTarget:", event.currentTarget);
  console.log("==delegated event target:", event.target);

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
      
	  break;
    }
    currElem = currElem.parentNode;
  }
}

var memContainer = document.getElementById('member-container');	
memContainer.addEventListener('click', delegatedListener);	//listen for clicks on our member box, and then use delegated listener to pick exact members

//////*********************************************////////
