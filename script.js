document.addEventListener("DOMContentLoaded", function () {


/* =========================
   TYPING ANIMATION
========================= */

const typing = document.getElementById("typing");

const texts = [

"Student • Soil Science • Learner",

"Technology Enthusiast • Problem Solver",

"Movie Watcher • Gamer • Long Drive Fan",

"Professional Student • Part-Time Dreamer"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect(){

  if(!typing) return;

  const current = texts[textIndex];

  if(!deleting){

    typing.textContent =
      current.substring(0,charIndex + 1);

    charIndex++;

    if(charIndex === current.length){

      deleting = true;

      setTimeout(typeEffect,1200);

      return;

    }

  }else{

    typing.textContent =
      current.substring(0,charIndex - 1);

    charIndex--;

    if(charIndex === 0){

      deleting = false;

      textIndex++;

      if(textIndex >= texts.length){
        textIndex = 0;
      }

    }

  }

  setTimeout(
    typeEffect,
    deleting ? 35 : 65
  );

}


typeEffect();



/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
document.getElementById("themeBtn");


if(themeBtn){

  const savedTheme =
  localStorage.getItem("saimoonTheme");


  if(savedTheme === "light"){

    document.body.classList.add("light");

    themeBtn.textContent = "☀";

  }


  themeBtn.addEventListener("click",function(){

    document.body.classList.toggle("light");


    const light =
    document.body.classList.contains("light");


    localStorage.setItem(
      "saimoonTheme",
      light ? "light" : "dark"
    );


    themeBtn.textContent =
    light ? "☀" : "☾";

  });

}



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
".skill-card,.hobby-card,.contact-card,.gallery-item,.timeline-item,.about-content,.about-photo"
);


const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

observer.unobserve(
entry.target
);

}

});

},

{
threshold:.12
}

);


revealElements.forEach((element,index)=>{

element.style.opacity = "0";

element.style.transform =
"translateY(35px)";

element.style.transition =
"opacity .7s ease, transform .7s ease";

element.style.transitionDelay =
(index % 6) * 80 + "ms";

observer.observe(element);

});



/* =========================
   GALLERY CLICK EFFECT
========================= */

const galleryImages =
document.querySelectorAll(
".gallery-item img"
);


galleryImages.forEach(image=>{

image.addEventListener(
"click",
()=>{

image.classList.toggle(
"zoomed"
);

});

});


});
