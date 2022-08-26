document.getElementById("create").addEventListener('click', inputMatch)


function inputMatch(){

 let holder1 =   document.getElementById("email1").value 

 let holder2 =   document.getElementById("email2").value 

 let holder3 =   document.getElementById("pass1").value 

 let holder4 =   document.getElementById("pass2").value 

 if (holder1 === holder2 && holder3 === holder4 && holder1 | holder2 | holder3 | holder4 != "")
 {
    alert("Account Created")
 }
 else if(holder1 != holder2)
 {
    alert("Emails do not match")
 }
 else if(holder3 != holder4)
 {
    alert("Passwords do not match")
 }
 else if(holder1 | holder2 | holder3 | holder4 === "")
 {
    alert("Please fill out all of the fields")
 }
}
