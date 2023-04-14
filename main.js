console.log("The ohHellos");
var alarm = "";
var objects = [];
console.log("alarm defined");
function preload(){
    alarm = loadSound("love_special_rhtdm.mp3");
    console.log("sound loaded");
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    console.log("Canvas created and position");
    video = createCapture(VIDEO);
    video.hide();
    console.log("video loaded")
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}
function draw(){
    image(viddo, 500, 500);
    for (let i = 0; i < objects.length; i++) {
        if(objects[0].label == "person"){
            document.getElementById("status").innerHTML = "The baby has been detected.";
            alarm.stop();
        } else if(objects.length == 0){
            document.getElementById("status").innerHTML = "The baby has not been detected";
            alarm.play();
        }
    }
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}
function modelLoaded(){
    console.log("Model has been loaded.");
    objectDetector.detect(video, gotResults);
}