		function yourfunction()
		{
			alert("Hello World!");
			window.location="http://www.google.com";
		}
		function pass1()
		{
			var password;
			var siteURL = 'http://localhost:8888/findpagetwo/'
			
			var pass1="scooby snacks";
			var pass2="scoobysnacks";
			var pass3="scooby snack";
			var pass4="scoobysnack";


			password=prompt('What would you like to whisper?');
			if (password.toLowerCase()==pass1)
			{
				window.location=siteURL + "thecanineisawake";
			}
			if (password.toLowerCase()==pass2)
			{
				window.location=siteURL + "thecanineisawake";
			}
			if (password.toLowerCase()==pass3)
			{
				window.location=siteURL + "thecanineisawake";
			}
			if (password.toLowerCase()==pass4)
			{
				window.location=siteURL + "thecanineisawake";
			}			
			
		}
		function passa()
		{
			var password;

			password=prompt('What would you like to whisper?');
				
		}

		function eyes()
		{
			alert("Why would you poke a sleeping dog in the eye?");
		}

		function nose()
		{
			alert("A dog's nose is moist to improve its breathing");
		}