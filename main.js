function preload() {
    //
}
function setup() {
    canvas = createCanvas(350,350);
    canvas.position(85,220);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,350,350);
    rect(25,315,300,10);
    rect(25,25,300,10);
    rect(315,25,10,300);
    rect(25,25,10,300)
    circle(30,30,50);
    circle(30,320,50);
    circle(320,320,50);
    circle(320,30,50);
}
function take_snapshot() {
    save("croppedImage.png");
}
