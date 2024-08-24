// buttons
const btn1 = document.getElementById("tab-btn-1");
const btn2 = document.getElementById("tab-btn-2")
const btn3 = document.getElementById("tab-btn-3")
const color1 = document.getElementById("btn1")
const color2 = document.getElementById("btn2")
const color3 = document.getElementById("btn3")
const backgroundOne = document.getElementById("back-1")
const backgroundTwo = document.getElementById("back-2")
const backgroundThree = document.getElementById("back-3")

// divs
const div1 = document.getElementById('tab-1')
const div2 = document.getElementById('tab-2')
const div3 = document.getElementById('tab-3')

color1.style.color = "white"


btn1.addEventListener("click" , function(){
  color1.style.color = "white"
  color2.style.color = "black"
  color3.style.color = "black"
  backgroundOne.style.background = "royalBlue"
  backgroundTwo.style.background = "none"
  backgroundThree.style.background = "none"
  div1.style.display = "block"
  div2.style.display = "none"
  div3.style.display = "none"
})
btn2.addEventListener("click" , function(){
  color1.style.color = "black"
  color2.style.color = "white"
  color3.style.color = "black"
  backgroundOne.style.background = "none"
  backgroundTwo.style.background = "royalBlue"
  backgroundThree.style.background = "none"
  div1.style.display = "none"
  div2.style.display = "block"
  div3.style.display = "none"
})
btn3.addEventListener("click" , function(){
  color1.style.color = "black"
  color2.style.color = "black"
  color3.style.color = "white"
  backgroundOne.style.background = "none"
  backgroundTwo.style.background = "none"
  backgroundThree.style.background = "royalBlue"
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "block"
  
})

