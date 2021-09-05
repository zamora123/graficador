function agregar() {
    
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);

   
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(x,y,10,0,2*Math.PI);
        ctx.stroke();
           
        
}


