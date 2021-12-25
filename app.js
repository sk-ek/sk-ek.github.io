document.querySelectorAll("button").forEach(function(button){
    button.onclick = function(){
        document.querySelector("#header").style.color = button.dataset.color;
    }
})