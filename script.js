// Add your code to this file
let headRef = document.querySelector("h2");
let bodyRef = document.querySelector("body"); 

bodyRef.style.backgroundColor = "darkblue";
headRef.style.justifyContent = "center";

let img1Ref = document.getElementById("starters_image_div"); 
img1Ref.style.border = "thick dotted yellow"; 
img1Ref.style.marginLeft = "630px";
img1Ref.style.marginRight = "630px";

let otherimgRef = document.getElementsByClassName("pokemon_images"); 
for(let i = 0; i < otherimgRef.length; i++) {
    otherimgRef[i].style.borderStyle = "dotted";
    otherimgRef[i].style.borderColor = "yellow";
}
//otherimgRef.style.border = "thick dotted yellow"; 

let footRef = document.querySelector("footer");
footRef.style.fontFamily = "helvetica";
footRef.style.border = "underline";

let nameRef = document.getElementsByClassName("pokemon_names");
for(let e = 0; e < nameRef.length; e++) {
    nameRef[e].style.color = "yellow";
    nameRef[e].innerHTML += " !";

}
