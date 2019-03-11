$(document).ready(function(){
  var value;
  //main on click that sends the non clicked enemies to the other row as well as adds text into #theseAreYourEnemiesText and the <hr>
  $(".character-img").on("click", function(){
    
    $("#theseAreYourEnemiesText").text("These are Your Enemies Now!");
    value = $(this).attr("value");
    console.log(value)
    $("#enemyPortrait1").text("Working " + value)
    
  });

  //on click event for the darth plagueis PSA
  $("#darthPlagueisBtn").on("click", function(){
    $("#darthPlagueisText").text("I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from death, but not himself.")
  });
});