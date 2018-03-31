
		totalImagesLoaded = 4;
		stringPosition = 0;
		parchmentOpacity = 0;
		var fullMSG='I apologise for the blindfold and for making you stand. <br>A necessary precaution, I am sure you understand.<br>If finding the polar bear is your fate, <br>A presidential medal will certainly await. <br>The riddle I have found<br>sounds really quite profound <br>I hope it makes more sense to you<br>And so without further ado, I give to you another clue ';
function gameloop (){					//handles the loading screen
			if (totalImagesLoaded < 1){
				changeVis("loadscreen", "visible");
			return;
			}
			changeVis("loadscreen", "hidden");
			//game code goes here
			obamaText.innerHTML=fullMSG.slice(0, stringPosition);
			stringPosition = addToLimit(stringPosition, 1, fullMSG.length);

			if (fullMSG.charAt(stringPosition)=="<"){
				stringPosition = addToLimit(stringPosition, 3, fullMSG.length);
			}
			if (stringPosition >= fullMSG.length){
				parchmentOpacity = addToLimit(parchmentOpacity, 0.1, 1);
			}
			changeOpacity("parchment", parchmentOpacity);
}
