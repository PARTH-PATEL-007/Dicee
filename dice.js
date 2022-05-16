
function rollDice(){
    let dice1 = Math.floor(Math.random() * 6 +1).toString(10);
    let dice2 = Math.floor(Math.random() * 6 +1).toString(10);
    var str1 = "images/dice"+dice1+".png"
    var str2 = "images/dice"+dice2+".png"
    document.querySelector(".img1").setAttribute("src" , str1);
    document.querySelector(".img2").setAttribute("src", str2);
    
    var comp1 = parseInt(dice1,10);
    var comp2 = parseInt(dice2,10);

    if(comp1 > comp2){
        document.querySelector("h1").innerHTML = "Player1 wins";
    } else if(comp1 < comp2) {
        document.querySelector("h1").innerHTML = "Player2 wins";
    } else {
        // document.querySelector("h1").innerHTML = "Draw";
        rollDice();
    }
}
// window.onload = function() {
//     rollDice();
// };
rollDice();