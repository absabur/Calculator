let inputField = document.querySelector("#inputField");

let buttonDiv = document.querySelector(".button");

function calculation(val){
    inputField.value += `${val}`;
}

function deleteScreen(){
    inputField.value = "";
    document.querySelector("#res").innerHTML = ""
    document.querySelector("p").style.display = "none";
}

function showAnswer(){
    let a = inputField.value;
    b = eval(a);
    document.querySelector("#res").innerHTML = b.toFixed(2);
    document.querySelector("p").style.display = "inline";
    // inputField.value += " = "+ b;
}
function backSpace(){
    var value = inputField.value;
    inputField.value = value.substr(0, value.length - 1);
}
function answer(){
    let ans = document.querySelector("#res").innerHTML;
    inputField.value = ans;
}