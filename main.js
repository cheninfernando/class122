x = 0;
y = 0;
var scrnwd=0;
var scrnhit=0;
var apple="apple.png";
var speak_data="";
var to_number="";


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number=Number(content);

    if(Number.isInteger(to_number))
{ 
    document.getElementById("status").innerHTML = "Started to draw apple: " + content; 
    draw_apple="set";
}
     else {
      document.getElementById("status").innerHTML = "The speech has not recognized a number: " + content


    }


}

function setup() {
 scrnwd= window.innerWidth;
 scrnhit= window.innerHeight;

 canvas=createCanvas(scrnwd-100,scrnhit-100);
 canvas.center;

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    draw_apple=="set"
    for(var i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*1200)
      y=Math.floor(Math.random()*600)
      image(apple,x,y,100,100)
      document.getElementById("status").innerHTML=to_number+"Apples drawn";
      speak();
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;
  speak_data=to_number+" Apples drawn"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  apple=loadImage("apple.png")
}
