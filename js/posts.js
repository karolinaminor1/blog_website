

function pokaz_posty(){

document.getElementById("flexbox2").style.display="flex";
document.getElementById("flexbox3").style.display="flex";

document.getElementById("button").style.display="none";
document.getElementById("button2").style.display="grid";
}


function schowaj_posty(){

document.getElementById("flexbox2").style.display="none";
document.getElementById("flexbox3").style.display="none";

document.getElementById("button").style.display="grid";
document.getElementById("button2").style.display="none";
$('html, body').animate({ scrollTop: 0 }, 'fast');

}


 
$( ".miniaturka" ).mouseover(function() {
  $( this ).animate({
    width: "+=5",
    height: "+=5"
  }, 200);
});



$( ".miniaturka" ).mouseout(function() {
  $( this ).animate({
    width: "-=5",
    height: "-=5"
  }, 200);
});


$( ".wiecej0" ).mouseover(function() {
  $( this ).animate({
    width: "+=2",
    height: "+=2"
  }, 200);
});


$( ".wiecej0" ).mouseout(function() {
  $(this).stop();
  $( this ).animate({
    width: "-=2",
    height: "-=2"
  }, 200);
});



$( "#button" ).mouseover(function() {
  $( "#button" ).animate({
    width: "+=2",
    height: "+=2"
  }, 200);
});


$( "#button" ).mouseout(function() {
  $( "#button" ).animate({
    width: "-=2",
    height: "-=2"
  }, 200);
});



$( "#button2" ).mouseover(function() {
  $( "#button2" ).animate({
    width: "+=2",
    height: "+=2"
  }, 200);
});



$( "#button2" ).mouseout(function() {
  $( "#button2" ).animate({
    width: "-=2",
    height: "-=2"
  }, 200);
});

