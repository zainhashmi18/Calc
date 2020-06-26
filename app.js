function getNum(num){
    var result=document.getElementById("res");
    result.value+=num;
    document.getElementById('res1').innerHTML =result.value;
}
function clearResult(){
    var result=document.getElementById("res");
    result.value="";
    document.getElementById('res1').innerHTML=""
}
function getResult(){
    var result=document.getElementById("res");
    result.value=eval(result.value);
    console.log(result.value)
}
function day() {
    document.getElementById("main").style.backgroundColor = "white";
    document.getElementById("main").style.borderColor = "white";
    document.getElementByid("sayl").style.backgroundColor = "white";
  }
function night() {
    document.getElementById("main").style.backgroundColor = "#21211F";
    document.getElementById("main").style.borderColor = "#21211F"; 
}