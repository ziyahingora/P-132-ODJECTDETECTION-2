status = "";

function preload()
{
    img = loadImage('mirror.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    ObjectDetector.detect(img, gotResult);
}
function gotResults()
{
    if (error) {
        console.log(error);
    }
    console.log(results);
}