const pass1 = document.getElementById("P1");
const pass2 = document.getElementById("P2");
const message = document.getElementById("T");
const passWordLenght = document.getElementById("passWordLenght");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");

const lowerCased = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const upperCased = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["@","#","%",".","&","$"];

// ----- FUNCTIONS -----

function generatePassWord() {
    let passWord1 = "";
    let passWord2 = "";
    let passLenght = passWordLenght.value;
    
    let options = [];
    options.push(...lowerCased);
    // "...arrayName" takes the array elements and spreads them.
    if(check1.checked) {options.push(...numbers)};
    if(check2.checked) {options.push(...symbols)};
    if(check3.checked) {options.push(...upperCased)};
    console.log(options);
   
    // Letters, numbers and symbols    
    for(i = 0; i < passLenght; i++){
        passWord1 += options[(Math.floor(Math.random() * options.length))];
        passWord2 += options[(Math.floor(Math.random() * options.length))];
    }
      

pass1.value = passWord1;
pass2.value = passWord2;

}

function increasePass() {
    if(passWordLenght.value < 20) {
    passWordLenght.value =+ passWordLenght.value + 1;
    }
}

function decreasePass() {
    if(passWordLenght.value > 5) {
    passWordLenght.value =+ passWordLenght.value - 1;
    }
}

function copyOnClick(a) {
    let passWord = document.getElementById(a)
    passWord.select();
    document.execCommand("copy");
    console.log(passWord.value);
    showMessage(passWord);
}

function showMessage(pass) {
   message.classList.add("animation");
   pass.disabled = true;
   setTimeout(() => { 
       message.classList.remove("animation");
       pass.disabled = false;
       }, 4000);
}

