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
    let x="Name : "+document.getElementById("text1").value + " " + document.getElementById("text2").value + "<br>"+"Age : "+document.getElementById("age").value+"<br>"+"Mobile Number : "+document.getElementById("number").value;
    document.getElementById("demo").innerHTML=x
}
function addition(){
let a=document.getElementById("fno").value;
let b= document.getElementById("sno").value;
    document.getElementById("Addition").innerHTML=Number.parseInt(a)+Number.parseInt(b)
    document.getElementById("mult").innerHTML=Number.parseInt(a)*Number.parseInt(b)

}
function swap(){

    document.getElementById("swapped1").innerHTML = document.getElementById("name2").value
    document.getElementById("swapped2").innerHTML = document.getElementById("name1").value


}
function square(){

    document.getElementById("squared").innerHTML = document.getElementById("squaren").value**2


}
function cube(){

    document.getElementById("cube").innerHTML = document.getElementById("cuben").value**3


}
function interest(){
	let pri = document.getElementById("princ").value, rate = document.getElementById("rate").value,
		time = document.getElementById("time").value;

	/* Calculate compound interest */
	let A = pri *
		((1 + rate / 100)**time);
	let CI = A - pri;

	document.getElementById("cmpi").innerHTML="Compound interest is " + CI;


}
function sinterest(){
	let pri = document.getElementById("princ").value, rate = document.getElementById("rate").value,
		time = document.getElementById("time").value;

	/* Calculate compound interest */
    let SI = (pri * time * rate) / 100;

	document.getElementById("smpi").innerHTML="Simple interest is " + SI;


}
 //area of a square
 function square(a){
    document.write("Area of a square = ",a*a)
   
}
//perimeter of a square
function perimsquare(a){
    document.write("perimeter of a sqaure = ",psquare=4*a)
}
a=20;
perimsquare(a)
let l=14;
square(l)
//area of a rectangle
function rect(l,b){
    document.write("area of a rectangle=",l*b)
}
let len=20;
let bred=30;
rect(len,bred)
//perimeter of a rectangle
function pmtr(l,b){
    document.write("perimeter of a rectangle= ",(l+b)*2)
}
pmtr(l,b)
const pi=3.14;
//area of a circle
function circ(r){
    document.write("area of acircle = ",area=pi*r**2)
}
let r=36;
circ(r)
//perimeter of a circle
function pericercle(r){
    document.write("perimeter of acircle = ",perim=2*pi*r)
}
pericercle(r)
