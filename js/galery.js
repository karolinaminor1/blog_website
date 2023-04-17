window.onscroll = function() {ScrollFunction()};

let f1=f2=false;

function ScrollFunction(){
  if(document.documentElement.scrollTop > 1850 && f1==false){
    $("#paragraph1").fadeToggle();
    document.getElementById("paragraph1").style.display="block";
    f1=true;
  }

  if(document.documentElement.scrollTop > 3950 && f2==false){
    $("#paragraph2").fadeToggle();
    document.getElementById("paragraph2").style.display="block";
    f2=true;
  }


}