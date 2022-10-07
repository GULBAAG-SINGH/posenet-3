var nose_x = 0;
var nose_y = 0;

function preload() {
clown_nose= loadImage('https://i.postimg.cc/LX6Lcrt1/mustache.jpg');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is intialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x= "+ nose_x);
        console.log("nose_x= "+ nose_y);
    }

}

function draw() {
    image(video, 0, 0, 640, 480);
    image(clown_nose,nose_x,nose_y,30,30);
}

function take_snapshot() {
    save("Gulbaag.png");
}
