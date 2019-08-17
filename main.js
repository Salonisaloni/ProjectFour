// sign up page
var abc=[];

		function validation(){

			var user = document.getElementById('user').value;
			var pass = document.getElementById('pass').value;
			var confirmpass = document.getElementById('conpass').value;
			var mobileNumber = document.getElementById('mobileNumber').value;
			var emails = document.getElementById('emails').value;

			if(user == ""){
				document.getElementById('username').innerHTML ="Enter the username field";
				return false;
			}
			if((user.length <= 2) || (user.length > 20)) {
				document.getElementById('username').innerHTML =" Username lenght must be between 2 and 20";
				return false;	
			}
			if(!isNaN(user)){
				document.getElementById('username').innerHTML =" Only characters are allowed";
				return false;
			}
			if(pass == ""){
				document.getElementById('passwords').innerHTML ="Enter the password field";
				return false;
			}
			if((pass.length <= 5) || (pass.length > 20)) {
				document.getElementById('passwords').innerHTML ="Passwords lenght must be between  5 and 20";
				return false;	
			}


			if(pass!=confirmpass){
				document.getElementById('confrmpass').innerHTML ="Password does not match the confirm password";
				return false;
			}



			if(confirmpass == ""){
				document.getElementById('confrmpass').innerHTML ="Enter the confirmed password field";
				return false;
			}




			if(mobileNumber == ""){
				document.getElementById('mobileno').innerHTML ="Enter the mobile NUmber field";
				return false;
			}
			if(isNaN(mobileNumber)){
				document.getElementById('mobileno').innerHTML ="User must write digits only not characters";
				return false;
			}
			if(mobileNumber.length!=10){
				document.getElementById('mobileno').innerHTML ="Mobile Number must be 10 digits only";
				return false;
			}



			if(emails == ""){
				document.getElementById('emailids').innerHTML =" Enter the email id field";
				return false;
			}
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('emailids').innerHTML ="@ Invalid Position";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('emailids').innerHTML =" ** . Invalid Position";
				return false;
			}
		 abc.push(user.toString);
		 for(var i=0;i<abc.length;i++)

		 {
			console.log(user[i]);
		 }
		
		}

		function check()
		{
		
		}

