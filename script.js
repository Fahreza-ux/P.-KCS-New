(function(){
  "use strict";

  var header=document.getElementById("header");
  var nav=document.getElementById("nav");
  var navToggle=document.getElementById("navToggle");
  var year=document.getElementById("year");

  /* Header shadow on scroll */
  window.addEventListener("scroll",function(){
    header.classList.toggle("scrolled",window.scrollY>10);
  },{passive:true});

  /* Mobile nav */
  if(navToggle){
    navToggle.addEventListener("click",function(){
      var open=nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded",String(open));
    });
  }
  if(nav){
    nav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click",function(){
        nav.classList.remove("open");
        if(navToggle)navToggle.setAttribute("aria-expanded","false");
      });
    });
  }

  /* Year */
  if(year)year.textContent=new Date().getFullYear();

  /* ============ SLIDER ============ */
  var slides=document.querySelectorAll(".slide");
  var dots=document.querySelectorAll(".dot-btn");
  var prevBtn=document.getElementById("prevBtn");
  var nextBtn=document.getElementById("nextBtn");
  var sliderEl=document.getElementById("slider");
  var current=0;
  var autoTimer;
  var AUTO_DELAY=6000;

  function goTo(index){
    if(index<0)index=slides.length-1;
    if(index>=slides.length)index=0;
    slides.forEach(function(s,i){
      s.classList.toggle("active",i===index);
    });
    dots.forEach(function(d,i){
      d.classList.toggle("active",i===index);
    });
    current=index;
  }

  function nextSlide(){goTo(current+1);}
  function prevSlide(){goTo(current-1);}

  function resetAuto(){
    clearInterval(autoTimer);
    autoTimer=setInterval(nextSlide,AUTO_DELAY);
  }

  if(nextBtn)nextBtn.addEventListener("click",function(){nextSlide();resetAuto();});
  if(prevBtn)prevBtn.addEventListener("click",function(){prevSlide();resetAuto();});

  dots.forEach(function(dot,i){
    dot.addEventListener("click",function(){goTo(i);resetAuto();});
  });

  if(slides.length>1){resetAuto();}

  /* Pause on hover */
  if(sliderEl){
    sliderEl.addEventListener("mouseenter",function(){clearInterval(autoTimer);});
    sliderEl.addEventListener("mouseleave",resetAuto);
  }

  /* Keyboard */
  document.addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){prevSlide();resetAuto();}
    if(e.key==="ArrowRight"){nextSlide();resetAuto();}
  });

  /* Reveal on scroll */
  var prefersReduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(!prefersReduced && "IntersectionObserver" in window){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add("visible");
          obs.unobserve(en.target);
        }
      });
    },{threshold:0.14,rootMargin:"0px 0px -40px 0px"});
    document.querySelectorAll(".reveal").forEach(function(el){obs.observe(el);});
  }else{
    document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("visible");});
  }
})();
