
/*
GreenSock: GSAP Object + Tweens and Timelines
 - GSAP tweenLite
 - GSAP tweenMax
 - GSAP timelineLite
 - GSAP timelineMax
*/


/* GSAP Mathord */
// gsap.to()
// gsap.from()
// gsap.fromTo()

// gsap.to("h1",{x:400});
// gsap.to(".star",{x:400,rotation:360,duration:3});
// gsap.to(".star",{x:400,y:200,scale:3,rotation:360,duration:3});
// gsap.to(".star",{x:400,y:200,scale:3,rotation:360,duration:3});



/*
ScrollTrigger
*/

// gsap.timeline({
//   scrollTrigger:{
//     trigger:"section",
//     start:"center center",
//     end:"bottom top",
//     scrub:true,
//     markers:true,
//     pin:true
//   }
// })
// .to(".redCar img",{x:1150})
// .to(".text",{scale:0})


/* Animation-01 */ 


      gsap.registerPlugin(ScrollTrigger);
      const images = gsap.utils.toArray("img");
      const showDemo = () => {
        document.body.style.overflow = "auto";
        document.scrollingElement.scrollTo(0, 0);

        gsap.utils.toArray("section").forEach((section, index) => {
          const w = section.querySelector(".wrapper");
          const [x, xEnd] =
            index % 2
              ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
              : [w.scrollWidth * -1, 0];
          gsap.fromTo(
            w,
            { x },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.5,
              },
            }
          );
        });
      };

      imagesLoaded(images).on("always", showDemo);















