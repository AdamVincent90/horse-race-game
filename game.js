/* Name: Adam Vincent
   Student number: 16441282
   University: University of Northampton
   E-mail: adam.vincent16@my.northampton.ac.uk */


            // declares the intervals for the interval for the chance variables
var horse1Speed = 0;
var horse2Speed = 0;
var horse3Speed = 0;
var horse4Speed = 0;

            // declares the variables for the random number intervals for the
            // horses
var chance1 = 0;
var chance2 = 0;
var chance3 = 0;
var chance4 = 0;

            // decalres a boolean varaible for laps/finish line
horseFinish1 = false;
horseFinish2 = false;
horseFinish3 = false;
horseFinish4 = false;

            // declares the array for horses
var horses = [];

            // declares the array for the head icons in the results table
var horseHead = [];

            // declares 4 arrays for the horses for when they turn around the track.
var turnHorseLeft = [];
var turnHorseDown = [];
var turnHorseRight = [];
var turnHorseUp = [];

            // declares a variable globally, this variable indicates the position of the results table, when a head is added to the table, this value increases by one.
var horseOrder = 1;

           // this boolean sets to false when the horse order icon is set to stop overlapping on the results table.
horse1Rank = true;
horse2Rank = true;
horse3Rank = true;
horse4Rank = true;



            // This method is called when one of the horses cross the finish
            // line and completes the race
function raceEnd() {
  if (horse1Rank == false && horse2Rank == false && horse3Rank == false &&
      horse4Rank == false) {
        window.setTimeout(raceReset, 3000);

      }
}


            // This function is called when the all 4 horses have finished the
            // race, is delayed for 3 seconds due to raceEnd condition result
function raceReset() {

  alert("Race has ended, view results table to see the winner! Close this box to reset the race.");
  location.reload();
}


            // track function is called when the load event function is called
            // creates the client rect for the track element and creates the
            // boundaries for top, left, right, bottom in which are used to
            // compare the position of the horses, turn horse random numbers
            // are used to allow the horses to turn at random points between
            // the outer and inner track
function track() {
  var innerTrack = document.getElementsByClassName("track");
  var track = innerTrack[0].getBoundingClientRect();

  var element = document.getElementById("startline");
  var elementChild = element.getBoundingClientRect();
  finishLine = elementChild.right;

  trackRight = track.right - 80;
  trackTop = track.top;
  trackLeft = track.left + 20;
  trackBottom = track.bottom - 60;

for (i = 1; i < 5; i++) {
turnHorseUp[i] = Math.floor(Math.random() * 110);
turnHorseLeft[i] = Math.floor(Math.random() * 80);
turnHorseDown[i] = Math.floor(Math.random() * 60);
turnHorseRight[i] = Math.floor(Math.random() * 110);
  }
}

            // This function is called for each horse function and calls it at
            // every time the function is called depending on the chance1
            // interval result, slight differences in calculating of the number to compensate the outer horses distance on the first corner.
function randomSpeed () {

    chance1 = Math.floor(Math.random() * 20);
    chance2 = Math.floor(Math.random() * 19.5);
    chance3 = Math.floor(Math.random() * 19);
    chance4 = Math.floor(Math.random() * 18.5);
}


            // This function calls when the user clicks start, clears the
            // interval and calls the random speed function to give
            // horse 1 speed a random interval, creates a variable for the
            // appropriate horse and styles it to go the appropriate direction
function horse1Start() {
  clearInterval(horse1Speed);
  randomSpeed();
  horse1Speed = setInterval (horse1Start, chance1);
  var positionRight = horses[1].offsetLeft;
  horses[1].style.left = positionRight + 1 + 'px';
  horses[1].className = "horse runRight rider head";

    if (positionRight >= trackRight - turnHorseUp[1]) {
          horse1Up();
          return;
        }

    if (positionRight >= finishLine && horseFinish1 == true) {

            horses[1].style.left = positionRight + 0 + 'px';
            horses[1].className = "horse standRight";

          if (horse1Rank == true) {
                horse1Rank = false;
                horseHead[horseOrder].classList.add("horse1");
                horseOrder++;
                raceEnd();
              }
            }
}

            // This function calls when the user clicks start, clears the
            // interval and calls the random speed function to give
            // horse 2 speed a random interval, creates a variable for the
            // appropriate horse and styles it to go the appropriate direction
