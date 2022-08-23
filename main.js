var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastx, lasty;
color="blue";
width=3;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(mousex, mousey, 40, 0, 2*Math.PI);
        ctx.stroke();
    
    

    lastx=mousex;
    lasty=mousey;
}