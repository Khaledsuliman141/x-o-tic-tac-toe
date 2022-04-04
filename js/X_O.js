/*jslint plusplus: true, evil: true */
/*global console , alert ,prompt ,$ */
$(document).ready(function ()
                  {
        "use strict";
    
        var sq0 = document.getElementById("0"),
            sq1 = document.getElementById("1"),
            sq2 = document.getElementById("2"),
            sq3 = document.getElementById("3"),
            sq4 = document.getElementById("4"),
            sq5 = document.getElementById("5"),
            sq6 = document.getElementById("6"),
            sq7 = document.getElementById("7"),
            sq8 = document.getElementById("8"),

          
            squares = document.getElementsByClassName("square"),
            empty = document.getElementsByClassName("empty"),
            full = document.getElementsByClassName("full"),
            sign = document.getElementsByClassName("sign"),
            player = true,
            computerSign = false,
            playerSign = false;


            sign[0].onclick = function () {
                playerSign = true;
                computerSign = false;
                alert("Your Sign is X");
            };

            sign[1].onclick = function () {
                playerSign = false;
                computerSign = true;
                alert("Your Sign is O");
            };


            /*function checkPlay(player) {
                if (squares == full) {
                    player = false;
                } else if (squares == empty) {
                    player = true;
                }
            }*/



            // Function for when O plays randomly
	        function randomplayO() {
            for (var i = 0; i < 1; i++) {
            // Loop to find a valid play

            if(player == true) {
		
			var randomNumber = Math.floor((Math.random() * 9) + 1);
            var randomSquare = squares[randomNumber];
            
            //checkPlay(randomSquare);

            
                randomSquare.textContent = "o";
                randomSquare.classList.remove("empty");
                randomSquare.classList.add("full");
            }

            //randomSquare.textContent = "o";
            //randomSquare.classList.remove("empty");
            console.log(randomNumber);
            break;
		
		}
	}




            squares[0].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[0].classList.remove("empty");
                    squares[0].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                    
                }
            };

            squares[1].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[1].classList.remove("empty");
                    squares[1].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[2].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[2].classList.remove("empty");
                    squares[2].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[3].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[3].classList.remove("empty");
                    squares[3].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[4].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[4].classList.remove("empty");
                    squares[4].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[5].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[5].classList.remove("empty");
                    squares[5].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[6].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[6].classList.remove("empty");
                    squares[6].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[7].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[7].classList.remove("empty");
                    squares[7].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };

            squares[8].onclick = function () {
                if(playerSign === true) {
                    this.textContent = "x";
                    squares[8].classList.remove("empty");
                    squares[8].classList.add("full");
                    randomplayO();
                }else if(computerSign === true) {
                    this.textContent ="o";
                }
            };
            


            

            
            
   
            
    
       
   
   
   
    
            
          
            
    });

      
    