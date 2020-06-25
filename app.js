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

