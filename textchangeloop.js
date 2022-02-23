
const dh1 = document.querySelector("h1")

document.querySelector("button").onclick = function(){
    if(dh1.innerHTML === "Hello"){
        dh1.innerHTML = "Yo"
    }
    else{
        dh1.innerHTML = "Hello"
    }
}