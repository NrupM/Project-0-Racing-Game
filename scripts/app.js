$(document).ready(function() {
  var player1 = $("#player1");
  var player2 = $("#player2");
  var position1 = 0;
  var position2 = 0;
  var gameOn = false;

  //event listener for gameOn
  $("*").keydown(function(e) {
    if(e.which === 32 && gameOn === false){
      e.preventDefault();
      gameOn = true;
      $("#instructions").addClass("hidden");
      console.log(gameOn);
    }
  });

// reset function

  function reset() {
    player1.animate({
      left: "0"
    });
    player2.animate({
      left: "0"
    });

    position1 = 0;
    position2 = 0;
    gameOn = false;

  }


  $("#reset").click(function(e) {
    reset();
  });

  $("body").keydown(function(e) {
    if (e.which === 39 && gameOn === true) {
      position1 += 1;
      $("#player1").animate({
        left: "+=100px"
      }, 150);
      console.log(position1);
    }

    if (e.which === 90 && gameOn === true) {
      position2 += 1;
      $("#player2").animate({
        left: "+=100px"
      }, 150);
      console.log(position2);
    }

    evaluateWin();
  });

  function evaluateWin() {
    if (position1 >= 9 && position2 !== 9) {
      console.log("walle should be winnng")
      $("#instructions").removeClass("hidden");
      $("#instructions").text("Wall-E Wins!!");
      reset();
    } else if (position2 >= 9 && position1 !== 9) {
      console.log("eve wins")
      $("#instructions").removeClass("hidden");
      $("#instructions").text("Eve Wins!!");
      reset();
    } else {
      console.log("game not over yet")
    }
  }

});
