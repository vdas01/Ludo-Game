let f= false;
const but = document.getElementById("but");
but.innerHTML = "Play... 🔥";

const play = () =>{
const num1 = Math.floor(Math.random()*6)+1;
const num2 = Math.floor(Math.random()*6)+1;
const head = document.getElementById("head");

const img1 = `./images/dice${num1}.png`;
const img2 =  `./images/dice${num2}.png`;
document.getElementById("img1").setAttribute('src',img1);
document.getElementById("img2").setAttribute('src',img2);
if(f){
    but.innerHTML = "Play... 🔥";
}
if(num1 == num2){
    head.innerHTML = "Draw...😅";
    but.innerHTML = "Try Again...? 🙂";
    f=true;
}
else if(num1>num2){
    head.innerHTML = "Player 1 win...🥇";
}
else{
    head.innerHTML = "Player 2 win...🥇";
}
}