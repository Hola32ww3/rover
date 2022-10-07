canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
nasa = ["mars.jpg","marte1.jpg","marte2.jpg","marte3.jfif"];
var numero = Math.floor(Math.random()*4);
background_image = nasa[numero];
console.log(numero)
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    console.log("wwwdwdd");
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keyPressed = e.keyCode
    if(keyPressed == '38')
    {
        up();
        console.log("adadada")
    }

    if(keyPressed == '40')
    {
        down();
    }

    if(keyPressed == '37')
    {
        left();
    }

    if(keyPressed == '39')
    {
        right();
    }

    function up()
    {
        if(rover_y >=0)
        {
            rover_y = rover_y - 10;
            uploadBackground();
            uploadrover();
        }
    }

    
    function down()
    {
        if(rover_y <=500)
        {
            rover_y = rover_y + 10;
            uploadBackground();
            uploadrover();
        }
    }

    
    function left()
    {
        if(rover_x >=0)
        {
            rover_x = rover_x - 10;
            uploadBackground();
            uploadrover();
        }
    }

    function right()
    {
        if(rover_x <= 700)
        {
            rover_x = rover_x +10;
            uploadBackground();
            uploadrover();
        }
    }
}