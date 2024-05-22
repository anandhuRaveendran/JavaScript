function sum(x, y) {
    console.log(x, "+", y)
    let s = x + y;
    document.write("sum is = ", s,"<br>")
    return s;
}//multiplication
function mutli(d) {
    console.log(d,"*",2)
    res=d*4;
   document.write("multiplied =>",res,"<br>")
}
function textc(){
    let x=document.getElementById("text1").value + " " + document.getElementById("text2").value;
    document.getElementById("demo").innerHTML=x+"<br> type is=>"+typeof x
}
function addition(){
let a=document.getElementById("fno").value;
let b= document.getElementById("sno").value;
    document.getElementById("Addition").innerHTML=Number.parseInt(a)+Number.parseInt(b)
    document.getElementById("mult").innerHTML=Number.parseInt(a)*Number.parseInt(b)

}