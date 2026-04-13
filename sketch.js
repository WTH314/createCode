//make the html elemet global because we might 
let headerElement
let slider
let inputText
let dropdown

function setup() {
  createCanvas(400, 400);
  
   headerElement =  createElement('h2','hi this is an h2')
  headerElement.position(0,0)
   headerElement.html("i have change the content now")
  //createslider*min,max,[value],[step]
  //value=starting value
  slider= createSlider(0,width,width/2)
  
  //createInput([value])
  inputText = createInput('this is some text')
  inputText.position(10,350)
  
  dropdown= createSelect()
  dropdown.option("sky blue","skyblue")
  dropdown.option('pink')
}

function draw() {
  background(dropdown.selected());
  
  // print(slider,value())
  
  text( inputText.value(),slider.value(),width/2,height/2)
}