//Create a variable for the current selector: X or O.  Initialized to X
var currentPiece = "X";
//Create a variable to count the attempts to return end of game alerts
var numberOfMarkersPlaced = 0;
// This is a place marker function to make the x's and o's interchange
function placeMarker(element) {
  //This method lets the user only click once
  element.unbind('click');
  //This method adds the current piece
  element.addClass(currentPiece);
  //If current is  to X, change to O. Otherwise change to X
  if (currentPiece === "X") {
    currentPiece = "O";
  } else {
    currentPiece = "X";
  }
  //This increments our counter and allows for end game alerts
  numberOfMarkersPlaced++;
  if (numberOfMarkersPlaced === 9) {
    $("#banner").html("GAME OVER!")
  }
};

$(document).ready(function(){
  //Each of these 9 functions changes the boxes to pictures of X's and O's

  $("#A1").click(function() {
    placeMarker($("#A1"));
  });
  $("#A2").click(function() {
    placeMarker($("#A2"));
  });
  $("#A3").click(function() {
    placeMarker($("#A3"));
  });
  $("#B1").click(function() {
    placeMarker($("#B1"));
  });
  $("#B2").click(function() {
    placeMarker($("#B2"));
  });
  $("#B3").click(function() {
    placeMarker($("#B3"));
  });
  $("#C1").click(function() {
    placeMarker($("#C1"));
  });
  $("#C2").click(function() {
    placeMarker($("#C2"));
  });
  $("#C3").click(function() {
    placeMarker($("#C3"));
  });
  $("#submit").click(function() {
    var first = $("#input1").val();
    var second = $("#input2").val();
    $("#h1").html(first + " vs. " + second);
    $("#input1").hide();
    $("#input2").hide();
    $("#submit").hide();
  });
});
