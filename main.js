noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(VIDEO,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log("PoseNet has been deployed, please talk to bannana muffin prince for accountance");
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;   
        console.log("Nose X ="+noseX+"Nose Y ="+noseY);
        leftwristX=results[0].pose.leftwrist.x;
        rightwristX=results[0].pose.rightwrist.x;
        difference=leftwristX-rightwristX;
        console.log("Left Wrist X ="+leftwristX+"Right Wrist X ="+rightwristX+"Difference ="+difference);    
    }
}

function draw(){
    background('#17b197');
    document.getElementById("square_side").innerHTML="Width and Height of the Square will be "+difference+"px";
    fill("#C6D645")
    stroke("#C6D645")
    square(noseX,noseY,difference); 
}
