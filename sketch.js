let width;
let height;
let logo;
let dvdlogo;
let hits;

function preload()
{
    logo = loadImage("logo.png");
}

function setup()
{
    width = window.innerWidth - 20;
    height = window.innerHeight - 20;

    createCanvas(width, height);
    
    frameRate(60);

    dvdlogo = new DVDLogo(random(width / 2), random(height / 2), 3, logo);

    hits = 0;
}

function checkCollisions()
{
    var horizontal_hit = false;
    var vertical_hit = false;

    if(dvdlogo.getXPos() <= 0 || dvdlogo.getXPos() + logo.width >= width)
    {
        dvdlogo.setSpeed(-dvdlogo.getXSpeed(), dvdlogo.getYSpeed())
        tint(random(100, 255), random(100, 255), random(100, 255));
        horizontal_hit = true;
    }

    if(dvdlogo.getYPos() <= 0 || dvdlogo.getYPos() + logo.height >= height)
    {
        dvdlogo.setSpeed(dvdlogo.getXSpeed(), -dvdlogo.getYSpeed())
        tint(random(100, 255), random(100, 255), random(100, 255));
        vertical_hit = true;
    }

    if(horizontal_hit && vertical_hit)
        hits++;
}

function draw()
{
    background(0);
    checkCollisions();
    dvdlogo.updatePosition();
    dvdlogo.display();
    fill(255, 90);
    textSize(20);
    text("Corner hits since you arrived: " + hits, 20, height - 20);
}