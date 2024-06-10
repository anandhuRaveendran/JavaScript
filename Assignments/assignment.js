function swap(){
    fno=document.getElementById("fn").value;
    sno=document.getElementById("sn").value;
    document.getElementById("fnu").innerHTML="first number= "+ fno+"<br>";
    document.getElementById("snu").innerHTML="second number= "+sno+"<br>";

    document.getElementById("sfn").innerHTML="first number= "+sno+"<br>"
    document.getElementById("ssn").innerHTML="second number= "+fno+"<br>"


}
let students = ["Alice", "Bob", "Charlie", "David", "Eva"];
function searchStudent(){
    stindex=document.getElementById("studentIndex").value;
    if(stindex<students.length && stindex>0){

    
    document.getElementById("result").innerHTML=students[stindex]

}
else{
    document.getElementById("result").innerHTML="enter a number between 0 and "+students.length
}
}
function studentReg(){
    let uname=document.getElementById("username").value;
    let pswd=document.getElementById("passw").value;
    localStorage.setItem("usern",uname);
    localStorage.setItem("passwd",pswd);
    alert("Successfully Registered")
    window.location.href="student_login_check.html"
    

}
function studentLogin(){
    let loginuser=document.getElementById("loginuser").value;
    let loginpass=document.getElementById("loginpass").value;

    if(loginuser===localStorage.getItem("usern")&&loginpass===localStorage.getItem("passwd")){
        alert("Successfully Logged in")
    }else{
        alert("Username or Password is incorrect,Please try Another")
    }
}
