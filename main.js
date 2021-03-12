function setup() {
    canvas = createCanvas(1200,1200);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
    }
    
function draw() {
    image(video, 370, 190, 320, 300);
    
    circle (50,50,50);
    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle (50,550,50);
    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle (1050,50,50);
    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle (1050,550,50);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    
    }