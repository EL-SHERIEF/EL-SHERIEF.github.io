new Splide( '#slider1',{
    type: 'loop',
    speed: 1000,
}) .mount();
new Splide( '#slider2',{ type: 'loop',
    speed: 1000,} ).mount();




gsap.registerPlugin(ScrollTrigger);
gsap.to("#l1" ,{
    backgroundPositionX: "0%",
    stager: 1,
    
    scrollTrigger: {
     trigger: "#l1",
     scrub: 1,
     start: "-=800%", 
    end: "-=700%",
    } 
});
gsap.to("#l2" ,{
    backgroundPositionX: "0%",
    stager: 1,            duration:2,
    scrollTrigger: {

     trigger: "#l2",
     scrub: 1,
     start: "-=700%", 
     end: "-=550%",
    } 
});
gsap.to("#l3" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#l3",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});
gsap.to("#l4" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#l4",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});

gsap.to("#k1" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#k1",
     scrub: 1,
     start: "-=420%", 
    end: "-=320%",
    } 
});
gsap.to("#k2" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#k2",
     scrub: 1,
     start: "-=400%", 
     end: "-=300%",
    } 
});
gsap.to("#k3" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#k3",
     scrub: 1,
     start: "-=400%", 
    end: "-=300%",
    } 
});
gsap.to("#k4" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#k4",
     scrub: 1,
     start: "-=400%", 
     end: "-=300%",
    } 
});
gsap.to("#j1" ,{
    backgroundPositionX: "0%",
    stager: 1,
    
    scrollTrigger: {
     trigger: "#j1",
     scrub: 1,
     start: "-=800%", 
    end: "-=700%",
    } 
});
gsap.to("#j2" ,{
    backgroundPositionX: "0%",
    stager: 1,            duration:2,
    scrollTrigger: {

     trigger: "#j2",
     scrub: 1,
     start: "-=700%", 
     end: "-=550%",
    } 
});
gsap.to("#j3" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#j3",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});
gsap.to("#j4" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#j4",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});


gsap.to("#h1" ,{
    backgroundPositionX: "0%",
    stager: 1,
    
    scrollTrigger: {
     trigger: "#h1",
     scrub: 1,
     start: "-=800%", 
    end: "-=700%",
    } 
});
gsap.to("#h2" ,{
    backgroundPositionX: "0%",
    stager: 1,            duration:2,
    scrollTrigger: {

     trigger: "#h2",
     scrub: 1,
     start: "-=700%", 
     end: "-=550%",
    } 
});
gsap.to("#h3" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#h3",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});
gsap.to("#h4" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#h4",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});

gsap.to("#g1" ,{
    backgroundPositionX: "0%",
    stager: 1,
    
    scrollTrigger: {
     trigger: "#g1",
     scrub: 1,
     start: "-=900%", 
    end: "-=700%",
    } 
});
gsap.to("#g2" ,{
    backgroundPositionX: "0%",
    stager: 1,            duration:2,
    scrollTrigger: {

     trigger: "#g2",
     scrub: 1,
     start: "-=700%", 
     end: "-=550%",
    } 
});
gsap.to("#g3" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#g3",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});
gsap.to("#f1" ,{
    backgroundPositionX: "0%",
    stager: 1,
    
    scrollTrigger: {
     trigger: "#f1",
     scrub: 1,
     start: "-=900%", 
    end: "-=700%",
    } 
});
gsap.to("#f2" ,{
    backgroundPositionX: "0%",
    stager: 1,            duration:2,
    scrollTrigger: {

     trigger: "#f2",
     scrub: 1,
     start: "-=700%", 
     end: "-=550%",
    } 
});
gsap.to("#f3" ,{
    backgroundPositionX: "0%",
    stager: 1,
    scrollTrigger: {
     trigger: "#f3",
     scrub: 1,
     start: "-=600%", 
     end: "-=500%",
    } 
});

AOS.init();
const lenis = new Lenis({duration: 2,wheelMultiplier: 0.4})
lenis.on('scroll', (e) => {
  console.log(e)
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
};
requestAnimationFrame(raf)

function cursorbig() {
    cursors.style.a
    cursors.style.backgroundSize = "7px"
    cursors.style.opacity = "1";
    cursors.style.transform = "Scale(500%)";
    cursors.style.backgroundColor = "#eb5939";
    cursors.style.backgroundImage = "none";
   };
function cursor() {
    cursors.style.backgroundSize = "7px"
    cursors.style.opacity = "1";
    cursors.style.transform = "Scale(100%)";
    cursors.style.backgroundColor = "#eb5939";
    cursors.style.backgroundImage = "none";
   };
    function cursorNA() {
    cursors.style.backgroundSize = "7px"
    cursors.style.opacity = "0";
    cursors.style.transform = "Scale(0%)";
    cursors.style.backgroundColor = "#eb5939";
    cursors.style.backgroundImage = "none";
   };
const coords = { x: 0, y: 0 };
const cursors = document.querySelector(".cursor");
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  cursors.style.left = e.clientX - 18 + "px";
  cursors.style.top = e.clientY - 18 + "px";

});


const btns = document.querySelectorAll(".magnetic");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", function(e){
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 4;
    const y = e.pageY - position.top - position.height / 4;
    btn.children[0].style.transform = "translate(" + x * 1.2 + "px, " + y * 0 + "px)";
    btn.children[0].style.transition = "0.2s";
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mouseout", function(e){
    btn.children[0].style.transform = "translate(0px, 0px)";
    
  });
});



$(window).on("scroll", function () {
    var parallax = $(".photoFrame");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "translateY(" + scrollPosition * -1 + "px" + ")");
  });
  $(window).on("scroll", function () {
    var parallax2 = $(".photoFrame2");
    var scrollPosition2 = $(this).scrollTop();
    parallax2.css("transform", "translateY(" + scrollPosition2 * 0.1 + "px" + ")");
  });
  
  
  $(window).on("scroll", function () {
    var parallax = $(".mouse");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "rotateZ(" + scrollPosition * -0.007 + "deg" + ") rotateX("+ scrollPosition * -0.01 + "deg" +") translatey("+ scrollPosition * -0.1 + "px" +")");

  });
  
  $(window).on("scroll", function () {
    var parallax = $(".cup");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "rotateZ(" + scrollPosition * 0.007 + "deg" + ") translatey("+ scrollPosition * 0.08 + "px" +")");

  });



$(window).on("scroll", function () {
    var parallax = $(".bg");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "translateY(" + scrollPosition * -0.5 + "px" + ")");
  });
  $(window).on("scroll", function () {
    var parallax = $(".img");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "scale(" + scrollPosition * 0.02 + "%" + ")");
  });