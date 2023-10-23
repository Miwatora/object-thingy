Status = "";

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 460, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);    
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("model loaded");
    Status = true;
    
}