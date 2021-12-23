let counter = 0;

function count(){
    counter++;

    if (counter === 10){
        alert("get scammed idot")
    }
    else if (counter < 10){
        alert(counter)
    }
    else if (counter === 111){
        alert("what why")
    }
    else if (counter === 12){
        alert("do you expect me to say something?")

    }
    else if (counter === 13){
        alert("to show you something?")
    }
    else if (counter === 14){
        alert("well theres nothing here so stop")
    }
    else if (counter === 15){
        alert("ok your just wasting your time now")
    }
    else if (counter > 15){
        alert("there wont be anything different when you click that button again")
    }
}

document.querySelector("button").onclick = count;