var countCorgi = 0;

$(document).ready(function() {
  //shows picture of adorable corgi. When three corgis have been found, alerts user they win and are awesome, then refreshes page.
  $("#clickable1").click(function(){
    $("#initially-showing1").hide();
    $("#initially-hidden1").show();
    countCorgi+=1;
    if(countCorgi === 3) {
      setInterval(function() { alert("You win the corgi game! You are awesome!"); }, 500);
      setInterval(function() { location.reload(); }, 800);
      $('.corgi').show();
      $('p').hide();
    }
  });

  $("#clickable2").click(function(){
    $("#initially-showing2").hide();
    $("#initially-hidden2").show();
    countCorgi+=1;
    if(countCorgi === 3) {
      setInterval(function() { alert("You win the corgi game! You are awesome!"); }, 500);
      setInterval(function() { location.reload(); }, 800);
      $('.corgi').show();
      $('p').hide();
    }
  });

  $("#clickable3").click(function(){
    $("#initially-showing3").hide();
    $("#initially-hidden3").show();
    countCorgi+=1;
    if(countCorgi === 3) {
      setInterval(function() { alert("You win the corgi game! You are awesome!"); }, 500);
      setInterval(function() { location.reload(); }, 800);
      $('.corgi').show();
      $('p').hide();
    }
  });

  $("#clickable4").click(function(){
    $("#initially-showing4").hide();
    $("#initially-hidden4").show();
    countCorgi+=1;
    if(countCorgi === 3) {
      setInterval(function() { alert("You win the corgi game! You are awesome!"); }, 500);
      setInterval(function() { location.reload(); }, 800);
      $('.corgi').show();
      $('p').hide();
    }
  });

  $("#clickable5").click(function(){
    $("#initially-showing5").hide();
    $("#initially-hidden5").show();
    countCorgi+=1;
    if(countCorgi === 3) {
      setInterval(function() { alert("You win the corgi game! You are awesome!"); }, 500);
      setInterval(function() { location.reload(); }, 800);
      $('.corgi').show();
      $('p').hide();
    }
  });

  //toggle picture of losing class.
  $("#clickable6").click(function(){
    $("#initially-showing6").toggle();
    $("#initially-hidden6").toggle();
  });

  $("#clickable7").click(function(){
    $("#initially-showing7").toggle();
    $("#initially-hidden7").toggle();
  });

  $("#clickable8").click(function(){
    $("#initially-showing8").toggle();
    $("#initially-hidden8").toggle();
  });

  $("#clickable9").click(function(){
    $("#initially-showing9").toggle();
    $("#initially-hidden9").toggle();
  });
  //calls alert informing user they suck and lost. Then refreshes page
  $(".click-lose").click(function(){
    setInterval(function() { alert("You lose... Try harder next time."); }, 500);
    setInterval(function() { location.reload(); }, 800);
    $('.corgi').show();
    $('p').hide();
  });

  var cards = $(".random");
  for(var i = 0; i < cards.length; i++){
      var target = Math.floor(Math.random() * cards.length -1) + 1;
      var target2 = Math.floor(Math.random() * cards.length -1) +1;
      cards.eq(target).before(cards.eq(target2));
  }
});
