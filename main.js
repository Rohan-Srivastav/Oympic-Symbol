canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=1;
ctx.rect(140,120,490,230);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(280,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(380,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(480,210,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth=5;
ctx.arc(330,250,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(430,250,40,0,2*Math.PI);
ctx.stroke();


