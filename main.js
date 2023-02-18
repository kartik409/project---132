img = "";
status1 = "";
function preload() {
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}
function modelLoded() {
    console.log ("modelLoded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("orange");
    text("dog", 45, 75);
    noFill();
    stroke("orange");
    rect(30, 40, 400, 370);
    fill("purple");
    text("cat", 330, 100);
    noFill();
    stroke("red");
    rect(300, 80, 300, 320);
}