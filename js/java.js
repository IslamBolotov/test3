//1
var m="Hello World!"
console.log(m);

//2
var first="Hello";
var second="World";
alert(first + " " + second);

//3

var el1=1;
var el2="hi";
var el3=true;
var el4=null;
var el5;

console.log(el1,el2,el3,el4,el5);

//4

var name;
var profession;

name=prompt("Введите ваше имя", "Islam" );
profession=prompt("Введите вашу професию", "programmer");

alert("Hello,"+name+"! You work as a "+profession);

//5

var number1;
var number2;

number1=parseInt(prompt("Введите целый число", 5));
number2=parseInt(prompt("Введите целый число", 5));

var sum = (number1)+(number2);
var difference = (number1)-(number2);
var product = (number1)*(number2);
var div = (number1)/(number2);

if(number2==0 && parseInt(number1)){
    var m="На 0 делить нельзя"
    alert((number1 +"+" +number2+ "=" +sum+"\n"+
    number1 +"-" +number2+ "=" +difference+ "\n"+
    number1 +"*" +number2+ "=" +product+"\n"+
    number1 +"/" +number2+ "=" +div+"\n"+m));
}


else if((parseInt(number1) && parseInt(number2))||(number1==0|| number2==0)){
alert((number1 +"+" +number2+ "=" +sum+"\n"+
number1 +"-" +number2+ "=" +difference+ "\n"+
number1 +"*" +number2+ "=" +product+"\n"+
number1 +"/" +number2+ "=" +div+"\n"));
}
else{
    alert("Введите число")
}
