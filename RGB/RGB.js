var colors = []
var mode = 6
var squares = document.querySelectorAll(".square")
var easymode = document.querySelector(".easymode")
var hardmode = document.querySelector(".hardmode")
var state = document.querySelector(".state")
var reset = document.querySelector(".reset")
//var button = document.querySelector("button")
var RGBdisplay = document.querySelector(".RGBdisplay")
var h1 = document.querySelector("h1")

function RGB() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function answer() {
  var i = Math.floor(Math.random() * mode)
  return colors[i];
}

function changbgcolor() {
  colors = pushin(mode)
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
  }
}

function pushin(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(RGB())
  }
  return arr
}


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (this.style.background == RGBdisplay.textContent) {
      h1.style.background = RGBdisplay.textContent
      state.textContent = "Correct!"
      changeall(RGBdisplay.textContent)
      reset.textContent=" Play Again?"
    }
    else {
      this.style.background = "#232323"
      state.textContent = "Try Again!"
    }
  })
}

function changeall(ans) {
  for (var i = 0; i < squares.length; i++)
    squares[i].style.background = ans
}

reset.addEventListener("click", function () {
  changbgcolor()
  h1.style.backgroundColor = "steelblue"
  RGBdisplay.textContent = answer()
  state.textContent=""
  reset.textContent="New Colors"
})

easymode.addEventListener("click",function(){
  
  

})
hardmode.addEventListener("click",function(){
  mode=6

})


changbgcolor()
RGBdisplay.textContent = answer()