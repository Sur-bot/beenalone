// Function calculate your FA time
// And it render on the HTML DOM
function myFunction() {
    var now = Date.now()
    var ds = new Date(2021,0,1).getTime();
    var fa = now - ds
    var d = Math.floor(fa / (1000 * 60 * 60 * 24))
    var h = Math.floor((fa % (1000 * 60 * 60 * 24))  / (1000 * 60 * 60))
    var m = Math.floor((fa % (1000 * 60 * 60 ))  / (1000 * 60))
    var s = Math.floor((fa % (1000 * 60))  / 1000)
    document.getElementById("count").innerHTML = d + "d " + h + "h "
  + m + "m " + s + "s ";
}

setInterval(()=>{
    myFunction()
},1000)