function horse2Start() {
  clearInterval(horse2Speed);
  randomSpeed();
  horse2Speed = setInterval (horse2Start, chance2);
  var positionRight = horses[2].offsetLeft;
  horses[2].style.left = positionRight + 1 + 'px';
  horses[2].className = "horse runRight rider head";

    if (positionRight >= trackRight - turnHorseUp[2]) {
          horse2Up();
          return;
        }

    if (positionRight >= finishLine && horseFinish2 == true) {

            horses[2].style.left = positionRight + 0 + 'px';
            horses[2].className = "horse standRight";

          if (horse2Rank == true) {
                horse2Rank = false;
                horseHead[horseOrder].classList.add("horse2");
                horseOrder++;
                raceEnd();
              }
            }
}

            // This function calls when the user clicks start, clears the
            // interval and calls the random speed function to give 
            // horse 3 speed a random interval, creates a variable for the
            // appropriate horse and styles it to go the appropriate direction
function horse3Start() {
  clearInterval(horse3Speed);
  randomSpeed();
  horse3Speed = setInterval (horse3Start, chance3);
  var positionRight = horses[3].offsetLeft;
  horses[3].style.left = positionRight + 1 + 'px';
  horses[3].className = "horse runRight rider head";

      if (positionRight >= trackRight - turnHorseUp[3]) {
            horse3Up();
            return;
          }
      if (positionRight >= finishLine && horseFinish3 == true) {

            horses[3].style.left = positionRight + 0 + 'px';
            horses[3].className = "horse standRight";

          if (horse3Rank == true) {
                horse3Rank = false;
                horseHead[horseOrder].classList.add("horse3");
                horseOrder++;
                raceEnd();
              }
            }
}

            // This function calls when the user clicks start, clears the
            // interval and calls the random speed function to give
            // horse 4 speed a random interval, creates a variable for the
            // appropriate horse and styles it to go the appropriate direction
function horse4Start() {
  clearInterval(horse4Speed);
  randomSpeed();
  horse4Speed = setInterval (horse4Start, chance4);
  var positionRight = horses[4].offsetLeft;
  horses[4].style.left = positionRight + 1 + 'px';
  horses[4].className = "horse runRight rider head";

      if (positionRight >= trackRight - turnHorseUp[4]) {
            horse4Up();
            return;
          }
      if (positionRight >= finishLine && horseFinish4 == true) {

            horses[4].style.left = positionRight + 0 + 'px';
            horses[4].className = "horse standRight";

          if (horse4Rank == true) {
                horse4Rank = false;
                horseHead[horseOrder].classList.add("horse4");
                horseOrder++;
                raceEnd();
              }
            }
}

            // This function calls when horse 1 start condition is met
function horse1Up() {
  clearInterval(horse1Speed);
  randomSpeed();

  horse1Speed = setInterval (horse1Up, chance1);
  var positionTop = horses[1].offsetTop;
  horses[1].style.top = positionTop - 1 + 'px';
  horses[1].className = "horse runUp rider head";

  if (positionTop <= trackTop + turnHorseLeft[1]) {
      horse1Left();
      return;
    }
}

            // This function calls when horse 2 start condition is met
function horse2Up() {
  clearInterval(horse2Speed);
  randomSpeed();

  horse2Speed = setInterval (horse2Up, chance2);
  var positionTop = horses[2].offsetTop;
  horses[2].style.top = positionTop - 1 + 'px';
  horses[2].className = "horse runUp rider head";

  if (positionTop <= trackTop + turnHorseLeft[2]) {
      horse2Left();
      return;
    }

}

            // This function calls when horse 3 start condition is met
function horse3Up() {
  clearInterval(horse3Speed);
  randomSpeed();

  horse3Speed = setInterval (horse3Up, chance3);
  var positionTop = horses[3].offsetTop;
  horses[3].style.top = positionTop - 1 + 'px';
  horses[3].className = "horse runUp rider head";

  if (positionTop <= trackTop + turnHorseLeft[3]) {
      horse3Left();
      return;
    }

}

            // This function calls when horse 4 start condition is met
function horse4Up() {
  clearInterval(horse4Speed);
  randomSpeed();

  horse4Speed = setInterval (horse4Up, chance4);
  var positionTop = horses[4].offsetTop;
  horses[4].style.top = positionTop - 1 + 'px';
  horses[4].className = "horse runUp rider head";

  if (positionTop <= trackTop + turnHorseLeft[4]) {
      horse4Left();
      return;
    }

}

            // This function calls when horse 1 up condition is met
