$(document).ready(function() {
  //global variable declarations
  var targetScore = 0;
  var rand =Math.floor(Math.random() * 30 + 11);
  //   var randValue = [1, 2, 3, 4, 5, 10, 11]; original idea to get a random selection from an array of numbers; to control the values I want each button to have...
  lossCount = 0;
  winCount = 0;
  totalScore = 0;

  //assign a randValue to the img tag with a value attribute this will happen when the start button is clicked for each image
  $("#btnStart").on("click", function() {
    $("#targetScore").append(rand); //----------------------------assigning the random number to the #targetScore, this will stay the same throughout each game.
    $("#totalScore").append(totalScore); //------------------starting the game with targetScore = 0 and displaying it on #totalScore.

    $(".invisible").each(function() {
      var random = Math.floor(Math.random() * 10) + 1;

      $(this).text(random); //assigns a random number to each h1 of each button id with .invisible, so user doesnt see this rand.
    });
  });

  //click event for each image click adds value to the target score. call checkWin()?

  $("#bluegem").on("click", function() {
    totalScore = totalScore + parseInt($("#bluegem h1").html()); //gets the value from the h1 within the buttonby Id and adds to global totalScore which is initialized to 0

    // console.log($("#bluegem h1").html()); //troubleshooting code...tells me the value of the above statement

    $("#totalScore").html("Total Score: " + totalScore);
    checkWin(rand, totalScore);

    return totalScore;
  });

  $("#redgem").on("click", function() {
    totalScore = totalScore + parseInt($("#redgem h1").html());

    $("#totalScore").html("Total Score: " + totalScore);

    checkWin(rand, totalScore);

    return totalScore;
  });

  $("#greengem").on("click", function() {
    totalScore = totalScore + parseInt($("#greengem h1").html());

    $("#totalScore").html("Total Score: " + totalScore);

    checkWin(rand, totalScore);

    return totalScore;
  });

  $("#ltbluegem").on("click", function() {
    totalScore = totalScore + parseInt($("#ltbluegem h1").html());

    $("#totalScore").html("Total Score: " + totalScore);

    checkWin(rand, totalScore);

    return totalScore;
  });

  $("#btnReset").on("click", function(){
    totalScore=0;
    $("#totalScore").html("Total Score: ");
    targetScore=0;
    $("#targetScore").html("Target Score: ");
    $("#gamevoice").text("");
    $("#winDisplay").text("Wins: "+ winCount);
    $("#lossDisplay").text("Losses: "+lossCount);
    rand =Math.floor(Math.random() * 30 + 11);
    
    
  })

  //write a checkWin()
  function checkWin(rand, totalScore) {
    if (totalScore === rand) {
      $("#gamevoice").text("You have accomplished the impossible! You have won!");
      winCount++;
      displayResult();

    } else if (totalScore < rand) {
      $("#gamevoice").text("Go again! Choose Wisely...");
    } else if (totalScore > rand) {
      $("#gamevoice").text("Your luck has run out! You have lost!");
      lossCount++;
      displayResult();
      
    }
  }
  //write a win() that outputs the winValue to win/loss display--same for loss()
  function displayResult(){

      $("#winDisplay").text("Wins: "+ winCount);
      $("#lossDisplay").text("Losses: "+ lossCount);
      

  }
  



  //reset button( )that will reset score values to 0...
}); //-------------------------------end of jquery code
