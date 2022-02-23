let count = 0;

document.querySelector("#button").onclick = function(){
    count++;
    document.querySelector("h1").innerHTML = count;
}