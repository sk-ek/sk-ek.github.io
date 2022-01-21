count = 0;

document.querySelector(".button").onclick = () => {
    count++
    var num = document.querySelector(".num")
    num.innerHTML = count
}