function horse1Left() {
  clearInterval(horse1Speed);
  randomSpeed();

  horse1Speed = setInterval (horse1Left, chance1);
  var positionLeft = horses[1].offsetLeft;
  horses[1].style.left = positionLeft - 1 + 'px';
  horses[1].className = "horse runLeft rider head";

  if (positionLeft <= trackLeft + turnHorseDown[1]) {
    horse1Down();
    return;
  }
}

            // This function calls when horse 2 up condition is met
function horse2Left() {
  clearInterval(horse2Speed);
  randomSpeed();

  horse2Speed = setInterval (horse2Left, chance2);
  var positionLeft = horses[2].offsetLeft;
  horses[2].style.left = positionLeft - 1 + 'px';
  horses[2].className = "horse runLeft rider head";

  if (positionLeft <= trackLeft - turnHorseDown[2]) {
    horse2Down();
    return;
  }
}

            // This function calls when horse 3 up condition is met
function horse3Left() {
  clearInterval(horse3Speed);
  randomSpeed();

  horse3Speed = setInterval (horse3Left, chance3);
  var positionLeft = horses[3].offsetLeft;
  horses[3].style.left = positionLeft - 1 + 'px';
  horses[3].className = "horse runLeft rider head";

  if (positionLeft <= trackLeft - turnHorseDown[3]) {
    horse3Down();
    return;
  }
}

            // This function calls when horse 4 up condition is met
function horse4Left() {
  clearInterval(horse4Speed);
  randomSpeed();

  horse4Speed = setInterval (horse4Left, chance4);
  var positionLeft = horses[4].offsetLeft;
  horses[4].style.left = positionLeft - 1 + 'px';
  horses[4].className = "horse runLeft rider head";

  if (positionLeft <= trackLeft - turnHorseDown[4]) {
    horse4Down();
    return;
  }
}

          // This function calls when horse 1 left condition is met
function horse1Down() {
  clearInterval(horse1Speed);
  randomSpeed();

  horse1Speed = setInterval (horse1Down, chance1);
  var positionDown = horses[1].offsetTop;
  horses[1].style.top = positionDown + 1 + 'px';
  horses[1].className = "horse runDown rider head";

  if (positionDown >= trackBottom - turnHorseRight[1]) {
    horseFinish1 = true;
    console.log(horseFinish1);
    horse1Start();
    return;
  }
}

          // This function calls when horse 2 left condition is met
function horse2Down() {
  clearInterval(horse2Speed);
  randomSpeed();

  horse2Speed = setInterval (horse2Down, chance2);
  var positionDown = horses[2].offsetTop;
  horses[2].style.top = positionDown + 1 + 'px';
  horses[2].className = "horse runDown rider head";

  if (positionDown >= trackBottom - turnHorseRight[2]) {
    horseFinish2 = true;
    horse2Start();
    return;
  }
}

          // This function calls when horse 3 left condition is met
function horse3Down() {
  clearInterval(horse3Speed);
  randomSpeed();

  horse3Speed = setInterval (horse3Down, chance3);
  var positionDown = horses[3].offsetTop;
  horses[3].style.top = positionDown + 1 + 'px';
  horses[3].className = "horse runDown rider head";

  if (positionDown >= trackBottom - turnHorseRight[3]) {
    horseFinish3 = true;
    horse3Start();
    return;
  }
}

          // This function calls when horse 4 left condition is met
function horse4Down() {
  clearInterval(horse4Speed);
  randomSpeed();

  horse4Speed = setInterval (horse4Down, chance4);
  var positionDown = horses[4].offsetTop;
  horses[4].style.top = positionDown + 1 + 'px';
  horses[4].className = "horse runDown rider head";

  if (positionDown >= trackBottom - turnHorseRight[4]) {
    horseFinish4 = true;
    horse4Start();
    return;
  }
}

          // This function calls when the user clicks the start button
          // runs the horse start functions for each horse and removes
          // the pointer event for the start button to stop the click event being run during the race
function clickEvent() {
  track();
  horse1Start();
  horse2Start();
  horse3Start();
  horse4Start();
  document.getElementById('start').style.pointerEvents = 'none';
}


          // This function creates a click even for the start element
          // and this function also uses a loop and array to create
          // all the 4 horses into a variable
function loadEvent() {
  for (i = 1; i < 5; i++) {
    horses[i] = document.getElementById("horse" + i);
    console.log("" + horses[i]);
    horseHead[i] = document.querySelector(".horse"+i);
    console.log(horseHead[i]);
    horseHead[i].classList.remove("horse"+i);
  }
  var click = document.getElementById("start");
  click.addEventListener("click", clickEvent);

}


          // This loads the loadEvent function after the page loads.
document.addEventListener("DOMContentLoaded", loadEvent);
