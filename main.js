document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

let tl = gsap.timeline()

tl.to(".preloader", {
    y: "-100%",
    borderRadius: "100%",
    duration: 1,
    delay: 1,
    ease: "power2.out"
})
.add(() => {
    document.querySelector(".preloader").style.display = "none"
})
.from(".navbar", {
    duration: 1,
    y: "-100%",
});

// Text Animation
let paths = document.querySelectorAll("svg path");

tl.to(paths, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    onStart: () => {
        paths.forEach(path => (path.style.transform = "translateY(100%"))
    }
})

tl.from(".left svg", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.6")
.from(".left h4", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.4")
.from(".left p", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.4")
.from(".left .left-button", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.6")
.from(".image", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.4")
.from(".right p", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.4")
.from(".right h2", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
}, "-=0.5")

// Initial setup for #page


gsap.set("#page", {
  opacity: 0.873618, // Initial opacity
  transform: "translateY(5.05529px) scale(0.993681) translateZ(0px)", // Initial transform
});

// Animate the text spans inside #page2
const texts = document.querySelectorAll("#page2 h2 span");

texts.forEach((text) => {
  gsap.set(text, { y: "100%", opacity: 0 }); // Set initial state for each span
});

// Animate the text spans when #page2 appears
gsap.to(texts, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#page2",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

gsap.to(".ek", {
  duration: 3,
  scrollTrigger: {
    trigger: ".ek",
    start: "top 10%",
    end: "bottom -50%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

gsap.to(".do", {
  duration: 3,
  scrollTrigger: {
    trigger: ".do",
    start: "top 27%",
    end: "bottom 20%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

gsap.to(".tin", {
  duration: 3,
  scrollTrigger: {
    trigger: ".tin",
    start: "top 45%",
    end: "bottom 85%",
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

// Page 3

const text3 = document.querySelectorAll("#page3 h2 span");

text3.forEach((text) => {
  gsap.set(text, { y: "100%", opacity: 0 }); // Set initial state for each span
});

// Animate the text spans when #page2 appears
gsap.to(text3, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

// Page 5

const text5 = document.querySelectorAll("#page5 h2 span");

text3.forEach((text) => {
  gsap.set(text, { y: "100%", opacity: 0 }); // Set initial state for each span
});

// Animate the text spans when #page5 appears
gsap.to(text5, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#page5",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

// Projects Animation

let workPhotoItems = document.querySelectorAll(".work-photo-item");
workPhotoItems.forEach((item, index) => {
  item.style.zIndex = workPhotoItems.length - index;
})

gsap.set(".work-photo-item", {
  clipPath: "inset(0px 0px 0px 0px)"
});

const animation = gsap.to(".work-photo-item:not(:last-child)", {
  clipPath: function() {
    return "inset(0px 0px 100% 0px)";
  },
  stagger: 0.5,
  ease: "none"
});

ScrollTrigger.create({
  trigger: ".work",
  start: "top top",
  end: "bottom bottom",
  animation: animation,
  scrub: 1,
})

// Projects Animation

let projectsPhotoItems = document.querySelectorAll(".project-photo-item");
projectsPhotoItems.forEach((item, index) => {
  item.style.zIndex = projectsPhotoItems.length - index;
})

gsap.set(".project-photo-item", {
  clipPath: "inset(0px 0px 0px 0px)"
});

const animation2 = gsap.to(".project-photo-item:not(:last-child)", {
  clipPath: function() {
    return "inset(0px 0px 100% 0px)";
  },
  stagger: 0.5,
  ease: "none"
});

ScrollTrigger.create({
  trigger: ".project",
  start: "top top",
  end: "bottom bottom",
  animation: animation2,
  scrub: 1,
})
  
});



