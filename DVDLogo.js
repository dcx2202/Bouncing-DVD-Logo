class DVDLogo
{
    constructor(x, y, speed, logo)
    {
        this.position = createVector(x, y);
        this.speed = createVector(speed, speed);
        this.img = logo;
    }

    getXPos()
    {
        return this.position.x;
    }

    getYPos()
    {
        return this.position.y;
    }

    getXSpeed()
    {
        return this.speed.x;
    }

    getYSpeed()
    {
        return this.speed.y;
    }

    updatePosition()
    {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

    setSpeed(x, y)
    {
        this.speed.x = x;
        this.speed.y = y;
    }

    display()
    {
        image(this.img, this.position.x, this.position.y);
    }
}