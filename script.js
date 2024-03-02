let btnOne = document.querySelector(".btn_one")
let inputBox1 = document.querySelector(".player_one_input")
let heading =document.querySelector(".player_heading")
let player_one_main = document.querySelector(".player_one_main")
let player_one_error =document.querySelector(".player_one_error")

let player_one_number_store;
let imgOne = document.querySelector(".img1")
let imgTwo = document.querySelector(".img2")
let imgThree = document.querySelector(".img3") 

let player_two_main = document.querySelector(".player_two_main")
let player_two_input = document.querySelector(".player_two_input")
let btnTwo = document.querySelector(".btn_two")
let btnThree = document.querySelector(".btn_three")
let player_two_error = document.querySelector(".player_two_error")
let chance = document.querySelector(".chance")
let chance_main = document.querySelector(".chance_main")
let count_chance = 5;

btnOne.addEventListener("click",function () {
    if (Boolean(inputBox1.value)) {
        if (Boolean(inputBox1.value - 50)) {
            if (inputBox1.value >= 0  &&  inputBox1.value <= 10 ) {
               player_one_number_store = inputBox1.value
               player_one_error.innerHTML = "";
               heading.innerHTML = "Player two"
               player_one_main.style.display = "none";
               player_two_main.style.display = "block";
            } else {
                player_one_error.innerHTML= "Number must be between or equal 0 to 10";
            }
        } else {
            player_one_error.innerHTML= "Please enter  number don't use text";
        }
    } else { 
        player_one_error.innerHTML= "Please enter your number";
    }
})
btnTwo.addEventListener("click",function () {
    if (Boolean(player_two_input.value)) {
        if (Boolean(player_two_input.value - 30)) {
            if (player_two_input.value >= 0 && player_two_input.value <= 10) {
                player_two_error.innerHTML = "";
                if (count_chance !== 1) {
                    count_chance--
                    player_two_error.innerHTML = "Wrong Guess,please try again"
                    if (player_two_input.value == player_one_number_store) {
                        player_two_error.innerHTML = "";
                        heading.innerHTML ="Congratulation,you won"
                        player_two_input.style.display = "none";
                        chance_main.style.display = "none"
                        btnTwo.style.display = "none";
                        btnThree.style.display = "block";
                        imgOne.style.display = "none"
                        imgTwo.style.display = "block"

                    } else {
                        chance.innerHTML = count_chance
                    }
                } else {
                    player_one_error.innerHTML = "";
                    heading.innerHTML = "Oops,The winner is first palyer"
                    imgOne.style.display = "none"
                    imgThree.style.display = "block"
                    player_two_input.style.display = "none"
                    chance_main.style.display = "none"
                    btnTwo.style.display = "none"
                    btnThree.style.display = "block"
                }
                
            } else {
                player_two_error.innerHTML= "Number must be between or equal 0 to 10";
            }
        } else {
            player_two_error.innerHTML="Enter number don't use text";
        }
    } else {
        player_two_error.innerHTML="Please enter your number";
    }
})


btnThree.addEventListener("click",function () {
    location.reload();
})