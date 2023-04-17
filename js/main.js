

function a(){
alert("Dziękujemy za zapisanie do newslettera :)");
}




$(document).ready(function() {
$('#n_button').click(function() {
$('#newsletter').slideToggle('slow', 'linear');

});
}); 





 
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



window.onscroll = function() {ScrollFunction()};

let f1=f2=f3=false;

function ScrollFunction(){
  if(document.documentElement.scrollTop > 270 && f1==false){
    $("#paragraph1").fadeToggle();
    document.getElementById("paragraph1").style.display="block";
    f1=true;
  }

  if(document.documentElement.scrollTop > 400 && f2==false){
    $("#paragraph2").fadeToggle();
    document.getElementById("paragraph2").style.display="block";
    f2=true;
  }


  if(document.documentElement.scrollTop > 570 && f3==false){
    $("#paragraph3").fadeToggle();
    document.getElementById("paragraph3").style.display="block";
    f3=true;
  }
}
