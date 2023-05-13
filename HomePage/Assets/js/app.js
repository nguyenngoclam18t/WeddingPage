var listImg=["./HomePage/Assets/image/banner-img1-1860x940_1506c8f432bc8142adcf778620ec2596.jpg","./HomePage/Assets/image/photo-1620315118895-4f3ed831d14d.webp"];
var currentIndex=1;
var showHeader= document.querySelector(".containers");
function slideShows(i){
    var slide= document.querySelector(".slide-show"); 
   slide.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.2),
   rgba(0, 0, 0, 0.2)), url(${listImg[i]})`;
}
window.onscroll=function(){
    var rectHeader=showHeader.getClientRects()[0];

    if(rectHeader.y<=-40){
        document.querySelector("#head").classList.add("turnOnHeader");
    }else{
        document.querySelector("#head").classList.remove("turnOnHeader");
    }

}

setInterval(()=>{
    if(currentIndex==listImg.length)currentIndex=0;
    slideShows(currentIndex);
    currentIndex++;
},5000);
function mouseOverNav(i) {
    document.querySelectorAll(".nav-item").forEach((element,index)=>{
        if(index==i){element.classList.add("underScore")}

    })  }
  
  function mouseOutNav(i) {
    document.querySelectorAll(".nav-item").forEach((element,index)=>{
        if(index==i){element.classList.remove("underScore")}
    })

  }
