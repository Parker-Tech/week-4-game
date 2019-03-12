$(document).ready(function(){

  var characters = {
    obiwan : {
      name: "Obi-Wan Kenobi",           //put all health values and such here
      health: 120,
      attackPower: 14
    },
    anakin : {
      name: "Anakin Skywalker",
      health: 110,
      attackPower: 13
    },
    quigon : {
      name: "Qui-Gon Jinn",
      health: 100,
      attackPower: 11
    },
    jarjar : {
      name: "Jar Jar Binks",
      health: 500,
      attackPower: 18
    }
  }

  var characterArray = ["obiwan", "anakin", "quigon", "jarjar"];
  
  var value;
  var enemyValue;
  var enemyHealthArray = [];

  function healthCheck(int) {
    if(int <= 0){
      $(this).hide();
    }
  }

  function nameCheck(name){
    return name != value;
  }

  function youLose(){
    $(".outcomeScreen").html(
      $("<img />").attr({
        "src": "assets/images/youLose.jpg",
        "class": "img-fluid",
        "id": "youLoseImg"
      })
    )
    $(".jumbotron").hide();
    $("body").attr("style", "background-color:black;")
    $("#combatLog").hide();
  }

  function youWin(){
    $(".outcomeScreen").html('<div style="width:100%;height:0;padding-bottom:48%;position:relative;"><iframe src="https://giphy.com/embed/3og0IAcP4QC1H7p31K" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/starwars-star-wars-episode-4-3og0IAcP4QC1H7p31K">via GIPHY</a></p>')
    $(".jumbotron").hide();
    $("body").attr("style", "background-color:black;")
    $("#combatLog").hide();
  }

  $("#combatLog").hide();

  //main on click that sends the non clicked enemies to the other row as well as adds text into #theseAreYourEnemiesText and the <hr>
  $(".character-img").on("click", function(){
    $(".jumbotron").hide();
    $("#combatLog").show();
    value = $(this).attr("value");
    var heroHealth = characters[value].health;
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
        $("<h5></h5>").attr("class", "enemy-name text-center").text(characters[newCharacterArray[i]].name),
        $("<p></p>").attr("class", "enemy-health text-center").text("Health: " + characters[newCharacterArray[i]].health)
      );
      enemyHealthArray[i] = characters[newCharacterArray[i]].health;
    }
    
    $(".enemy-img").on("click", function(){
      //attack clicked enemy
      enemyValue = $(this).attr("value");
      var clickedEnemyName = characters[enemyValue].name;
      var clickedEnemyAttack = characters[enemyValue].attackPower;
      $("#combatLogStart").after("<p>You attack " + clickedEnemyName + " for: " + characters[value].attackPower + "</p><p>"+ clickedEnemyName + " hits back for" + clickedEnemyAttack + "</p><hr>")
      heroHealth -= clickedEnemyAttack;
      $("#statBarHealth").text("Health: " + heroHealth);
      if(heroHealth <= 0){
        youLose();
      }
      //lose condition set and works

      //logic for setting health variables and the text as well
      var enemyId = $(this).parent().attr("id");
      if(enemyId == "enemyBar1"){
        enemyHealthArray[0] -= characters[value].attackPower;
        $("#enemyBar1 > p").text("Health : " + enemyHealthArray[0]);
        if(enemyHealthArray[0] <= 0){
          $(this).parent().hide();
        }
      }else if(enemyId == "enemyBar2"){
        enemyHealthArray[1] -= characters[value].attackPower;
        $("#enemyBar2 > p").text("Health : " + enemyHealthArray[1]);
        if(enemyHealthArray[1] <= 0){
          $(this).parent().hide();
        }
      }else if(enemyId == "enemyBar3"){
        enemyHealthArray[2] -= characters[value].attackPower;
        $("#enemyBar3 > p").text("Health :" + enemyHealthArray[2]);
        if(enemyHealthArray[2] <= 0){
          $(this).parent().hide();
        }
      }

      if(enemyHealthArray[0] <= 0 && enemyHealthArray[1] <= 0 && enemyHealthArray[2] <= 0){
        youWin();
      }

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


