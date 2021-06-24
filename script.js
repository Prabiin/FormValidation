function validate()
{
	var uname = document.getElementById("uname").value;
	var email = document.getElementById("email").value;
	var uname_regex = /^([a-zA-Z0-9_\.]{3,30})$/ ;
	var email_regex = /^([a-z0-9_.]+)@([a-z]+)([.])([a-z]{2,5})(\.)?([a-z]{2,5})?$/ ;

	if(uname_regex.test(uname))
	{
		document.getElementById("uname").style.border = "2px solid green";
		document.getElementById("flashcheck1").style.visibility = "visible";
	}
	else
	{ 
		document.getElementById("uname").style.border = "2px solid red";
		document.getElementById("flashmsg1").style.visibility ="visible";
		document.getElementById("flashcross1").style.visibility = "visible";
	}

	if(email_regex.test(email))
	{
		document.getElementById("email").style.border = "2px solid green";
		document.getElementById("flashcheck2").style.visibility = "visible";
	}
	else
	{
		document.getElementById("email").style.border = "2px solid red";
		document.getElementById("flashmsg2").style.visibility ="visible";
		document.getElementById("flashcross2").style.visibility = "visible";
	}
}