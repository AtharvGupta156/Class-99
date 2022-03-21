var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start () {
document.getElementById("textbox").innerHTML = "";
recognition.start();
}
// this function will start to hear//

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();
}
//this function will hold the text and onresult will get the text we say //
//

function speak() {
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value ;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

// this speak function will speak whatever we speak//
// synth is the api to speak something//

camera = document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
png_quality : 100
});
