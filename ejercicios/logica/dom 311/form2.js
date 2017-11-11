function verifyInfo(user, pass){
 var n = document.getElementById("user");
 var p = document.getElementById("pass");
   if (n.value == "" || p.value.length == ""){
   	alert("Ambos campos deben completarse");
   }
}

