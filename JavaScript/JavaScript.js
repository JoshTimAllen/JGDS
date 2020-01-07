
var showingMenu = false;
var menu = document.getElementById("ResponsiveMenu");
console.log(window.innerWidth);
console.log(window.outerWidth);
function ShowMenu(){

  if(showingMenu == false){
    showingMenu = true;
    menu.style.display="flex";
  }
  else {
    showingMenu = false;
    menu.style.display="none";
  }
}

function mediaQuery(x){
  if (x.matches) { 

    }
    else {
    showingMenu = false;
    menu.style.display="none";
    }
    scrollfunction();
}

var body = document.getElementById("body");
  
  var BgVideo = document.getElementById("BgVideo");
  
  var VidContainer = document.getElementById("VidContainer");

  var heading = document.getElementById("heading");
 
  var initTransparency = 0.5;
function scrollfunction(){

  var top = document.getElementById("Top");

  
  
  var derivedTransparency = 0.0;
  
  var derivedMovement = 0.0;

  var MoveFactor  = 150;

  derivedMovement = (window.pageYOffset/(body.offsetHeight));

    //sec1.style.bottom = `${((window.pageYOffset-body.offsetHeight)/((body.offsetHeight)))*100}px`;


 // console.log(derivedMovement);
 derivedTransparency = (window.pageYOffset/(body.offsetHeight));

  top.style.bottom = `${derivedMovement*MoveFactor}px`;
  BgVideo.style.bottom = `${derivedMovement*MoveFactor}px`;
  VidContainer.style.bottom = `${derivedMovement*MoveFactor}px`;

  if(derivedTransparency>initTransparency){
    BgVideo.style.opacity = `${0.9-derivedTransparency}`;
    heading.opacity = `${0.9-derivedTransparency}`;
    if (x.matches) { 
      VidContainer.style.opacity = `${0.9-derivedTransparency}`;
    }
    else{
      VidContainer.style.opacity = 1;
    }
    console.clear();
    console.log(BgVideo.style.opacity);
  }
  else{
    heading.opacity = 1;
    BgVideo.style.opacity = `${initTransparency}`;
    if (x.matches) { 
      VidContainer.style.opacity = `${initTransparency}`;
    }
    else{
      VidContainer.style.opacity = 1;
    }
  }
  
}

window.onscroll = function(){
  scrollfunction();
};
 
var x = window.matchMedia("(max-width: 900px)");
mediaQuery(x);
x.addListener(mediaQuery);