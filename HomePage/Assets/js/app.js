var listImg=["./HomePage/Assets/image/banner-img1-1860x940_1506c8f432bc8142adcf778620ec2596.jpg","./HomePage/Assets/image/photo-1620315118895-4f3ed831d14d.webp"];
var currentIndex=1;
var showHeader= document.querySelector(".containers");
function slideShows(i){
    var slide= document.querySelector(".slide-show"); 
   slide.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.2),
   rgba(0, 0, 0, 0.2)), url(${listImg[i]})`;
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
  
var Listcounter = document.querySelectorAll(".counter");
function counter(el) {
  let to = parseInt(el.innerText);
  let count = 0;
  let time = 2000;
  let step = to / time;
  let counting = setInterval(() => {
    count += step;
    if (count > to) {
      clearInterval(counting);
      el.innerText = to;
    } else {
        el.innerText = Math.ceil(count);
    }
  }, 1);
}
Listcounter.forEach((element) => {
  counter(element);
});

