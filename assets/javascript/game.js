$(document).ready(function(){

  var characters = {
    obiwan : {
      name: "Obi-Wan Kenobi",           //put all health values and such here
      health: 100,
      attackPower: 14
    },
    anakin : {
      name: "Anakin Skywalker",
      health: 100,
      attackPower: 13
    },
    quigon : {
      name: "Qui-Gon Jinn",
      health: 100,
      attackPower: 11
    },
    jarjar : {
      name: "Jar Jar Binks",
      health: 100,
      attackPower: 18
    }
  }

  var characterArray = ["obiwan", "anakin", "quigon", "jarjar"];
  
  var value;

  function nameCheck(name){
    return name != value;
  }

  function youLose(){
    $(".youLoseScreen").html(
      $("<img />").attr({
        "src": "assets/images/backgroundImg.jpg",
        "class": "img-fluid",
        "id": "youLoseImg"
      })
    )
    $(".jumbotron").hide();
    $("body").attr("style", "background-color:black;")
  }

  //main on click that sends the non clicked enemies to the other row as well as adds text into #theseAreYourEnemiesText and the <hr>
  $(".character-img").on("click", function(){
    value = $(this).attr("value");
    $("#theseAreYourEnemiesText").text("These are Your Enemies Now!");
    //input the picture that only you click on
    $("#firstStage").html(this);
    $("#yourChampion").text("This is your hero!") ;
    $("#statBarName").text(characters[value].name);
    $("#statBarHealth").text("Health: " + characters[value].health);
    //returns a new array without the chosen character
    var newCharacterArray = characterArray.filter(nameCheck);
    //make new array without value and iterate over that, run below text on new for loop
    
    for(i = 0; i < newCharacterArray.length; i++){
      $("#enemyBar" + (i + 1)).append(
        $("<img />").attr({
          "src": "assets/images/" + newCharacterArray[i] + ".jpg",
          "class": "enemy-img img-fluid mx-auto",
          "id": newCharacterArray[i],
          "value": newCharacterArray[i]
        }),
        $("<p></p>").attr("class", "enemy-name text-center").text(characters[newCharacterArray[i]].name),
        $("<p></p>").attr("class", "enemy-health text-center").text("Health: " + characters[newCharacterArray[i]].health)
      )   
    }
    
    $(".enemy-img").on("click", function(){
      alert("working")
    })

    var readyCheck = confirm("You are about to start the fight.")
    if(readyCheck == false){
      alert("Wise Choice.");
      youLose();
    }
  });


  //on click event for the darth plagueis PSA
  $("#darthPlagueisBtn").on("click", function(){
    $("#darthPlagueisText").text("I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from death, but not himself.")
  });

});


