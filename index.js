var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;

var y = Math.random();
y = y * 6;
y = Math.floor(y) + 1;


if (n === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else
if (n === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else
if (n === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else
if (n === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else
if (n === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}






if (y === 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else
if (y === 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else
if (y === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else
if (y === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else
if (y === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


if (n > y) {
  document.querySelector("h1").innerHTML="Player 1 won";
}else
if(n<y)
{
  document.querySelector("h1").innerHTML="Player 2 won";

}else
{
  document.querySelector("h1").innerHTML="draw";


}
