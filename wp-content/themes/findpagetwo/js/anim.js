		var funkX;			// co-ordinate variables, that can be modified by functions (see moveObjectToPoint)
		var funkY;

		function moveObject(objectID, xPos, yPos){
			document.getElementById(objectID).style.left=xPos; //place the image based on its co-ordinates
			document.getElementById(objectID).style.top=yPos;
 
		}


		function moveObjectToPoint(objectID, xPos, yPos, futureXpos, futureYpos, speed){	//this function will move an object towards a new co-ordinate at whatever speed chosen by the user.
																							//the final co-ordinates will be in funkX, funkY

			deltaX = futureXpos - xPos;				// find the direction of movement vector
			deltaY = futureYpos - yPos;

			linelen = Math.sqrt(deltaX * deltaX + deltaY * deltaY);		// find the magnitude of the movement vector



			if (linelen < speed){		 				//the distance between the old and new co-ordinate is less than current speed, and we don't want to overshoot 
				funkX = futureXpos;						//so we just set the current co-ordinate to its future co-ordinate
				funkY = futureYpos;
				moveObject(objectID, futureXpos, futureYpos);		//and place the object in position
				return;									//exit the function, because its done its job
			}

			deltaX = deltaX / linelen;				// normalise the vector
			deltaY = deltaY / linelen;

			deltaX = deltaX * speed;				// make it correct speed
			deltaY = deltaY * speed;

			xPos = xPos + deltaX; // add the new movement vector to the current co-ordinates
			yPos = yPos + deltaY; //

			moveObject(objectID, xPos, yPos);		//place the object in position

			funkX = xPos;			//return the new co-ordinates
			funkY = yPos;

		}




		function changeVis (objectID, visible){							//makes an object (usually a div object) visible or invisible
			document.getElementById(objectID).style.visibility=visible;

		}


		function changeOpacity (objectID, opacit){							//makes an object (usually a div object) visible or invisible
			document.getElementById(objectID).style.opacity=opacit;

		}
		
		function changePicSRC (objectID, imgSRC){						//changes the image inside a <div>. Will mess up any other code inside the div however. 
			document.getElementById(objectID).innerHTML = "<img src=\"" + imgSRC + "\" />";

		}

		function changeURL (newURL){
			window.location = newURL;
		}

		function addText (objectID, text){						//changes the image inside a <div>. Will mess up any other code inside the div however. 
			document.getElementById(objectID).innerHTML = document.getElementById(objectID).innerHTML + text;

		}
		
		function putImage(objectID, objectSRC, xPos, yPos, zIndex){		//adds an image to go inside a <div> object.
			HTMLStuff=document.getElementById(objectID).innerHTML;		//retain code already present, and add an extra img to the inside
			document.getElementById(objectID).innerHTML=HTMLStuff+'<img src="'+objectSRC+'" style="position: absolute; z-index: '+zIndex+'; top:'+yPos+'; left:'+xPos+'"></img>';

		}

		function magnitude(x1, y1, x2, y2){			//calculates the distance between 2 co-ordinates

			deltaX = x2 - x1;
			deltaY = y2 - y1;

			linelen = Math.sqrt ( deltaX * deltaX + deltaY * deltaY);

			return (linelen);


		}

		function addToLimit(variable, increase, varLimit){
			newvariable = variable + increase;
			if (newvariable > varLimit){
				newvariable = varLimit;
			}
			return (newvariable);
		}

		function subToLimit(variable, decrease, varLimit){
			newvariable = variable - decrease;
			if (newvariable < varLimit){
				newvariable = varLimit;
			}
			return (newvariable);
		}