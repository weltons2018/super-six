/* 
     Created By: Daven Horne
     Last Updated:3/28/2022
     Discription: Load text into and provide functionality to index.html
*/

window.onload = function (){
    let images = document.querySelectorAll("img");

    for     (let image of images){
        image.addEventListener("mouseover", mousedOver);
    }
}

function mousedOver(event) {
let target = event.currentTarget;
}
//Adding text to HTML page
document.getElementById("Number 1").innerHTML = "One Piece";
document.getElementById("Number 2").innerHTML = "FullMetal Alchemist Brotherhood";
document.getElementById("Number 3").innerHTML = "Yu Yu Hakusho";
document.getElementById("Number 4").innerHTML = "Gintama";
document.getElementById("Number 5").innerHTML = "Boku no Hero Academia";


