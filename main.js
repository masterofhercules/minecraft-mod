var canvas=new fabric.Canvas("myCanvas")
playerx=10
playery=10
Blockimagewidth=30
Blockimageheight=30
var playerobject=""
Blockimageobject=""

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(140)
playerobject.set({
    top:playery,
    left:playerx
})
canvas.add(playerobject)
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        Blockimageobject=Img
        Blockimageobject.scaleToWidth(150)
        Blockimageobject.scaleToHeight(140)
Blockimageobject.set({
    top:playery,
    left:playerx
})
canvas.add(Blockimageobject)
    })
} 
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
    if (e.shiftKey==true && keyPressed=="80") {
       console.log("p and shift pressed together")
       Blockimagewidth=Blockimagewidth+10
       Blockimageheight=Blockimageheight+10
       document.getElementById("current_width").innerHTML=Blockimagewidth
       document.getElementById("current_height").innerHTML=Blockimageheight
       
    }
    if (e.shiftKey==true && keyPressed=="77") {
        console.log("m and shift pressed together")
        Blockimagewidth=Blockimagewidth-10
        Blockimageheight=Blockimageheigt-10
        document.getElementById("current_width").innerHTML=Blockimagewidth
        document.getElementById("current_height").innerHTML=Blockimageheight
        
     }
     if(keyPressed=="38"){
         up()
         console.log("up")
     }
     if(keyPressed=="40"){
        down()
        console.log("down")
    }
    if(keyPressed=="37"){
        left()
        console.log("left")
    }
    if(keyPressed=="39"){
        right()
        console.log("right")
    }
   if(keyPressed=="87"){
        new_image("wall.jpg")
        console.log("w")
    }
    if(keyPressed=="71"){
        new_image("ground.png")
        console.log("g")
    }
    if(keyPressed=="76"){
        new_image("light_green.jpg")
        console.log("l")
    }
    if(keyPressed=="84"){
        new_image("trunk.jpg")
        console.log("t")
    }
    if(keyPressed=="82"){
        new_image("roof.jpg")
        console.log("r")
    }
    if(keyPressed=="89"){
        new_image("yellow_wall.png")
        console.log("y")
    }
    if(keyPressed=="68"){
        new_image("dark_green.png")
        console.log("d")
    }
    if(keyPressed=="85"){
        new_image("unique.png")
        console.log("u")
    }
    if(keyPressed=="67"){
        new_image("cloud.jpg")
        console.log("c")
    }
}
function up(){
    if(playery>=0){
       playery=playery-Blockimageheight
       console.log("block image height="+ Blockimageheight)
       console.log("when up arrow is pressed,x= " +playerx+"y="+playery)
       canvas.remove(playerobject)
       player_update()
    }
}
function down(){
    if(playery<=500){
       playery=playery+Blockimageheight
       console.log("block image height="+ Blockimageheight)
       console.log("when down arrow is pressed,x= " +playerx+"y="+playery)
       canvas.remove(playerobject)
       player_update()
    }
}
function left(){
    if(playerx>=0){
       playerx=playerx-Blockimagewidth
       console.log("block image width="+ Blockimagewidth)
       console.log("when left arrow is pressed,x= " +playerx+"y="+playery)
       canvas.remove(playerobject)
       player_update()
    }
}
function right(){
    if(playerx<=850){
       playerx=playerx+Blockimagewidth
       console.log("block image width="+ Blockimagewidth)
       console.log("when right arrow is pressed,x= " +playerx+"y="+playery)
       canvas.remove(playerobject)
       player_update()
    }
}