canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

image;

var key_typed;

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
         if(keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)
         {
        alphabet_key()
        key_typed = "You pressed Alphabet Key."
        document.getElementById("span_key").innerHTML = key_typed;
        console.log(key_typed);
        
    }
    
    
        if(keyPressed >= 48 && keyPressed <= 57)
        {
        number_key()
        key_typed = "You pressed Number Key."
        document.getElementById("span_key").innerHTML = key_typed;
        console.log(key_typed);
        
    }
    
    
        if(keyPressed >= 37 && keyPressed <= 40) 
        {
        arrow_key_key()
        key_typed = "You pressed Arrow Key."
        document.getElementById("span_key").innerHTML = key_typed;
        console.log(key_typed);
        
    }
    
        if(keyPressed = 17) || (keyPressed = 18) || (keyPressed = 27)
        {
        special_key()
        key_typed = "You pressed Special Key."
        document.getElementById("span_key").innerHTML = key_typed;
        console.log(key_typed);
        
    }  
    
        if(keyPressed = 13) || (keyPressed = 16) || (keyPressed = 9)
        {
        other_key()
        key_typed = "You pressed Other Key."
        document.getElementById("span_key").innerHTML = key_typed;
        console.log(key_typed);
        
    }  
    
     
}


function alphabet_key()
{
    image = "Alpkey.png";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}


function number_key()
{
    image = "numkey.png";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}


function arrow_key_key()
{
   image = "Arrkey.png";
   ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
}

 function special_key()
 {
     image = "spkey.png";
     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
 }

function other_key()
{
    image = "otherkey.png";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}







